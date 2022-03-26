create table pers(
	id number(10) constraint pers_pk primary key,
	appuser_id number(10),
	name varchar(100),
	birth date,
	sex char(1)
);