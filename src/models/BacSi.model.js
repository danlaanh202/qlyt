module.exports = (sequelize, DataTypes) => {
  const BacSi = sequelize.define("BacSi", {
    id_bac_si: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
    },
    ten_bac_si: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    ten_dang_nhap: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    mat_khau: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
  return BacSi;
};
