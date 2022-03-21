INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Sales Manager', 120000.00, 1),
  ('Sales Person', 80000.00, 1),
  ('Lead Engineer', 150000.00, 2),
  ('Software Engineer', 120000.00, 2);
  ('Account Manager', 160000.00, 3),
  ('Accountant', 125000.00, 3),
  ('Chief Counsel', 250000.00, 4),
  ('Lawyer', 190000.00, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ernest', 'Paul', 1, 0),
  ('Mike', 'Chan', 2, nil),
  ('Ashley', 'Rodriguez', 3, 0),
  ('Kevin', 'Tupik', 4, 2),
  ('Kunal', 'Singh', 5, 0),
  ('Malia', 'Brown', 6, 4),
  ('Sarah', 'Lourd', 7, 0),
  ('Tom', 'Allen', 7, 6)
  