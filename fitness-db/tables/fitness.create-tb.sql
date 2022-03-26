create table fitness(
	id number(10) constraint fitness_pk primary key,
	day date,
	duration number(5),
	pers_id number(10),
	sport_id number(10)
);