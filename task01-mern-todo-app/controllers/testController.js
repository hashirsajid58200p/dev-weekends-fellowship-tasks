const testingController = (req, res) => {
  res.status(200).send("<h1>response from MVC pattern</h1>");
};

module.exports = { testingController };
