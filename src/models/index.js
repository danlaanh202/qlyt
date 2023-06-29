const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");
const ThongTinChung = require("./ThongTinChung.model");
const SieuAm = require("./SieuAm.model");
const BacSi = require("./BacSi.model");
const KhamXetNghiem = require("./KhamXetNghiem.model");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ThongTinChung = ThongTinChung(sequelize, Sequelize.DataTypes);
db.SieuAm = SieuAm(sequelize, Sequelize.DataTypes);
db.BacSi = BacSi(sequelize, Sequelize.DataTypes);
db.KhamXetNghiem = KhamXetNghiem(sequelize, Sequelize.DataTypes);

db.SieuAm.belongsTo(db.ThongTinChung, {
  foreignKey: "id_benh_nhan",
});
db.KhamXetNghiem.belongsTo(db.ThongTinChung, {
  foreignKey: "id_benh_nhan",
});
db.ThongTinChung.belongsTo(db.BacSi, {
  foreignKey: "id_bac_si",
});

module.exports = db;
