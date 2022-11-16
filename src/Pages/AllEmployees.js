import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GetApi } from "../Services/Get"

export default function AllEmployee() {
  const [employees, setEmployees] = useState()
  const navigate = useNavigate()

  // Calling GetApi function from Folder Services to store all employees to STATE
  useEffect(() => {
    GetApi().then((res) => setEmployees(res.data))
  }, [])

  // handleGenderChange is for filter all employees with their gender
  const handleGenderChange = (e) => {
    if (e.target.value !== "all") {
      const filterWithGender = employees.filter((employee) => {
        return employee.gender === e.target.value
      })
      setEmployees(filterWithGender)
    } else GetApi().then((res) => setEmployees(res.data))
  }

  // handleDepartmentChange is for filter all employees with their department
  const handleDepartmentChange = (e) => {
    const filterWithGender = employees.filter((employee) => {
      return employee.department === e.target.value
    })
    setEmployees(filterWithGender)
  }

  return (
    <>
      <table className="table table-striped table-dark">
        <thead className="">
          <tr>
            <th scope="col">Employee`s ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Department</th>
            <th scope="col">Position</th>
            <th scope="col">Gender</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Detailed info</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => {
            return (
              <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.FullName}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td>{employee.gender}</td>
                <td>{employee.birthDate}</td>
                <td
                  onClick={() => {
                    navigate(`${employee.id}`)
                  }}
                >
                  <Link>Show More</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="p-3 mb-2 bg-black text-white">
        <label className="badge" htmlFor="genders" style={{ fontSize: "20px" }}>
          Filter by gender
        </label>
        <div className="form-check" id="genders">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={handleGenderChange}
            value="Male"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={handleGenderChange}
            value="Female"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
      </div>
      <div className="form-check p-5 mb-2 bg-black text-white">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={handleGenderChange}
          value="all"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          All employees
        </label>
      </div>

      {/* // ===============================Department====================================== */}

      <div className="p-3 mb-2 bg-black text-white">
        <label className="badge" htmlFor="genders" style={{ fontSize: "20px" }}>
          Filter by Department
        </label>
        <div className="form-check" id="genders">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={handleDepartmentChange}
            value="IT"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            IT
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={handleDepartmentChange}
            value="Accounting"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Accounting
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={handleDepartmentChange}
            value="Marketing"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Marketing
          </label>
        </div>
      </div>
    </>
  )
}
