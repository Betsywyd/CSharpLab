--create database EmployeeToDos;
--use EmployeeToDos;

--create table Employee(
--Id int primary key identity(1,1),
--[name] nvarchar(20),
--[hours] int,
--title nvarchar(40)
--);

--insert into Employee
--values(
--'yiding',30,'manager'
--),
--(
--'feng',20,'CEO'
--);

--SELECT * FROM Employee;

--CREATE TABLE ToDos(
--id int primary key identity(1,1),
--[name] nvarchar(25),
--[description] nvarchar(100),
--assignedTo int foreign key references Employee(id),
--hoursNeeded int,
--isComplete bit
--);

--SELECT * FROM ToDos;

--insert into ToDos
--values ('Water Plants', 'Plants need water', 1, 1, 0),
--('Cheat on Taxes', 'Dont let the irs know', 1, 2, 0),
--('Hack into the FBI', 'We need some case files deleted', 2, 1, 1);
