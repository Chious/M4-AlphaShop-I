import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import ShopList from "./ShopList";
import StepProgress from "./StepProgress";

import { useState } from "react";
import "../../style/Form.scss";

export default function Form() {
  const [shopStage, setShopStage] = useState(1);

  const renderForm = () => {
    switch (shopStage) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
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
