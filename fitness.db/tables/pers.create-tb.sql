
create table pers(
  id number generated always as identity constraint pers_pk primary key,
  appuser_id number,
  name varchar(100),
  birth date default('01-JAN-1992'),
  chromozome char(1)
  )
