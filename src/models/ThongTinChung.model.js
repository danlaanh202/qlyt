module.exports = (sequelize, DataTypes) => {
  const ThongTinChung = sequelize.define("ThongTinChung", {
    ten_bn: {
      type: DataTypes.STRING(45),
    },
    que_quan: {
      type: DataTypes.STRING(45),
    },
    tinh_trang_kn: {
      type: DataTypes.STRING(45),
    },
    tuoi: {
      type: DataTypes.INTEGER,
    },
    id_benh_nhan: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
    },
    id_bac_si: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: "BacSis",
        key: "id_bac_si",
      },
    },
  });
  return ThongTinChung;
};
