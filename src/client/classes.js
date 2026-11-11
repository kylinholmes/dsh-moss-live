import css from './styles.module.css'
export const cx = (...names) => names.filter(Boolean).flatMap(name => name.split(/\s+/)).map(name => css[name] ?? name).join(' ')
