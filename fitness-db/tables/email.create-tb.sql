create table email(
	id number(10) constraint email_pk primary key,
	pers_id number(10),
	email varchar2(100) unique
);