const router = require("express").Router();
const burgersController = require("../../controllers/burgersController");

// define API routes

// when user hits /api/burgers
router
  .route("/")
  .get(burgersController.findAll)
  .post(burgersController.createburger);


// when user hits /api/todos/:id
router
  .route("/:id")
  .get(burgersController.findById)
  .put(burgersController.updateburger)
  .delete(burgersController.deleteburger);

module.exports = router;
