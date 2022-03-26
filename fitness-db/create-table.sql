create table todoitem (
  id number generated always as identity,
  description varchar2(4000),
  creation_ts timestamp with time zone default current_timestamp,
  done number(1, 0),
  primary key (id)
)