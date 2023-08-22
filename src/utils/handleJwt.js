import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/config.js";

export const tokenSing = async ({ _id, role }) => {
  const sing = jwt.sign(
    {
      _id,
      role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sing;
};

export const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    console.log(error.message);
  }
};
