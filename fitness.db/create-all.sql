begin
execute immediate 'drop table appuser cascade constraints';
execute immediate 'drop table sport cascade constraints';
execute immediate 'drop table pers cascade constraints';
execute immediate 'drop table email cascade constraints';
execute immediate 'drop table addr cascade constraints';
execute immediate 'drop table fitness cascade constraints';
exception when others then null;
end;

create table appuser(
  id number generated always as identity constraint appuser_pk primary key,
  username varchar2(100) unique,
  pass varchar2(100)
)

create table pers(
  id number generated always as identity constraint pers_pk primary key,
  appuser_id number,
  name varchar(100),
  birth date default('01-JAN-1992'),
  chromozome char(1)
)

create table sport(
  id number generated always as identity constraint sport_pk primary key,
  name varchar2(100)
  )

create table email(
  id number generated always as identity constraint email_pk primary key,
  pers_id number,
  email varchar2(100) unique
)

create table addr(
  id number generated always as identity constraint addr_pk primary key,
  pers_id number,
  addr varchar2(1000)
)

create table fitness(
  id number generated always as identity constraint fitness_pk primary key,
  day date,
  duration number(5),
  pers_id number,
  sport_id number
)

create table cities(
  city_id varchar(36) constraint city_id_pk primary key,
  name varchar(100),
  lat decimal(10,8),
  lng decimal(10,8)
)

create table fitness_gyms(
  gym_id number(10) 
  generated always as identity(start with 1 increment by 1)
  constraint gym_id_pk primary key,
  city_id varchar(36),
  gym_capacity number(10) default 0 not null,
  rating decimal(3,2) default 0.0 not null,
  gym_name varchar(100),
  gym_address varchar(1000),
  founded_date date,
  constraint fitness_gyms_city_id_fk
  foreign key(city_id) references cities(city_id)
)


// Add foreign keys

alter table pers
  add constraint pers2user_id
    foreign key (appuser_id)
    references appuser(id)


alter table email
  add constraint email2pers_id_fk
    foreign key (pers_id)
    references pers(id)

alter table addr 
  add constraint addr2pers_id_fk
    foreign key (pers_id)
    references pers(id)

alter table fitness
  add constraint fitness2pers_id_fk
    foreign key (pers_id)
    references pers(id)
  add constraint fitness2sport_id_fk
    foreign key (sport_id)
    references sport(id)