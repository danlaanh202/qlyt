module.exports = (sequelize, DataTypes) => {
  const KhamXetNghiem = sequelize.define("KhamXetNghiem", {
    chan_doan: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_benh_nhan: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: "ThongTinChungs",
        key: "id_benh_nhan",
      },
    },
    id_phieu_kham: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    ca125: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    he4: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    afp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ket_qua: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    dau_ha_vi: {
      type: DataTypes.BOOLEAN,
    },
    bung_to: {
      type: DataTypes.BOOLEAN,
    },
    tieu_tien_nhieu_lan: {
      type: DataTypes.BOOLEAN,
    },
    roi_loan_kn: {
      type: DataTypes.BOOLEAN,
    },
    so_thay_khoi: {
      type: DataTypes.BOOLEAN,
    },
  });
  return KhamXetNghiem;
};
