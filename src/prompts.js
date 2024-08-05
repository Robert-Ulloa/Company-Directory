const inquirer = require('inquirer');
const { getDeparments, getRoles, getEmployees } = require('./queries');

const mainMenu = async () => {
    const answers = await inquirer.createPromptModule([
        {
            type: 'list',
            name: 'action',
            message:'Waht would you like to do?',
            choices: [
                'View all deparments',
                'View all roles',
                'View allemployees',
                'Add a deparment',
                'Add a role',
                'Add a employee',
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
        case 'view all employees':
            const employees= await getEmployees();
            console.table(employees);
            break;
        case 'exit':
            process.exit();
    }

    mainMenu();

};

module.exports = mainMenu;