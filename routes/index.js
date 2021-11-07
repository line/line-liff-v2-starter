var router = require("express").Router();
const db = require('../db/db');


router.get("/", function (req, res) {
    db.pool.connect((err, client) => {
        if (err) {
            res.send(err)
        } else {
            client.query('select * from call_orders, users;', (err, result) => {
                let num = result.rows;
                let data = {
                    items: num
                };
                // レンダリングを行う
                res.render("./index.ejs", data);
            });
        }
    });
});


router.get("/lineout-screen", function (req, res) {
    db.pool.connect((err, client) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            client.query(`select * from call_orders, users where call_id = ${req.query.call_id};`, (err, result) => {
                let num = result.rows;
                console.log(num);
                let data = {
                    items: num
                };
                // レンダリングを行う
                res.render("./lineout-screen.ejs", data);
            });
        }
    });
});

module.exports = router;