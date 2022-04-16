
create table email(
  id number generated always as identity constraint email_pk primary key,
  pers_id number,
  email varchar2(100) unique
)
