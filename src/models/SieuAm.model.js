module.exports = (sequelize, DataTypes) => {
  const SieuAm = sequelize.define("SieuAm", {
    vi_tri: {
      type: DataTypes.STRING(45),
    },
    cau_truc_u: {
      type: DataTypes.STRING(45),
    },
    id_benh_nhan: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: "ThongTinChungs",
        key: "id_benh_nhan",
      },
    },
    id_sieu_am: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    vach_hoan_toan: {
      type: DataTypes.INTEGER,
    },
    so_luong_choi: {
      type: DataTypes.INTEGER,
    },
    dopper: {
      type: DataTypes.INTEGER,
    },
    kich_thuoc: {
      type: DataTypes.STRING(15),
    },
    phan_dac: {
      type: DataTypes.FLOAT,
    },
    do_day: {
      type: DataTypes.FLOAT,
    },
    bong_can: {
      type: DataTypes.BOOLEAN,
    },
    qua_bong_tuyet: {
      type: DataTypes.BOOLEAN,
    },
    dich_o_bung: {
      type: DataTypes.BOOLEAN,
    },
    di_can_phuc_mac: {
      type: DataTypes.BOOLEAN,
    },
    hach_o_bung: {
      type: DataTypes.BOOLEAN,
    },
  });
  return SieuAm;
};
