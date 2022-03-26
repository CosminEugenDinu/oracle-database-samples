create table addr(
	id number(10) constraint addr_pk primary key,
	pers_id number(10),
	addr varchar2(1000)
);