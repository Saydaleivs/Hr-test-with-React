import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetApi } from "../Services/Get"

export default function EditEmployee() {
  const [employee, setEmployee] = useState([])
  const [isAvailable, setIsAvailable] = useState(false)
  const { id } = useParams()

  const [FullName, setFullName] = useState()
  const [position, setPosition] = useState()
  const [birthDate, setBirthDate] = useState()
  const [department, setDepartment] = useState()

  useEffect(() => {
    GetApi().then((res) => {
      const chosenEmployee = res.data.find((data) => {
        return data.id === parseInt(id)
      })

      setEmployee(chosenEmployee)
      setFullName(chosenEmployee.FullName)
      setPosition(chosenEmployee.position)
      setBirthDate(chosenEmployee.birthDate)
      setDepartment(chosenEmployee.department)
      setIsAvailable(true)
    })
  }, [])

  function addEmployee(e) {
    e.preventDefault()

    let findGender
    document.querySelectorAll(".form-check-input").forEach((gen) => {
      if (gen.checked === true) {
        findGender = gen.value
      }
    })

    const age = birthDate.slice(0, 4)
    const currYear = new Date().getFullYear()
    console.log(currYear, age)

    const editedEmployee = {
      id: employee.id,
      FullName,
      position,
      birthDate,
      department,
      gender: findGender,
      age: currYear - parseInt(age),
    }

    axios.put(
      "https://express-server-saydaleivs.vercel.app/put",
      editedEmployee
    )
    alert("Employee`s info has been edited, thanks !")
  }

  useEffect(() => {
    if (isAvailable) {
      if (employee.gender === "Male") {
        document.getElementById("gridRadios1").checked = true
      } else {
        document.getElementById("gridRadios2").checked = true
      }
    }
  })

  const nameHandleChange = (e) => setFullName(e.target.value)
  const positionHandleChange = (e) => setPosition(e.target.value)
  const dateHandleChange = (e) => setBirthDate(e.target.value)
  const departmentHandleChange = (e) => setDepartment(e.target.value)

  if (isAvailable) {
    return (
      <div>
        <form onSubmit={addEmployee}>
          <input
            type="text"
            placeholder="Full Name"
            value={FullName}
            onChange={nameHandleChange}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={positionHandleChange}
          />{" "}
          <br />
          <select
            name=""
            id=""
            onChange={departmentHandleChange}
            value={department}
          >
            <option value="1">Department</option>
            <option value="IT">IT</option>
            <option value="Accounting">Accounting</option>
            <option value="Marketing">Marketing</option>
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
          <input
            type="text"
            placeholder="Date of Birth"
            value={birthDate}
            onChange={dateHandleChange}
          />{" "}
          <br /> <br />
          <button type="submit">Edit Employee</button>
        </form>
      </div>
    )
  }
}
