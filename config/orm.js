const db = require("./connection");

module.exports = {
  // find all burgers in the database
  selectAll: function (req, res) {
    
     db.query("SELECT * FROM burgers", function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json(err);
        }
        console.log("this is dbData: ",dataBurger)

        res.json(dbBurgers);
      });
  },
  // find burger by id (this will come in req.params.id)
  // findById: function (req, res) {
  //   db
  //     .query("SELECT * FROM burgers WHERE id = ?", [req.params.id], function (err, dbBurgers) {
  //       if (err) {
  //         console.log(err);
  //         return res
  //           .status(400)
  //           .json(err);
  //       }
  //       res.json(dbburgers[0]);
  //     });
  // },
  // insert / create new burger item (takes in req.body via POST)
  insertOne: function (req, res) {
    // req.body => {burger: "Make a burger"}
    
      db.query("INSERT INTO burgers SET ?", req.body, function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }

        let burger = req.body.dbBurgers
        console.log("This is the burger name going into the db" + burger);
        res.json(dbBurgers);
      });
  },
  // UPDATE/PUT a burger to mark it from uneaten to devoured (false => true),
  // this will use req.params.id to know where they're updating
  updateOne: function (req, res) {
    // req.params => {id : 1} req.params.id => 1
    let queryString = "UPDATE burgers SET devoured = true WHERE id =?"; 
    
    db.query(queryString, [req.params.id], function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbBurgers);
      })
  },
  // delete a burger based on its id (req.params.id)
  deleteBurger: function (req, res) {
  let queryString = "DELETE FROM burgers WHERE id = ?";
    db
    .query(queryString, [req.params.id], function (err, result) {

        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        console.log("Deleting a burger from db at" + req.params.id)
        res.json(result);
      });

  }
};