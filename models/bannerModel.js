import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Banner = db.define(
    "banner",
    {
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        underscored: true,
    }
)

export default Banner;