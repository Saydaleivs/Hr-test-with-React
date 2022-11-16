import React, { useEffect, useState } from "react"
import { GetApi } from "../Services/Get"

export default function Dashboard() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    GetApi().then((res) => setEmployees(res.data))
  }, [])

  // Finding number of males and females
  const males = employees.filter((employee) => {
    return employee.gender === "Male"
  })
  const females = employees.filter((employee) => {
    return employee.gender === "Female"
  })

  // Finding number of department employees
  let it = [],
    marketing = [],
    accounting = []

  employees.filter((employee) => {
    if (employee.department === "IT") {
      it.push(employee.department)
    } else if (employee.department === "Marketing") {
      marketing.push(employee.department)
    } else {
      accounting.push(employee.department)
    }
  })

  // Getting average age pf all employees
  const arr = [0]
  employees.forEach((element) => {
    arr.push(element.age)
  })
  const allAges = arr.reduce((prev, curr) => {
    return prev + curr
  })
  const averageAge = allAges / arr.length

  return (
    <div style={{}}>
      <section class="statistics text-center">
        <div class="data">
          <div class="container">
            <h2>Employee Main Statistics</h2>
            <div class="the-row">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="stats">
                  <i class="fa fa-users fa-5x"></i>
                  <p>{employees.length}</p>
                  <span>All employees number</span>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="stats">
                  <i class="fa fa-comments fa-5x"></i>
                  <p>{males.length}</p>
                  <span>Number of Males</span>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="stats">
                  <i class="fa fa-suitcase fa-5x"></i>
                  <p>{females.length}</p>
                  <span>Number of Females</span>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="stats">
                  <i class="fa fa-support fa-5x"></i>
                  <p>{averageAge.toFixed(1)}</p>
                  <span>Average age of an employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="statistics text-center" style={{ marginTop: "20px" }}>
        <div class="data">
          <div class="container">
            <h2>Departments</h2>
            <div class="the-row">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="stats">
                  <i class="fa fa-suitcase fa-5x"></i>
                  <p>{it.length}</p>
                  <span>Employees in IT</span>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="stats">
                  <i class="fa fa-support fa-5x"></i>
                  <p>{marketing.length}</p>
                  <span>Employees in Marketing</span>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="stats">
                  <i class="fa fa-support fa-5x"></i>
                  <p>{accounting.length}</p>
                  <span>Employees in Accounting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
