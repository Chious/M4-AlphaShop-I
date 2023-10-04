import jsonData from "../Form/Cart.json";

import "../../style/ShopList.scss";

import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

import { useStateContext } from "../Context/StateProvider";

export default function ShopList() {
  const { data, setData, shipFee } = useStateContext();

  let Value = data.reduce((total, item) => {
    const itemValue = item.price * item.quantity;
    return total + itemValue;
  }, 0);
  let TotalValue = Value + shipFee;

  const handleImageClick = (itemId, changeAmount = 1) => {
    const updatedData = data.map((item) => {
      return item.id === itemId
        ? { ...item, quantity: item.quantity + changeAmount }
        : item;
    });
    setData(updatedData);
  };

  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price="{0}">
          {data.map((obj) => (
            <div className="product-container col col-12" key={obj.id}>
              <img className="img-container" src={obj.img} />
              <div className="product-info">
                <div className="product-name">{obj.name}</div>
                <div className="product-control-container">
                  <div className="product-control">
                    <RemoveCircleSharpIcon
                      className="product-action minus"
                      onClick={(e) => {
                        e.preventDefault();
                        handleImageClick(obj.id, -1);
                      }}
                    />
                    <span className="product-count">{obj.quantity}</span>
                    <AddCircleSharpIcon
                      className="product-action plus"
                      onClick={(e) => {
                        e.preventDefault();
                        handleImageClick(obj.id, 1);
                      }}
                    />
                  </div>
                </div>
                <div className="price">${obj.price * obj.quantity}</div>
              </div>
            </div>
          ))}
          <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div className="price">{shipFee === 0 ? "免費" : shipFee}</div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div className="price">{TotalValue}</div>
          </section>
        </section>
      </section>
    </>
  );
}
