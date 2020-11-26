const express = require("express");
const router = express.Router();

const securityRoutes = require('./api/security');
const WorksRoutes = require("./api/works");
const UsersRoutes = require("./api/users")

router.use('/security', securityRoutes);
router.use("/works", WorksRoutes);
router.use("/users", UsersRoutes);


module.exports = router;
