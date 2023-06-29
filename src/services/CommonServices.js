const db = require("../models");
class CommonServices {
  async createBacSis(id, ten) {
    await db.BacSi.create({
      id_bac_si: id,
      ten_bac_si: ten,
    });
  }
}

module.exports = new CommonServices();
