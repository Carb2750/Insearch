const express = require("express");
const router = express.Router();

const securityRoutes = require('./api/security');
const WorksRoutes = require("./api/works");

router.use('/security', securityRoutes);
router.use("/works", WorksRoutes);

module.exports = router;
