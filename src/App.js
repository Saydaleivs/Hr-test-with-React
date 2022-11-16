import Dashboard from "./Pages/TheDashboard"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AddEmployee from "./Pages/AddEmployee"
import SingleEmployee from "./Components/SingleEmployee"
import AllEmployee from "./Pages/AllEmployees"
import EditEmployee from "./Components/EditEmployee"
import Navbar from "./Components/Navbar"
import "./styles/style.css"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="employees" element={<AllEmployee />}></Route>
        <Route path="employees/:id" element={<SingleEmployee />}></Route>
        <Route path="employees/:id/edit" element={<EditEmployee />}></Route>
        <Route path="add" element={<AddEmployee />}></Route>
      </Routes>
    </Router>
  )
}
