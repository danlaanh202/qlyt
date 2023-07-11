const db = require("../models");

class DangNhapController {
  async dangNhap(req, res) {
    try {
      const thisAccount = await db.BacSi.findAll({
        where: {
          ten_dang_nhap: req.body.ten_dang_nhap,
          mat_khau: req.body.mat_khau,
        },
      });
      if (thisAccount.length === 0) {
        return res.status(200).json("failed");
      }
      return res.status(200).json("ok");
    } catch (error) {
      return res.status(200).json("failed");
    }
  }
}

module.exports = new DangNhapController();
