var bcrypt = require("bcrypt");
async function accessChecker(req, res, next) {
  try {
    const isMatched = await bcrypt.compare("0", req.body.creatoraccesslevel);
    if (isMatched) next();
    else res.status(404).json({ message: "Not sufficient access level" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = accessChecker;
