import "../config/orm";

const burger = {
    all: () => selectAll(),
    insertOne: () => insertOne(),
    updateOne: () => updateOne(),
    deleteOne: () => deleteBurger()
}

export default burger;