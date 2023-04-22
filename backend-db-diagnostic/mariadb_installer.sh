#!/bin/bash

sudo apt-get install docker

username = $USER
sudo usermod -aG docker $username
sudo apt-get install docker-compose

docker --version

echo "#!/bin/bash

echo 'version: \"'3.9'\"

services:
  db:
    image: mariadb:latest
    container_name: mariadb_isft
    environment:
      MYSQL_ROOT_PASSWORD: isft
    volumes:
      - ./data:/var/lib/mysql
    ports:
      - \"3306:3306\"' > docker-compose.yml

echo "yml file created to setup mariadb in docker"

sudo docker-compose up -d "" > docker_mariadb_installer.sh 

sudo chmod +x ./docker_mariadb_installer.sh 

./docker_mariadb_installer.sh

rm ./docker_mariadb_installer.sh