import jwt from "jsonwebtoken";

const authMiddleware = (req) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader) {
    return null;
  }
  const token = authHeader.replace("Bearer", "");

  try {
    return jwt.verify(token, "yiuyre798764");
  } catch (e) {
    throw new Error("Invalid or Expired Token");
  }
};

export default authMiddleware;
