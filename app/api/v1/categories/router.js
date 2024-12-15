const express = require("express");
const { create, index, find, update, destroy } = require("./controller");
const router = express();

router.get("/", index);
router.post("/", create);
router.get("/:id", find);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
