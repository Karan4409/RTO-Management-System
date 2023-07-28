const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/auth", function (req, res) {
    res.redirect("/front/login/login.html");
});

router.get("/loggedin", function (req, res) {
    res.render(
        path.resolve("E:/Coding/DBMS/home v2/front/login/after-login.html")
    );
});

router.get("/dl", function (req, res) {
    res.sendFile(
        path.resolve("E:/Coding/DBMS/home v2/front/forms/driving_license.html")
    );
});

router.get("/insurance", function (req, res) {
    res.sendFile(path.resolve("/front/forms/insurance.html"));
});

router.get("/violation", function (req, res) {
    res.sendFile(path.resolve("/front/forms/violations.html"));
});

router.get("/vehicle", function (req, res) {
    res.sendFile(path.resolve("/front/forms/vehicle.html"));
});

// router.get("/apchange_form", function(req, res) {
//     res.sendFile(path.resolve('webpage/snippets/change_details.html'));
// });
module.exports = router;
