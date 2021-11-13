var express = require('express');
var router = express.Router();
var loki = require('lokijs');

var db = new loki('data.json', {
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    var bookings = db.getCollection("bookings");
    if (bookings === null) {
        bookings = db.addCollection("bookings");
    }
}
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Handle the Form */
router.post('/bookings', function(req, res) {

    var response = {
        header: req.headers,
        body: req.body
    };
    //req.body.numTickets = parseInt(req.body.numTickets);
    db.getCollection("bookings").insert(req.body);
    res.json(response);
});
//calculation
router.post('/calculation', function(req, res, next) {

    // first job: akharin nafar ro add konim be json
    console.log(req.body);
    db.getCollection("bookings").insert(req.body);

    // seocnd job: calculation chart ro anjam bedim
    var result = db.getCollection("index").find();
    var gender = {
        Male: 0,
        Female: 0,
    }
    var age = {
        Aged1: 0,
        Aged2: 0,
        Aged3: 0,
        Aged4: 0,
        Aged5: 0,
        Aged6: 0,
        Aged7: 0,
        Aged8: 0
    }
    var type = {
        sinovac: 0,
        biontech: 0,
        others: 0,
    }
    var venue = {
        CVC: 0,
        GOPC: 0,
        GP: 0,
        Others: 0,
    }
    result.forEech(function(item) {
        if (item.gender == "Male") {
            gender.Male++;
        } else if (item.grade == "Female") {
            gender.Female++;
        }

        if (item.age == "Aged1") {
            age.Aged1++
        } else if (item.age == "Aged2") {
            age.Aged2++
        } else if (item.age == "Aged3") {
            age.Aged3++
        } else if (item.age == "Aged4") {
            age.Aged4++
        } else if (item.age == "Aged5") {
            age.Aged5++
        } else if (item.age == "Aged6") {
            age.Aged6++
        } else if (item.age == "Aged7") {
            age.Aged7++
        } else if (item.age == "Aged8") {
            age.Aged8++
        }

        if (item.type == "sinovac") {
            type.sinovac++
        } else if (item.type == "biontech") {
            type.biontech++
        } else if (item.type == "others") {
            type.others++
        }

        if (item.venue == "CVC") {
            venue.CVC++
        } else if (item.venue == "GOPC") {
            venue.GOPC++
        } else if (item.venue == "GP") {
            venue.GP++
        } else if (item.venue == "Others") {
            venue.Others++
        }
    });
    var variables = {
        gender: gender,
        type: type,
        venue: venue,
    }
    res.status(201).json(variables);

});
// router.post('/submitSurveyData', function(req, res) {
// 1. data ke user toye survey fill karde begiri, calculation anjam bedi
// 2. res = data ke on chart niaz daran neshon bedan.
// toye body request bayad ye json bashe ke data ke user e fill karde ro shamel beshe
// inja on data ro migiri, calculation ro anjam midi
/*
res = { 
    chart1: { 
        data: [1,2,3,4]
    },
    chart2: { 
        data: [1,2,3,4]
    },
    chart3: { 
        data: [1,2,3,4]
    }
}
return res;
 */


//soltuion 2
// file json.data ro bekhoni
// akharin nafar ro info dar biari
// calcation anjam beshe
// res -> json ke dataye on chart ha ro dare
//});
module.exports = router;