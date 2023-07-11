const router = require("express").Router();
const DangNhapController = require("../controllers/DangNhapController");
router.post("/", DangNhapController.dangNhap);
module.exports = router;
