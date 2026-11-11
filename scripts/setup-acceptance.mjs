/** Separate, keyless profile: never inherit the interactive development profile. */
import { writeFile, access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { dump } from 'js-yaml'
import { seedProfile } from './profile-setup.mjs'
const project = fileURLToPath(new URL('../', import.meta.url))
const profile = await seedProfile(join(project, '.superpowers/runtime/acceptance-home'), { acceptance: true })
const patch = join(profile, 'cordis.patch.yml')
try { await access(patch) } catch {
  await writeFile(patch, dump([
    { id: 'ui-settings-general', name: '@deepseek-ai/dsh-client-ui-settings-general', config: { welcomeNoticeVersion: '2026-11-01' } },
    { id: 'dsh-moss-live', name: 'dsh-moss-live', config: {
      voiceModel: { provider: 'native-voice-test', model: 'realtime-next-2' }, delegation: { agentPreset: 'minimal' },
    } },
    { insert: [{ id: 'moss-local-fixture', name: new URL('./mock-dsh.mjs', import.meta.url).href }] },
    { id: 'agent-default-model', config: { provider: 'fixture-ordinary', model: 'fixture-worker' } },
    { id: 'llm-pi-ai', name: '@deepseek-ai/dsh-llm-pi-ai', config: { providers: { 'native-voice-test': {
      displayName: 'Native voice fixture', apiKeyEnv: 'NATIVE_VOICE_TEST_API_KEY', api: 'openai-completions', baseURL: 'http://127.0.0.1:59444/v1',
      models: [{ id: 'realtime-next-2', name: 'Realtime next 2' }],
    } } } },
  ]))
}
