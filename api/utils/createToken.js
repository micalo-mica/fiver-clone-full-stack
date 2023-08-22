import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const activation = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN, { expiresIn: "30m" });
};

export const forgotToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "50m" });
};
