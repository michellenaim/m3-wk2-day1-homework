var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/statsdb";

MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    // Create Database
    // if (err) throw err;
    // console.log("Database created!");
    // db.close();

    // Create Collection
    // var dbo = db.db("statsdb");
    // dbo.createCollection("uscensus", function(err, res) {
    //     if (err) throw err;
    //     console.log('Collection created!');
    //     db.close();
    // })

    //Insert many documents
    // var dbo = db.db("statsdb");
    // var stats =[
    //     {
    //         'city': 'San Juan',
    //         'zip': '00926',
    //         'state': 'PR',
    //         'income': '34781',
    //         'age': '44'
    //     },
    //     {
    //         'city': 'Corona',
    //         'zip': '11368',
    //         'state': 'NY',
    //         'income': '50797',
    //         'age': '32'
    //     },
    //     {
    //         'city': 'Chicago',
    //         'zip': '60629',
    //         'state': 'IL',
    //         'income': '42019',
    //         'age': '31'
    //     },
    //     {
    //         'city': 'El Paso',
    //         'zip': '79936',
    //         'state': 'TX',
    //         'income': '54692',
    //         'age': '31'
    //     },
    //     {
    //         'city': 'Los Angeles',
    //         'zip': '90011',
    //         'state': 'CA',
    //         'income': '36954',
    //         'age': '28'
    //     },
    //     {
    //         'city': 'Norwalk',
    //         'zip': '90650',
    //         'state': 'CA',
    //         'income': '66453',
    //         'age': '35'
    //     }
    // ]
    // dbo.collection("uscensus").insertMany(stats, function (err, res) {
    //   if (err) throw err;
    //   console.log("Number of documents inserted: " + res.insertedCount);
    //   db.close();
    // });

    //Insert additional documents
    // var dbo = db.db("statsdb");
    // var stats = [
    //   {
    //     city: "Pacoima",
    //     zip: "91331",
    //     state: "CA",
    //     income: "60360",
    //     age: "33",
    //   },
    //   {
    //     city: "Ketchikan",
    //     zip: "99950",
    //     state: "AK",
    //     income: "00000",
    //     age: "00",
    //   },
    // ];
    // dbo.collection("uscensus").insertMany(stats, function (err, res) {
    //   if (err) throw err;
    //   console.log("Number of documents inserted: " + res.insertedCount);
    //   db.close();
    // });

    //Find Specific Document
    // var dbo = db.db("statsdb");
    // var query = { city: "Corona", state: "NY" };
    // dbo
    //   .collection("uscensus")
    //   .find(query)
    //   .toArray(function (err, res) {
    //     if (err) throw err;
    //     console.log(res[0].zip); // had to key in to [0] because res is an array with one object
    //     db.close();
    //   });

    //Find Specific Document
    // var dbo = db.db("statsdb");
    // var query = { state: "CA" };
    // dbo
    //   .collection("uscensus")
    //   .find(query)
    //   .toArray(function (err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    //   });

    //Update document
    //   var dbo = db.db("statsdb");
    //   var myquery = { state: "AK" };
    //   var newvalues = { $set: {income: "38910", age: "46"}};
    //   dbo.collection("uscensus").updateOne(myquery, newvalues, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    //     db.close();
    //   });

    // Sort documents
    var dbo = db.db("statsdb");
    var mysort = { state: 1 };
    dbo
      .collection("uscensus")
      .find()
      .sort(mysort)
      .toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
      });
  }
);
