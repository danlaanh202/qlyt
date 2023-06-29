const thongTinChungRouter = require("./thongTinChung.route");
function route(app) {
  app.use("/thong_tin_chung", thongTinChungRouter);
}

module.exports = route;
