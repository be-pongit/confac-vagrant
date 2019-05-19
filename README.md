confac-vagrant
==============

Make sure the credentials match `confac-back\src\config.json`


Vagrant box for development.

```
# Start Mongo
vagrant up

# Run Mongo Migrations
# (they will insert some clients into the db)
npm install
npm run mm
```

Docker
------

Or use Docker instead of Vagrant.

```
docker run -id -p 27010:27017 --name confac-mongo mongo
```


Migrations
----------
https://github.com/afloyd/mongo-migrate

Migrate to specific:

```
npm run mm down 5
npm run mm up 15
```
