const db = require("../models");
const CommonServices = require("../services/CommonServices");
const Op = db.Sequelize.Op;
class ThongTinChungController {
  async findById(req, res) {
    try {
      const savedDoc = await db.KhamXetNghiem.findAll({
        include: [
          {
            model: db.ThongTinChung,
            where: {
              id_benh_nhan: req.query.id,
            },
          },
        ],
      });
      const sieuAmDoc = await db.SieuAm.findAll({
        include: [
          {
            model: db.ThongTinChung,
            where: {
              id_benh_nhan: req.query.id,
            },
          },
        ],
      });
      return res.status(200).json([savedDoc, sieuAmDoc]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async locBenhNhan(req, res) {
    try {
      const savedDoc = await db.KhamXetNghiem.findAll({
        where: {
          ket_qua: {
            [Op.like]: `%${req.query.ten_benh || ""}`,
          },
        },
        include: [
          {
            model: db.ThongTinChung,
            where: {
              tuoi: {
                [Op.between]: [
                  req.query.min_age || 1,
                  req.query.max_age || 100,
                ],
              },
              ten_bn: {
                [Op.like]: `%${req.query.ten_benh_nhan || ""}`,
              },
            },
            include: [
              {
                model: db.BacSi,
                where: {
                  ten_bac_si: {
                    [Op.like]: `%${req.query.ten_bac_si || ""}`,
                  },
                },
              },
            ],
          },
        ],
      });
      return res.status(200).json(savedDoc);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = new ThongTinChungController();
