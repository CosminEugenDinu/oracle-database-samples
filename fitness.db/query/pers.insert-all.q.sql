
begin

insert into pers(name, appuser_id, chromozome)
  select 'Fratelo Dinca', id, 'y' from appuser au
  where au.username = 'Dinca';


insert into pers(name, appuser_id, chromozome)
  select 'Eugen Cosmin', id, 'y' from appuser au
  where au.username = 'Eugen';


insert into pers(name, appuser_id, chromozome)
  select 'Seller Adelin', id, 'y' from appuser au
  where au.username = 'Seller';


insert into pers(name, appuser_id, chromozome)
  select 'Camelina German', id, 'x' from appuser au
  where au.username = 'Camelina';


insert into pers(name, appuser_id, chromozome)
  select 'Radu Voicu', id, 'y' from appuser au
  where au.username = 'Radu';

end;
