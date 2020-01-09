let employeeCustomer = []

export const useEmployeeCustomer = () => employeeCustomer.slice()

export const getEmployeeCustomer = () => fetch("http://localhost:8088/employeeCustomers")
    .then(res => res.json())
    .then(parsedEmployeeCustomer => employeeCustomer = parsedEmployeeCustomer)