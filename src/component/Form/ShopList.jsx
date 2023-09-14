import picture1 from "../../assets/images/product-1.jpg";
import picture2 from "../../assets/images/product-2.jpg";

import "../../style/ShopList.scss";

import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export default function ShopList() {
  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={3999}
          >
            <img className="img-container" src={picture1} />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <RemoveCircleSharpIcon className="product-action minus"></RemoveCircleSharpIcon>
                  <span className="product-count">0</span>
                  <AddCircleSharpIcon className="product-action plus"></AddCircleSharpIcon>
                </div>
              </div>
              <div className="price">3999</div>
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={1299}
          >
            <img className="img-container" src={picture2} />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <RemoveCircleSharpIcon className="product-action minus"></RemoveCircleSharpIcon>
                  <span className="product-count">0</span>
                  <AddCircleSharpIcon className="product-action plus"></AddCircleSharpIcon>
                </div>
              </div>
              <div className="price">1299</div>
            </div>
          </div>
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price" />
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price" />
        </section>
      </section>
    </>
  );
}
