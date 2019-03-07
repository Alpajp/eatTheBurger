const router = require("express").Router();
const orm = require("../../config/orm");

// define API routes

// when user hits /api/burgers
router
  .route("/")
  .get(orm.selectAll)
  .post(orm.insertOne);


// when user hits /api/todos/:id
router
  .route("/:id")
  //.get(burgersController.findById)
  .put(orm.updateOne)
  .delete(orm.deleteBurger);

module.exports = router;
