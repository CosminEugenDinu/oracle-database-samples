## Prerequisites Database:
-----------------
Windows, WSL, Docker, Oracle Instant Client, Node JS, npm

- [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
- [Install Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
- [Install Oracle InstantClient Basic Package](https://oracle.github.io/node-oracledb/INSTALL.html#instzip)
- [Install Oracle InstantClient SQLplus](https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html)

## Prerequisites Application:
- [Install nvm](https://github.com/nvm-sh/nvm#install--update-script)

## Prerequisites - tools:
- Install `unzip` - zip archive extractor
```bash
sudo apt update
sudo apt install unzip
```
- Install Docker
```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install docker-ce
sudo usermod -aG docker ${USER}
su - ${USER}
sudo usermod -aG docker ${USER}
```

### Install Oracle Instant Client (detailed)
```bash
# install oracle instant-client
# https://oracle.github.io/node-oracledb/INSTALL.html#instzip
sudo mkdir -p /opt/oracle

# Download and extract basic Oracle basic package
```
```bash
wget https://download.oracle.com/otn_software/linux/instantclient/216000/instantclient-basic-linux.x64-21.6.0.0.0dbru.zip
```
```bash
sudo unzip -d /opt/oracle instantclient-basic-linux.x64-21.6.0.0.0dbru.zip
```

```bash
# /opt/oracle
# Check Oracle Instant Client version
ls
# Should print something like
# instantclient_21_6
```
```bash
# add path configuration
# export LD_LIBRARY_PATH variable (in ~./profile)
# change <version> with instantclient version

echo 'export LD_LIBRARY_PATH=/opt/oracle/instantclient_<version>:$LD_LIBRARY_PATH' >> ~/.profile
```
```bash
# make SQL\*Plus available in path
# at at end of .profile
PATH="$LD_LIBRARY_PATH:$PATH"
```
```bash
# Restart shell
. ~/.profile
```

### Install SQL\*Plus utility
SQLplus package must be the same version as Oracle Basic package (e.g. instantclient_21_6)
- [Oracle downloads](https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html)
```bash
wget https://download.oracle.com/otn_software/linux/instantclient/216000/instantclient-sqlplus-linux.x64-21.6.0.0.0dbru.zip
```
```bash
sudo unzip -d /opt/oracle instantclient-sqlplus-linux.x64-21.6.0.0.0dbru.zip
```

### Install Database Oracle Express (Docker)

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
```
```bash
# build Oracle Database Express (-x) Docker Container
./buildContainerImage.sh -x -v 21.3.0 -o '--build-arg SLIMMING=false'
```


------------------
## Run Oracle Database in Docker Container
-------------------
```bash
sudo service docker start
```
```bash
docker run -d --name oracledb -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=dbdemopass -v ~/oracle/data:/opt/oracle/oradata oracle/database:21.3.0-xe
```
If you encounter an error like: `docker: Error response from daemon: Conflict. The container name "/oracledb" is already in use by container "4545abd...". You have to remove (or rename) that container to be able to reuse that name.`
Then run:
```bash
docker ps -a
```

## Start container `oracledb`:
```bash
docker start oracledb
```
Or remove container and run again 
```bash
docker rm <container hash>
```

### View Database Container logs
```bash
docker logs -f oracledb
```
-------------
## Database configurations
-------------
### Set database admin password
```bash
docker exec oracledb ./setPassword.sh dbdemopass
```

### Run Container shell:
```bash
docker exec -it oracledb /bin/bash
```


### Connect to db in container shell
Execute this command in OracleDb Docker container SHELL
```bash
# This is executed in OracleDb Docker container SHELL
sqlplus
```
```sqlplus
-- at field `Enter user-name: type `/ as sysdba`

-- inspect plugable database (will show ~ xepdb1):
select name from v$pdbs;

-- connect to that plugable database:
connect sys/dbdemopass@localhost:1521/xepdb1 as sysdba; 

-- create new user:
create user demouser identified by demopass;

-- grant permissions;
grant dba, resource, connect, create table to demouser;

-- test connect:
connect demouser/demopass@localhost:1521/xepdb1;

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
```bash
# exit container shell
exit
```
## Connect to oracledb from SQLplus (linux)
Logon format: `<username>[/<password>][@<connect_identifier>]`
In this case the ip is from docker network: `ip a` -> `docker0` -> `inet`
```bash
sqlplus demouser/demopass@172.17.0.1:1521/xepdb1
```
```sql
select * from testtable;
```
## Connect to oracledb (WSL Docker) from SQLDeveloper (Windows)
- [Install SQLDeveloper Windows](https://www.oracle.com/tools/downloads/sqldev-downloads-2141.html)
- Connect to Oracle DB (WSL Docker):
  - get ip addr of WSL network: `ip a` -> `eth0` -> `inet`
  - host: `localhost` (docker0 network ip)
  - port: 1521
  - service: `xepdb1`
  - username: `demouser`
  - password: `demopass`
  
## Connect to oracledb (WSL Docker) from DBeaver (Windows)
- [Install DBeaver](https://dbeaver.io/download/)
- Connect to Oracle DB (WSL, Docker):
- Hostname: localhost
- Username: demouser
- Password: demopass
- Port: 1521
- Database Service Name: xepdb1
  
## Install demo schemas
- clone Oracle Official Demo Schemas
```bash
cd ~/Downloads
git clone https://github.com/oracle-samples/db-sample-schemas.git
cd db-sample-schemas
# follow instructions from repo
```
## Some instructions from oracle-samples repo:
```bash
# run this command in db-sample-schemas directory
perl -p -i.bak -e 's#__SUB__CWD__#'$(pwd)'#g' *.sql */*.sql */*.dat
```
```bash
sqlplus system/dbdemopass@172.17.0.1:1521/xepdb1
```
```sqlplus
@mksample dbdemopass dbdemopass hrpw oepw pmpw ixpw shpw bipw users temp /home/cos/Downloads/db-sample-schemas/logs/ 172.17.0.1:1521/xepdb1
```
## Connect to `hr` demo schema from `sqlplus`
```bash
sqlplus hr/hrpw@172.17.0.1:1521/xepdb1
```
```
SQL> select * from jobs;
```

## Install Application prerequisites
 --------------------
### Install nvm -> npm, Node JS
- install nvm: follow [github instructions](https://github.com/nvm-sh/nvm#install--update-script)
```bash
# Install Node JS (Latest Stable Version - LTS) via nvm
# This will automatically install npm
nvm install --lts
```
```bash
# Check node, npm installation

node --version
# Should print something like
# v16.14.2

npm --version
# Should print something like
# 8.6.0
```
----------------------
## Application configurations
----------------------

### Configure db host
```bash
# Look for docker ip address
ip a | grep docker0 | grep inet
```
Edit .env variable `ORA_DB_HOST=<docker0 ip addr>`

### Configure db credentials:
```bash
# edit .env
cp env.example .env
```

## Install app:
```bash
cd fitness-nodejs.app
npm install
```

## Build app:
```bash
npm run build
```

## Start app:
```bash
npm run start
```

## Start app in dev mode (watch):
```bash
npm run start:dev
```


## Stop running db image:
```bash
docker stop oracledb
```
