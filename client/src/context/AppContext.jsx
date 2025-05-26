// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// const AppContextProvider = ({ children }) => {
//   axios.defaults.withCredentials = true;
//   const backendUrl = "http://localhost:4000";

//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const [userData, setUserData] = useState(null);

//   const getAuthState = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/auth/is-Auth`, {
//         withCredentials: true,
//       });

//       if (data.success) {
//         setIsLoggedin(true);
//         setUserData(data.userData);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const getUserData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/data`, {
//         withCredentials: true,
//       });
//       if (data.success) {
//         setUserData(data.userData);
//       } else {
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//  useEffect(() => {
//   getUserData();
//   getAuthState();
// }, []);

//   const value = {
//     backendUrl,
//     isLoggedin,
//     setIsLoggedin,
//     userData,
//     setUserData,
//     getUserData,
//     getAuthState,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export default AppContextProvider;

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  axios.defaults.withCredentials = true;
  const backendUrl = "http://localhost:4000";

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
      if (data.success) {
        setIsLoggedin(true);
        setUserData(data.userData);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`);
      if (data.success) {
        setUserData(data.userData);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAuthState();
    getUserData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData,
        getAuthState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
