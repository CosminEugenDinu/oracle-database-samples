alter table addr 
	add constraint addr2pers_id_fk
		foreign key (pers_id)
		references pers(id)