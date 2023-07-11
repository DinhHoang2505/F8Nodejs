class NewsController {
  index(req, res) {
    res.render('home');
  }

  contact(req, res) {
    res.send('<h1>Contact</h1>');
  }
}

module.exports = new NewsController();
