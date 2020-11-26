const express = require("express");
const router = express.Router();

const securityRoutes = require('./api/security');
const WorksRoutes = require("./api/works");
const FavoritesRoutes = require("./api/favorites")

router.use('/security', securityRoutes);
router.use("/works", WorksRoutes);
router.use("/favorites", FavoritesRoutes);


module.exports = router;
