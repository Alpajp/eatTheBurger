const router = require("express").Router();
const apiRoutes = require("./burgerRoutes");

// set up routes and prefix them
router.use("/burgers", apiRoutes);


module.exports = router;