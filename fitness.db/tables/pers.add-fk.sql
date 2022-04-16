
alter table pers
  add constraint pers2user_id
    foreign key (appuser_id)
    references appuser(id)
