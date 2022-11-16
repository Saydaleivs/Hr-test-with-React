import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { GetApi } from "../Services/Get"

export default function AddEmployee() {
  const [employees, setEmployees] = useState()

  useEffect(() => {
    GetApi("/get").then((res) => setEmployees(res.data))
  }, [])

  // Add employee with post request
  async function addEmployee(e) {
    e.preventDefault()

    const children = e.target.children
    const department = children[4]

    let gender
    children[6].querySelectorAll("input").forEach((gen) => {
      if (gen.checked === true) {
        gender = gen.value
      }
    })

    const age = +children[7].value.slice(4)
    const currYear = new Date().getFullYear()

    const newEmployee = {
      id: employees[employees.length - 1].id + 1,
      FullName: children[0].value,
      position: children[2].value,
      department: department.options[department.selectedIndex].text,
      gender,
      birthDate: children[7].value,
      age: currYear - age,
    }

    axios.post("https://express-server-saydaleivs.vercel.app/post", newEmployee)
    alert("Employee has been added successfully !")
  }

  return (
    <form onSubmit={addEmployee}>
      <input type="text" placeholder="Full Name" /> <br />
      <input type="text" placeholder="Position" /> <br />
      <select className="custom-select custom-select-lg mb-3">
        <option value="1">Department</option>
        <option value="2">IT</option>
        <option value="3">Accounting</option>
        <option value="4">Marketing</option>
      </select>
      <br />
      <fieldset className="form-group">
        <div className="row">
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="Male"
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="Female"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <input type="date" placeholder="Date of Birth" /> <br /> <br />
      <button type="submit">Add Employee</button>
    </form>
  )
}
