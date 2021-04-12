const Hamburger = require("../model/Hamburger");

class HamburgerController {
  // insere no banco
  async store(req, res) {
    const data = await Hamburger.create(req.body);

    return res.json(data);
  }

  // busca do banco
  async index(req, res) {
    const data = await Hamburger.find({});

    return res.json(data);
  }
}

module.exports = new HamburgerController();
