const {verify } = require("jsonwebtoken");

module.exports = {
  authentication: async (req, res, next) => {
    const { authentication } = req.headers;

    if (!authentication) {
      return res.status(403).json({ error: "Token not found" });
    }

    const [, token] = authentication.split(" ");

    try {
      verify(token, "segredo");

      next();
    } catch (error) {
      return res.status(403).json({ error: error.message });
    }
  },
};
