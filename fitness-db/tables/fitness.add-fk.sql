alter table fitness
	add constraint fitness2pers_id_fk
		foreign key (pers_id)
		references pers(id)
	add constraint fitness2sport_id_fk
		foreign key (sport_id)
		references sport(id)