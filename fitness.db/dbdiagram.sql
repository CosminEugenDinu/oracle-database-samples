Table appuser {
  id number(10) [pk]
  username varchar2(100) [unique]
  pass varchar2(100)
}

Table pers {
  id number(10) [pk]
  appuser_id number(10) [ref: > appuser.id]
  name varchar2(100)
  birth date
  sex char(1)
}

Table email {
  id number(10) [pk]
  pers_id number(10) [ref: > pers.id]
  email varchar2(100) [unique]
}

Table addr {
  id number(10) [pk]
  pers_id number(10) [ref: > pers.id]
  addr varchar2(1000)
}

Table sport {
  id number(10) [pk]
  name varchar2(100)
}

Table fitness {
  id number(10) [pk]
  day date
  pers_id number(10) [ref: > pers.id]
  sport_id number(10) [ref: > sport.id]
  duration number(10)
}