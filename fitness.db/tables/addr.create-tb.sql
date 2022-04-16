
create table addr(
  id number generated always as identity constraint addr_pk primary key,
  pers_id number,
  addr varchar2(1000)
)
