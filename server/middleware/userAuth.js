// import jwt from "jsonwebtoken";

// const userAuth = async (req, res, next) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized. Please login again.",
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decoded?.id) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid token. Please login again.",
//       });
//     }

//     req.body.userId = decoded.id;
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: "Token verification failed: " + error.message,
//     });
//   }
// };

// export default userAuth;

import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;

    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

export default userAuth;
