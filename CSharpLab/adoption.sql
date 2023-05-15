create table Animals(
Id int primary key identity(1,1),
Img nvarchar(255),
[Name] nvarchar(25) ,
[Description] nvarchar(25), 
Breed nvarchar(25) ,
Age int 

);

--drop table Animals;
select * from Animals;

insert into Animals(img,[Name],[Description],Breed,age)
values('https://images.unsplash.com/photo-1529831129093-0fa4866281ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','AA','Nice','Labrador',1),
('https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','BB','Adorable','Goldendoodle',2),
('https://images.unsplash.com/photo-1626435872669-8bcb32be46dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80','CC','Beautiful','Dalmatian',3);


