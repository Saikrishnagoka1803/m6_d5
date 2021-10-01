import sequelize from "../index.js";

import s from "sequelize";
const { DataTypes } = s;

const Productcategories = sequelize.define("productcategory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

});

 //Productcategories.sync({ force: true });

export default Productcategories;