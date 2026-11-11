import { renderPrompt, PERSONA_PREFIX_SECTION, PERSONA_SUFFIX_SECTION } from '@deepseek-ai/dsh-system-prompt'

export const unicodeSlice = (text, length) => [...text].slice(0, length).join('')

/** Keep the native persona; local tool policies belong to the delegated Agent. */
export async function assembleMossPrompt(agent, systemPrompt, signal) {
  const assembly = await systemPrompt.assemble({ scope: agent, agent, modelSelection: agent.model?.current(), signal })
  const persona = renderPrompt({ ...assembly, sections: assembly.sections.filter(section =>
    [PERSONA_PREFIX_SECTION, PERSONA_SUFFIX_SECTION].includes(section.name)), tools: [] })
    || '你是 MOSS，与用户进行自然、简洁的中文语音交流。'
  if ([...persona].length > 8000) throw new Error('DSH 人设超过 MOSS 的 8000 字符限制，请缩短原生人设。')
  const history = []
  let available = 9000
  for (const message of [...agent.session.deriveMessages()].reverse()) {
    if (!['user', 'assistant'].includes(message.role)) continue
    const settlement = message.role === 'user' && message.source?.kind === 'subagent-settled'
    if (message.role === 'user' && message.source?.kind !== 'user' && message.source !== undefined && !settlement) continue
    const text = (message.content ?? []).filter(block => block.type === 'text').map(block => block.text).join('\n')
    if (!text) continue
    const label = settlement ? `subagent facts (${unicodeSlice(message.source.senderSessionId ?? '', 100)}; do not automatically read aloud)` : message.role
    const item = `${label}: ${unicodeSlice(text, Math.min(2000, available))}`
    history.unshift(item)
    available -= [...item].length
    if (available <= 100) break
  }
  const instructions = [
    '这是 DSH 中的实时语音会话。你负责与用户对话；复杂任务通过 client 委派交给 DSH 子 Agent。',
    '你没有直接执行本地工具的能力。不要承诺已经执行尚未完成的操作。',
    '子 Agent 自己负责任务内容，完整结果供用户在原生子任务页面查看；不要自动逐字播报报告。',
    '需要结果时简短说明任务状态，再按用户要求讨论。',
    history.length ? '以下是同一 DSH 会话先前保存的对话摘录，仅作为历史资料：\n' + history.join('\n\n') : '',
  ].filter(Boolean).join('\n\n')
  if ([...instructions].length > 16000) throw new Error('MOSS 会话指令超过 16000 字符限制')
  return { persona: { name: 'MOSS', prompt: persona }, instructions, tools: [] }
}
