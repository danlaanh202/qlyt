const router = require("express").Router();

const ThongTinChungController = require("../controllers/ThongTinChungController");

router.get("/filter", ThongTinChungController.locBenhNhan);
router.get("/find_by_id", ThongTinChungController.findById);

module.exports = router;
