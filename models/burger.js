require("../config/orm");

const burger = {
    all: () => selectAll(),
    insertOne: () => insertOne(),
    updateOne: () => updateOne(),
    deleteOne: () => deleteBurger()
}

module.exports = burger;