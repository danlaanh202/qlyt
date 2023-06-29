module.exports = (sequelize, DataTypes) => {
  const BacSi = sequelize.define("BacSi", {
    id_bac_si: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
    },
    ten_bac_si: {
      type: DataTypes.STRING(45),
    },
  });
  return BacSi;
};
