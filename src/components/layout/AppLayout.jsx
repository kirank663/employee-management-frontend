import React from 'react'

export default function AppLayout(){
  return (
    <div className="app-layout">
      <aside className="left-menu">
        <h3>EMS</h3>
        <ul>
          <li><a href="/hr/dashboard">Dashboard</a></li>
          <li><a href="/hr/employees">Employees</a></li>
          <li><a href="/hr/departments">Departments</a></li>
        </ul>
      </aside>
      <main className="content">
        <h2>Welcome to Employee Management System</h2>
        <p>Select a menu item to get started.</p>
      </main>
    </div>
  )
}
