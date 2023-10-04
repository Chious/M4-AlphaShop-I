import { useState, createContext, useContext } from "react";
import jsonData from "../Form/Cart.json";

const StateContext = createContext();

export const StatePovider = ({ children }) => {
  // Form.jsx
  const [shopStage, setShopStage] = useState(1);
  const [shipFee, setShipFee] = useState(0);
  const [userInfo, setUserInfo] = useState({
    user: {
      gender: "mr",
      fullName: "",
      phone: "",
      email: "",
      address_country: "",
      address_full: "",
    },
    delivery: 0,
    payment: {
      cardName: "",
      cardId: "",
      cardDuration: "",
      cardCVC: "",
    },
  });

  // ShopList.jsx
  const [data, setData] = useState(jsonData);

  return (
    <StateContext.Provider
      value={{
        shopStage,
        setShopStage,
        shipFee,
        setShipFee,
        userInfo,
        setUserInfo,
        data,
        setData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
