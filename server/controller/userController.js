// import User from "../models/userModel.js";

import User from "../models/userModel.js";

// export const getUserData = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       userData: {
//         name: user.name,
//         isAccountVerified: user.isAccountVerified,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Server Error: " + error.message,
//     });
//   }
// };

export const getUserData = async (req, res) => {
  try {
    const userId = req.userId; // Use the userId from the middleware

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      userData: {
        _id: user._id,
        name: user.name,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
};
