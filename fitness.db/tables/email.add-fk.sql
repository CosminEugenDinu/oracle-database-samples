
alter table email
  add constraint email2pers_id_fk
    foreign key (pers_id)
    references pers(id)
