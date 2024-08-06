-- Sample data
INSERT INTO department (name)
VALUES ('Engineering'), ('Finance'), ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 70000, 1), ('Accountant', 60000, 2), ('HR Manager', 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Winnie', 'Poe', 1, NULL), ('Marge', 'Simpson', 2, 1), ('William', 'Shakespeare', 3, 1);
