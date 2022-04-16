
begin

insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 40 from pers p, sport s
    where p.name = 'Fratelo Dinca'
    and s.name = 'Sărit coarda'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 20 from pers p, sport s
    where p.name = 'Fratelo Dinca'
    and s.name = 'Flotări'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '2-APR-2022', p.id pers_id, s.id sport_id, 10 from pers p, sport s
    where p.name = 'Fratelo Dinca'
    and s.name = 'Genoflexiuni'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '2-APR-2022', p.id pers_id, s.id sport_id, 10 from pers p, sport s
    where p.name = 'Fratelo Dinca'
    and s.name = 'Mersul piticului'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 60 from pers p, sport s
    where p.name = 'Eugen Cosmin'
    and s.name = 'Genoflexiuni'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 30 from pers p, sport s
    where p.name = 'Eugen Cosmin'
    and s.name = 'Flotări'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '3-APR-2022', p.id pers_id, s.id sport_id, 20 from pers p, sport s
    where p.name = 'Eugen Cosmin'
    and s.name = 'Mersul piticului'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '3-APR-2022', p.id pers_id, s.id sport_id, 20 from pers p, sport s
    where p.name = 'Eugen Cosmin'
    and s.name = 'Mersul piticului'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 60 from pers p, sport s
    where p.name = 'Seller Adelin'
    and s.name = 'Sărit coarda'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 30 from pers p, sport s
    where p.name = 'Seller Adelin'
    and s.name = 'Flotări'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '4-APR-2022', p.id pers_id, s.id sport_id, 40 from pers p, sport s
    where p.name = 'Seller Adelin'
    and s.name = 'Mersul piticului'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '4-APR-2022', p.id pers_id, s.id sport_id, 20 from pers p, sport s
    where p.name = 'Seller Adelin'
    and s.name = 'Mersul piticului'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 60 from pers p, sport s
    where p.name = 'Camelina German'
    and s.name = 'Sărit coarda'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 50 from pers p, sport s
    where p.name = 'Camelina German'
    and s.name = 'Flotări'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '5-APR-2022', p.id pers_id, s.id sport_id, 20 from pers p, sport s
    where p.name = 'Camelina German'
    and s.name = 'Mersul piticului'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '5-APR-2022', p.id pers_id, s.id sport_id, 20 from pers p, sport s
    where p.name = 'Camelina German'
    and s.name = 'Mersul piticului'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 30 from pers p, sport s
    where p.name = 'Radu Voicu'
    and s.name = 'Genoflexiuni'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '1-APR-2022', p.id pers_id, s.id sport_id, 30 from pers p, sport s
    where p.name = 'Radu Voicu'
    and s.name = 'Flotări'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '6-APR-2022', p.id pers_id, s.id sport_id, 10 from pers p, sport s
    where p.name = 'Radu Voicu'
    and s.name = 'Genoflexiuni'
    and rownum = 1;


insert into fitness(day, pers_id, sport_id, duration)
  select '6-APR-2022', p.id pers_id, s.id sport_id, 20 from pers p, sport s
    where p.name = 'Radu Voicu'
    and s.name = 'Mersul piticului'
    and rownum = 1;

end;
