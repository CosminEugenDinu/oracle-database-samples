
begin

insert into email(pers_id, email)
  select id, 'dinca@email.ro' from pers p
  where p.name = 'Fratelo Dinca'
  and rownum = 1;


insert into email(pers_id, email)
  select id, 'eugen@email.ro' from pers p
  where p.name = 'Eugen Cosmin'
  and rownum = 1;


insert into email(pers_id, email)
  select id, 'seller@email.ro' from pers p
  where p.name = 'Seller Adelin'
  and rownum = 1;


insert into email(pers_id, email)
  select id, 'camelina@email.ro' from pers p
  where p.name = 'Camelina German'
  and rownum = 1;


insert into email(pers_id, email)
  select id, 'radu@email.ro' from pers p
  where p.name = 'Radu Voicu'
  and rownum = 1;

end;
