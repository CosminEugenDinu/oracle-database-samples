
create table fitness(
  id number generated always as identity constraint fitness_pk primary key,
  day date,
  duration number(5),
  pers_id number,
  sport_id number
)
