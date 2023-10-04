import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import ShopList from "./ShopList";
import StepProgress from "./StepProgress";

import { useStateContext } from "../Context/StateProvider";

import "../../style/Form.scss";

export default function Form() {
  const { shopStage, setShopStage, setShipFee, userInfo, setUserInfo } =
    useStateContext();

  const renderForm = () => {
    switch (shopStage) {
      case 1:
        return <Step1 setUserInfo={setUserInfo} userInfo={userInfo} />;
      case 2:
        return <Step2 setShipFee={setShipFee} userInfo={userInfo} />;
      case 3:
        return <Step3 setUserInfo={setUserInfo} userInfo={userInfo} />;
    }
  };

  return (
    <>
      <section
        id="form"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div className="form-left">
            <StepProgress shopStage={shopStage} />
            {renderForm()}
            <ProgressControl
              shopStage={shopStage}
              setShopStage={setShopStage}
              userInfo={userInfo}
            />
          </div>
          <div className="form-right">
            <ShopList />
          </div>
        </div>
      </section>
    </>
  );
}
