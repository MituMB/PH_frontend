import React from 'react'
import { Link } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

export const Navabar = () => {
  return (
    <div className="flex gap-3 text-lg">
        <a href="">Logo</a>
        <Link to="/tasks">Tasks</Link>
        <Link to="/users">Users</Link>
        <div>
          <ModeToggle/>
        </div>
    </div>
  )
}
