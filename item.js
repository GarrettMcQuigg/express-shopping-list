const items = require("./fakeDb");

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  static getAllItems() {
    return items;
  }

  static find(name) {
    const found = items.find((el) => el.name === name);
    if (found === undefined) {
      throw { message: "Not Found", status: 404 };
    }
    return found;
  }

  static patch(name, data) {
    let fixItem = Item.find(name);
    if (fixItem === undefined) {
      throw { message: "Not Found", status: 404 };
    }
    fixItem.name = data.name;
    fixItem.price = data.price;

    return fixItem;
  }

  static delete(name) {
    let delItem = Item.findIndex((n) => n.name === name);
    if (delItem === -1) {
      throw { message: "Not Found", status: 404 };
    }
    items.splice(delItem, 1);
  }
}

module.exports = Item;
