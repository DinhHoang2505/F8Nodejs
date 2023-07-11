class SearchController {
  show(req, res) {
    res.render('search');
  }

  success(req, res) {
    res.json(req.body);
  }
}

module.exports = new SearchController();
