const Univ = require("../models/univeristy.model");
const data = Univer.find();
console.log(data);

const universityRoute = {
  method: "GET",
  path: "/Universities",
  handler: (request, h) => {
    try {
      console.log(request.payload);
      var info = Univ.find();
      return info;
    } catch (error) {
      return h.response(error).code(500);
    }
  },
};

module.exports = universityRoute;
