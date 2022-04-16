
begin

insert into addr(pers_id, addr)
  select id, 'Str. Dorofteilor, nr. 2' from pers p 
  where p.name = 'Fratelo Dinca'
  and rownum = 1;


insert into addr(pers_id, addr)
  select id, 'Str. Cosminilor, nr. 5' from pers p 
  where p.name = 'Eugen Cosmin'
  and rownum = 1;


insert into addr(pers_id, addr)
  select id, 'Str. Seller, nr. 6' from pers p 
  where p.name = 'Seller Adelin'
  and rownum = 1;


insert into addr(pers_id, addr)
  select id, 'Str. Camelinelor, nr. 5' from pers p 
  where p.name = 'Camelina German'
  and rownum = 1;


insert into addr(pers_id, addr)
  select id, 'Str. Radu Vodă, nr. 10' from pers p 
  where p.name = 'Radu Voicu'
  and rownum = 1;

end;
