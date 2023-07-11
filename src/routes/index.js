const thongTinChungRouter = require("./thongTinChung.route");
const dangNhapRouter = require("./dangNhap.route");
function route(app) {
  app.use("/thong_tin_chung", thongTinChungRouter);
  app.use("/dang_nhap", dangNhapRouter);
}

module.exports = route;
