create table appuser(
--	id number(10) GENERATED BY DEFAULT ON NULL AS IDENTITY constraint appuser_pk primary key ,
	id number(10) generated by default on null as identity constraint appuser_pk primary key ,
	username varchar2(100) unique, 
	pass varchar2(100)
);