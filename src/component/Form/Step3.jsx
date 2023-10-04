import style from "../../style/Step3.module.scss";

export default function Step3({ userInfo, setUserInfo }) {
  function handleCardNameChange(e) {
    setUserInfo({
      ...userInfo,
      payment: { ...userInfo.payment, cardName: e.target.value },
    });
  }

  function handleCardDurationChange(e) {
    setUserInfo({
      ...userInfo,
      payment: { ...userInfo.payment, cardDuration: e.target.value },
    });
  }

  function handleCardCVCChange(e) {
    setUserInfo({
      ...userInfo,
      payment: { ...userInfo.payment, cardCVC: e.target.value },
    });
  }

  function handleCardIdChange(e) {
    setUserInfo({
      ...userInfo,
      payment: { ...userInfo.payment, cardId: e.target.value },
    });
  }

  return (
    <div className="step-content">
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className={style.col1}>
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input
                type="text"
                placeholder="John Doe"
                value={userInfo.payment.cardName}
                onChange={handleCardNameChange}
              />
            </div>
          </div>
          <div className={style.col2}>
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                value={userInfo.payment.cardId}
                onChange={handleCardIdChange}
              />
            </div>
          </div>
          <div className={style.col3}>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input
                type="text"
                placeholder="MM/YY"
                value={userInfo.payment.duration}
                onChange={handleCardDurationChange}
              />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input
                type="text"
                placeholder={123}
                value={userInfo.payment.cardCVC}
                onChange={handleCardCVCChange}
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
