# MongoDB CLI Notes

__Built-in Commands__

```bash
help
show dbs
use mydb
show collections
show users
show roles
show profile
show logs
cls
```

__Create Records__

```bash
# If you try to 'use' a db that doesn't exist, it will create it
use mycustomdatabase
# DON'T use .insert(), it's deprecated. Instead,
# use .insertOne(), .insertMany(), .bulkWrite()
# If the 'games' collection doesnt exist, it will be created.
db.games.insertOne({ "title": "Crash Bandicoot" })
db.games.insertMany([{ title: "Pokemon: Blue", price: 39.99 }, { title: "Pokemon: Gold", price: 29.99 }])
```

__Find Records__

```bash
# List the records in the games collection
db.games.find()
# Exact match of the title
db.games.find({ title: "Zelda: The WindWaker" })
# Where price is less than 39.99
db.games.find({ price: { $lt: 39.99 } })
# Where price is less than OR EQUAL TO 39.99
db.games.find({ price: { $lte: 39.99 } })
# Use two filters (AND) (both must be true)
db.games.find({ price: { $lte: 39.99 }, year_released: { $gt: 2015 } })
# Use two filters (OR) (only one must be true)
# Note that it doesn't matter if year_released is even present,
# as long as the price matches.
# Note that you can spawn multiple lines on the terminal. Every time
# you press enter, it checks if your braces are closed.
db.games.find({
  $or: [
    { price: { $lte: 39.99 } },
    { year_released: { $gt: 2015 } }
  ]
})
# Projection: Select which fields you are interested in
#   by passing in a second object. Note that you'll still
#   see the "_id": ObjectId("abc123") for each one.
db.games.find({ price: { $lte: 59.99 } }, { title: 1 })
```

__Update Records__

```bash
# Only updates the first match, even if it matches multiple.
# Doesn't matter if year_released already exists. It will afterward.
db.games.updateOne(
  { title: "Pokemon: Blue" },
  { $set: { "year_released": 1996 } }
)
# Update many records that match.
db.games.updateMany( { price: { $gte: 60 } }, { $set: { "expensive": true } } )
# Update all records, will match all of them.
db.games.updateMany({}, { $set: { "expensive": true } })
# Rather than update a portion, replace the record with the obj
db.games.replaceOne()
db.games.replaceMany()
```

__Delete Records__

```bash
# Works the same as findOne() and findMany()
db.games.deleteOne({ price: { $gte: 60 } })
db.games.deleteMany({ price: { $gte: 60 } })
# Delete all the records of a collection
# db.games.deleteMany({})
```