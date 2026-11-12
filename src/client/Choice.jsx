import React, { useState } from 'react'
import { Button, Menu, IconChevronDownOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { cx } from './classes.js'

export function Choice({ label, value, items, onChange, disabled, placeholder }) {
  const [open, setOpen] = useState(false)
  return <div className={cx('moss-field')}><span>{label}</span><Menu open={open} onClose={() => setOpen(false)} portal autoFocus minWidthFromAnchor
    selectedId={value} items={items} onSelect={id => { onChange(id); setOpen(false) }}
    anchor={<Button variant="outline" className={cx('moss-choice')} aria-label={label} aria-haspopup="menu" aria-expanded={open} disabled={disabled} onClick={() => setOpen(!open)}>
      <span>{items.find(item => item.id === value)?.label ?? placeholder ?? value}</span><IconChevronDownOutlineRegular/>
    </Button>}/></div>
}
