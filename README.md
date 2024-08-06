# SQL Challenge: Company-Directory

## Description

Company Directory is a command-line application designed to manage a company's employee database using Node.js, Inquirer, and PostgreSQL. This application allows business owners to view and manage departments, roles, and employees, making it easier to organize and plan business activities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Features](#features)
- [Built With](#built-with)
- [Mockup](#mockup)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Acknowledgement](#acknowledgement)

## Installation
#### Repo link:
https://github.com/Robert-Ulloa/Company-Directory

Clone the repository:

```sh
git clone https://github.com/Robert-Ulloa/Company-Directory
cd Company Directory
```

Install dependencies:

```sh
npm install
```

Set up the PostgreSQL database:

1. Make sure PostgreSQL is installed and running on your machine.
2. Create a database named `employee_tracker`.
3. Create a `.env` file in the root of your project with the following content:

```makefile
DB_USER=your_postgresql_username
DB_PASSWORD=your_postgresql_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=employee_tracker
```

Import the database schema:

```sh
psql -U your_postgresql_username -d employee_tracker -f db/schema.sql
```

Seed the database (optional):

```sh
psql -U your_postgresql_username -d employee_tracker -f db/seeds.sql
```

## Usage

Start the application:

```sh
node index.js
```

Follow the prompts to view and manage departments, roles, and employees.

**Important:** Ensure you are in the correct directory when running `node index.js`. The application should be run from the `src` directory:

```sh
cd src
node index.js
```

## Database Schema

The database schema includes three tables: department, role, and employee.

- **department**
  - id: SERIAL PRIMARY KEY
  - name: VARCHAR(30) UNIQUE NOT NULL

- **role**
  - id: SERIAL PRIMARY KEY
  - title: VARCHAR(30) UNIQUE NOT NULL
  - salary: DECIMAL NOT NULL
  - department_id: INTEGER NOT NULL REFERENCES department(id)

- **employee**
  - id: SERIAL PRIMARY KEY
  - first_name: VARCHAR(30) NOT NULL
  - last_name: VARCHAR(30) NOT NULL
  - role_id: INTEGER NOT NULL REFERENCES role(id)
  - manager_id: INTEGER REFERENCES employee(id)

## Features

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

## Built With

- Node.js
- Inquirer
- PostgreSQL
- dotenv

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## Mockup
[Click here to watch the mockup video](https://drive.google.com/file/d/1R16VLat_7unGjODpxM1EXeme5CG4vBcu/preview)
By using the /preview link in the Google Drive URL, it will allow the video to be embedded and playable directly in the README file.

https://drive.google.com/file/d/1R16VLat_7unGjODpxM1EXeme5CG4vBcu/view?usp=sharing



## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Questions

For any questions, please contact me with the information below:

- GitHub: [Robert-Ulloa](https://github.com/Robert-Ulloa)
- Email: roanuc8@gmail.com
- LinkedIn: [Roberto Ulloa](https://www.linkedin.com/in/roberto-ulloa/)

## Acknowledgement

I used an AI assistant to debug and explore better coding options.
