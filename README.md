# Prerequisites:
Windows, WSL, ... 

# Install Database Oracle Express (Docker)

https://github.com/oracle/docker-images/tree/main/OracleDatabase/SingleInstance

```bash
mkdir -p ~/oracle
cd ~/oracle
git clone https://github.com/oracle/docker-images.git
```

```bash
mkdir -p ~/oracle/data
chmod a+wrx -R ~/oracle/data
```
```bash
cd ~/oracle/docker-images/OracleDatabase/SingleInstance/dockerfiles
# build Oracle Database Express (-x) Docker Container
./buildContainerImage.sh -x -v 21.3.0 -o '--build-args SLIMMING=false'
```
# run Oracle Database Container
```bash
docker run -d --name oracledb -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=dbdemopass -v ~/oracle/data:/opt/oracle/oradata oracle/database:21.3.0-xe
```
```bash
docker run -d --name oracledb -p 1521:1521 -p 5500:5500 -v ~/oracle/data:/opt/oracle/oradata oracle/database:21.3.0-xe
```
If you encounter an error like: `docker: Error response from daemon: Conflict. The container name "/oracledb" is already in use by container "4545abd...". You have to remove (or rename) that container to be able to reuse that name.`
Then run:
```bash
docker rm 4545abd
```

# view Image logs
```bash
docker logs -f oracledb
```

# set database admin password
```bash
docker exec oracledb ./setPassword.sh dbdemopass
```

# run Container shell:
```bash
docker exec -it oracledb /bin/bash
```
# connect to db in container shell
```bash
sqlplus
```
```sqlplus
-- at field `Enter user-name: type `/ as sysdba`;

-- inspect plugable database (will show ~ xepdb1):
select name from v$pdbs;

-- connect to that plugable database:
connect sys/dbdemopass@localhost:1521/xepdb1 as sysdba; 

-- create new user:
create user demouser identified by demopass;

-- grant permissions;
grant dba, resource, connect, create table to demouser;

-- test connect:
connect demouser/demopass@localhost:1521/XEPDB1;

-- test create table:
create table testtable(testcol number);

-- test insert query:
insert into testtable values (111);

-- test select query:
select * from testtable;

-- exit sqlplus shell
exit
```
```bash
# exit container shell
exit
```
# Configure db credentials:
```bash
# edit .env
mv env.example .env
```

# Install app:
```bash
cd fitness-nodejs.app
npm install
```
# Build app:
```bash
npm run build
```
# Start app:
```bash
npm run start
```
# Start app in dev mode (watch):
```bash
npm run start:dev
```

# stop running db image:
```bash
docker stop oracledb
```