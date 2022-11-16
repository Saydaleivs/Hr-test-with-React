import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetApi } from "../Services/Get"

export default function SingleEmployee() {
  const [employee, setEmployee] = useState(null)
  const [index, setIndex] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    GetApi().then((res) => {
      const data = res.data
      const indexOfObj = data.findIndex((emp) => {
        return emp.id === parseInt(id)
      })
      setIndex(indexOfObj)
      setEmployee(data)
    })
  }, [])

  function deleteEmployee() {
    axios.put(
      "https://express-server-saydaleivs.vercel.app/delete",
      employee[index]
    )
    alert("employee deleted successfully")
    navigate("/employees")
  }

  if (employee !== null)
    return (
      <section className="vh-90">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0"></div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">{employee[index].FullName}</h5>
                      <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                        {employee[index].position}
                      </p>
                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p className="small text-muted mb-1">Gender</p>
                          <p className="mb-0">{employee[index].gender}</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Department</p>
                          <p className="mb-0">{employee[index].department}</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Age</p>
                          <p className="mb-0">{employee[index].birthDate}</p>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                        <button
                          type="button"
                          className="btn btn-outline-primary me-1 flex-grow-1"
                          onClick={() => {
                            navigate(`/employees/${id}/edit`)
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary me-1 flex-grow-1"
                          onClick={deleteEmployee}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
