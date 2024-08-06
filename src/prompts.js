const inquirer = require('inquirer');
const { getDepartments, getRoles, getEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries');

const mainMenu = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit',
            ],
        },
    ]);

    switch (answers.action) {
        case 'View all departments':
            const departments = await getDepartments();
            console.table(departments);
            break;
        case 'View all roles':
            const roles = await getRoles();
            console.table(roles);
            break;
        case 'View all employees':
            const employees = await getEmployees();
            console.table(employees);
            break;
        case 'Add a department':
            await promptAddDepartment();
            break;
        case 'Add a role':
            await promptAddRole();
            break;
        case 'Add an employee':
            await promptAddEmployee();
            break;
        case 'Update an employee role':
            await promptUpdateEmployeeRole();
            break;
        case 'Exit':
            process.exit();
    }

    mainMenu();
};

const promptAddDepartment = async () => {
    const answers = await inquirer.prompt([
        { name: 'name', message: 'Enter the name of the department:' }
    ]);

    await addDepartment(answers.name);

    console.log('Department added successfully!');
};

const promptAddRole = async () => {
    const departments = await getDepartments();
    const departmentChoices = departments.map(dept => ({
        name: dept.name,
        value: dept.id,
    }));

    const answers = await inquirer.prompt([
        { name: 'title', message: 'Enter the title of the role:' },
        { name: 'salary', message: 'Enter the salary for the role:' },
        {
            type: 'list',
            name: 'department_id',
            message: 'Select the department for the role:',
            choices: departmentChoices,
        },
    ]);

    await addRole(answers.title, answers.salary, answers.department_id);

    console.log('Role added successfully!');
};

const promptAddEmployee = async () => {
    const roles = await getRoles();
    const roleChoices = roles.map(role => ({
        name: role.title,
        value: role.id,
    }));

    const employees = await getEmployees();
    const managerChoices = employees.map(emp => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id,
    }));
    managerChoices.unshift({ name: 'None', value: null });

    const answers = await inquirer.prompt([
        { name: 'first_name', message: 'Enter the first name of the employee:' },
        { name: 'last_name', message: 'Enter the last name of the employee:' },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select the role for the employee:',
            choices: roleChoices,
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Select the manager for the employee (if any):',
            choices: managerChoices,
        }
    ]);

    await addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id);

    console.log('Employee added successfully!');
};

const promptUpdateEmployeeRole = async () => {
    const employees = await getEmployees();
    const employeeChoices = employees.map(emp => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id,
    }));

    const roles = await getRoles();
    const roleChoices = roles.map(role => ({
        name: role.title,
        value: role.id,
    }));

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select the employee to update:',
            choices: employeeChoices,
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select the new role:',
            choices: roleChoices,
        },
    ]);

    await updateEmployeeRole(answers.employee_id, answers.role_id);

    console.log('Employee role updated successfully!');
};

module.exports = mainMenu;
