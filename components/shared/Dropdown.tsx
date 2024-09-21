import React from 'react'

type DropdownProps = {
    value?: string
    onChangeHandler?: () => void
  }

const Dropdown = () => {
  return (
    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

  )
}

export default Dropdown
