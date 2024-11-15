import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Image = db.define(
    "image",
    {
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        underscored: true,
    }
)

export default Image;