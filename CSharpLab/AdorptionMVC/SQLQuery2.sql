select * from Animals;

insert into Animals(img,[Name],[Description],Breed,age)
values('https://images.unsplash.com/photo-1529831129093-0fa4866281ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','AA','Nice','Labrador',1),
('https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','BB','Adorable','Goldendoodle',2),
('https://images.unsplash.com/photo-1626435872669-8bcb32be46dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80','CC','Beautiful','Dalmatian',3),
('https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80','DD','Cute','Labrador',1),
('https://images.unsplash.com/photo-1529831129093-0fa4866281ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','EE','Greate','Labrador',3),
('https://images.unsplash.com/photo-1547525623-c7d42c20284c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','FF','Brave','Goldendoodle',2),
('https://images.unsplash.com/photo-1576457664271-c2fe30ff7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','GG','Owesome','Goldendoodle',1);


delete from Animals
where Id>=79;