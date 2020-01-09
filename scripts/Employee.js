const Employee = (employee, computer, department, location, customers) => {
  return `
      <div class="employee">
    <header class="employee__name">
        <h3>${employee.firstName} ${employee.lastName}</h3>
    </header>
    <section class="employee__computer">
        Currently using a ${computer.year}  ${computer.model}
    </section>
    <section class="employee__department">
        Part of ${department.name}
    </section>
    <section class="employee__location">
        Works at the ${location.name} office
    </section>
    <div>
                <h4>Currently working for...</h4>
                <ol>
                    ${customers
                      .map(c => {
                        return `<li>${c.businessName}</li>`;
                      })
                      .join("")}
                </ol>
            </div>
</div>
  `;
};

export default Employee;
