alter table appuser
	add constraint appuser2email_id
		foreign key (email_id)
		references email(id) 