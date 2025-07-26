import db from "../config/database.js";
import { INTEGER, Sequelize } from "sequelize";
import barang from "./barangModel.js";
import transaksiModel from "./transaksiModel.js";

const cartModel = db.define(
    "keranjang",
    {
        qty: {
            type: INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        freezeTableName: true,
    }
);

cartModel.belongsTo(barang, { foreignKey: "barangId" });
// transaksiModel.hasMany(cartModel);
// cartModel.belongsTo(transaksiModel, { foreignKey: "transaksiId" });

export default cartModel;
