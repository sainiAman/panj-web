


let testController = function () {};

testController.prototype.testData = (req, res) => {

  res
    .status(200)
    .json({
      message: "This is test data"
    })
};


module.exports = new testController();
