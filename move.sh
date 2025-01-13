#!/bin/bash

export SERVERUSER=kib
echo Перемещаем данные на сервер odc-doc-server в папку /home/$SERVERUSER/odc-doc

scp -r diagrams odc-doc-server:/home/$SERVERUSER/odc-doc
scp -r docs odc-doc-server:/home/$SERVERUSER/odc-doc
scp -r src odc-doc-server:/home/$SERVERUSER/odc-doc
scp -r static odc-doc-server:/home/$SERVERUSER/odc-doc

scp docusaurus.config.ts odc-doc-server:/home/$SERVERUSER/odc-doc
scp package.json odc-doc-server:/home/$SERVERUSER/odc-doc
scp package-lock.json odc-doc-server:/home/$SERVERUSER/odc-doc
scp sidebars.ts odc-doc-server:/home/$SERVERUSER/odc-doc
scp tsconfig.json odc-doc-server:/home/$SERVERUSER/odc-doc

echo "Все данные перемещены"
