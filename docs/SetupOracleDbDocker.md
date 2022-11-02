```bash
# start docker service
sudo /etc/init.d/docker start
```

```bash
# import variables
. .env
```

```bash
# create docker volume for oracle database data files
docker volume create $DOCKER_ORADATA_VOLUME_NAME
```

```bash
# requirement is that oracle image is already built
# https://github.com/oracle/docker-images/tree/main/OracleDatabase/SingleInstance
docker run -d \
--name $DOCKER_ORADB_CONTAINER_NAME \
-p $ORADB_PORT:1521 \
-p $ORADB_PORT_OEMEXPRESS:5500 \
-e ORACLE_PWD="${ORADB_ADMIN_PASSWORD}" \
-e ENABLE_ARCHIVELOG=true \
-v $DOCKER_ORADATA_VOLUME_NAME:/opt/oracle/oradata $DOCKER_ORADB_IMAGE_NAME
```

```bash
# view container creation logs
docker logs -f $DOCKER_ORADB_CONTAINER_NAME
```

```bash
# optionally change admin accounts password
docker exec $DOCKER_ORADB_CONTAINER_NAME /opt/oracle/setPassword.sh "${ORADB_ADMIN_PASSWORD}"
```

---

### 1 Command line database setup

```bash
# command line setup database, user, password
docker exec -it $DOCKER_ORADB_CONTAINER_NAME /bin/bash -c "sqlplus -s / as sysdba \
<<< \
\"
select 'Creating user' as STATUS from dual;
-- connect to that plugable database:
connect sys/${ORADB_ADMIN_PASSWORD}@localhost:1521/xepdb1 as sysdba;

create user ${ORADB_USER_NAME} identified by ${ORADB_USER_PASSWORD};
-- drop user ${ORADB_USER_NAME};
grant resource, connect, create table to ${ORADB_USER_NAME};
alter user ${ORADB_USER_NAME} quota unlimited on users;

select 'Procedures completed' as STATUS from dual;
\""
```

### Or

### 2 Manual database setup

```bash
# manual setup database, user, password in container shell
docker exec -it $DOCKER_ORADB_CONTAINER_NAME /bin/bash
```

```bash
# in container shell
sqlplus
```

```
-- in sqlplus interactive shell
-- at field `Enter user-name: type `/ as sysdba`

-- inspect plugable database (will show ~ xepdb1):
select name from v$pdbs;

-- connect to that plugable database:
connect sys/<db_admin_password>@localhost:1521/xepdb1 as sysdba;

-- create new user:
create user <db_user_name> identified by <db_user_password>;

-- grant permissions;
grant
resource, connect, create table,
quota unlimited on users
to <db_user_name>;

-- test connect:
connect <db_user_name>/<db_user_password>@localhost:1521/xepdb1;

-- test create table:
create table testtable(testcol number);

-- test insert query:
insert into testtable values(111);

-- test select query:
select * from testtable;

-- delete demo table:
drop table testtable;

-- exit sqlplus shell
exit
```

---
