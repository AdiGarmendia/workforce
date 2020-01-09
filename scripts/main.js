import { getEmployees } from "./EmployeeProvider.js";
import { getComputers } from "./ComputerProvider.js";
import EmployeeList from "./EmployeeList.js";
import { getDepartments } from "./DepartmentProvider.js";
import { getLocations } from "./LocationProvider.js";
import { getEmployeeCustomer } from "./EmployeeCustomerProvider.js";
import { getCustomers } from "./CustomerProvider.js";


getEmployees()
.then(getComputers)
.then(getDepartments)
.then(getLocations)
.then(getEmployeeCustomer)
.then(getCustomers)
.then(EmployeeList)