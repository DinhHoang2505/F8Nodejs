class NewsController {
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('Details!!!');
  }

  education(req, res) {
    res.send('<h1>EDUCATION</h1>');
  }
}

module.exports = new NewsController();
