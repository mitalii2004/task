const Model = require("../models/index");

module.exports = {
  insert: async (req, res) => {
    try {
      let objToSave = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      };
      let response = await Model.userModel.create(objToSave);
      return res.status(201).send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getRecord: async (req, res) => {
    try {
      let response = await Model.userModel.findAll();
      return res.send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateSomeRecord: async () => {
    try {
      //   await Model.userModel.update(
      //     { name: req.body.name },
      //     { where: { id: req.body.id } }
      //   );
      let response = await Model.userModel.findOne({
        where: { id: req.body.id },
        raw: true,
      });
      return res.send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
