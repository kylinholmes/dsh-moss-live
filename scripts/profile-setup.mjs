import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/** Seed an isolated profile without replacing edits, model setup or credentials. */
export async function seedProfile(home, { acceptance = false } = {}) {
  const profile = join(home, 'profiles', 'web')
  await mkdir(profile, { recursive: true })
  const create = async (name, text) => {
    try { await writeFile(join(profile, name), text, { flag: 'wx' }) }
    catch (error) { if (error.code !== 'EEXIST') throw error }
  }
  await create('package.json', JSON.stringify({
    name: acceptance ? 'moss-acceptance-profile' : 'moss-development-profile', private: true,
    dependencies: { 'dsh-moss-live': 'file:../../../../..' },
    dsh: { profile: { bundles: ['@deepseek-ai/dsh-base', '@deepseek-ai/dsh-web-app', 'dsh-moss-live'] } },
  }, null, 2) + '\n')
  await create('cordis.yml', '[]\n')
  return profile
}
