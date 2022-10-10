const express = require("express");
const router = new express.Router();
const Item = require("../item");

router.get("/", (req, res, next) => {
  try {
    return res.json({ items: Item.getAllItems() });
  } catch (e) {
    return next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({ item: newItem });
  } catch (e) {
    return next(e);
  }
});

router.get("/:name", (req, res, next) => {
  try {
    let specificItem = Item.find(req.params.name);
    return res.json({ item: specificItem });
  } catch (e) {
    return next(e);
  }
});

router.patch("/:name", (req, res, next) => {
  try {
    let fixItem = Item.patch(req.params.name, req.body);
    return res.json({ item: fixItem });
  } catch (e) {
    return next(e);
  }
});

router.delete("/:name", (req, res, next) => {
  try {
    Item.delete(req.params.name);
    return res.json({ message: "Item has been removed" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
