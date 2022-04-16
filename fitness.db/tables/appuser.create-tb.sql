
create table appuser(
  id number generated always as identity constraint appuser_pk primary key,
  username varchar2(100) unique, 
  pass varchar2(100)
)
