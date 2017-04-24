confac-vagrant
==============

Vagrant box for development.

```
# Start Mongo
vagrant up

# Run Mongo Migrations
# (they will insert some clients into the db)
npm install
npm run mm
```

Migrations
----------
https://github.com/afloyd/mongo-migrate

Migrate to specific:

```
npm run mm down 5
npm run mm up 15
```
