const Univ = require("../../models/univeristy.model");

const universityRoute = {
  method: "GET",
  path: "/",
  handler: (req, res) => {
    try {
      const data = Univ.find({}, { name: 1, logo: 1, description: 1 }).limit(
        10
      );
      return data;
    } catch (error) {
      return res.response(error).code(500);
    }
  },
  method: "GET",
  path: "/:id",
  handler: (req, res) => {
    try {
      const id = req.params.id;
      const data = Univ.find(
        { _id: id },
        { name: 1, logo: 1, description: 1 }
      ).limit(10);
      return data;
    } catch (error) {
      return res.response(error).code(500);
    }
  },
};

module.exports = universityRoute;
