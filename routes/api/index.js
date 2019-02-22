const router = require("express").Router();
const todoRoutes = require("./api");
const htmlRouts = require("./html");

// set up routes and prefix them
router.use("/", htmlRoutes);
router.use("api", apiRoutes);


module.exports = router;