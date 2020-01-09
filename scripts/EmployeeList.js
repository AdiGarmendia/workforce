import { useEmployees } from "./EmployeeProvider.js"
import { useComputers } from "./ComputerProvider.js"
import Employee from "./Employee.js"
import { useDepartments } from "./DepartmentProvider.js"
import { useLocations } from "./LocationProvider.js"
import { useCustomers } from "./CustomerProvider.js"
import { useEmployeeCustomer } from "./EmployeeCustomerProvider.js"

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomer()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find this employee's computer
            const foundComputer = computers.find(computer => computer.id === employee.computerId)

            // find this employee's department
            const foundDepartment = departments.find(department => department.id === employee.departmentId)

            // find employee's location
            const foundLocation = locations.find(location => location.id === employee.locationId)

            // Find all customer relationships for the current employee
            const customerRelationships = empCust.filter(ec => ec.employeeId === employee.id)

            // For each relationship, find the corresponding company
            const foundCustomersArray = customerRelationships.map(rc => {
                const foundCustomer = customers.find(customer => customer.id === rc.customerId)
                return foundCustomer

              })

            // Get HTML representation of employee
            const html = Employee(employee, foundComputer, foundDepartment, foundLocation, foundCustomersArray)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList