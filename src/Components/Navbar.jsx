import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav
      className="nav bg-black mb-3"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Link className="nav-link active" to="/">
        Dashboard
      </Link>
      <Link className="nav-link active" to="employees">
        All Employees
      </Link>
      <Link className="nav-link active" to="add">
        Add Employee
      </Link>
    </nav>
  )
}
