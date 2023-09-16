export default function ProgressControl({ shopStage, setShopStage }) {
  return (
    <div
      className="progress-control"
      style={{ borderTop: "1px solid #5a5a5a", paddingTop: "10px" }}
    >
      <button
        onClick={function (e) {
          e.preventDefault();
          if (shopStage > 1) {
            setShopStage(shopStage - 1);
          }
        }}
        style={{ background: shopStage === 1 ? "#5a5a5a" : "pink" }}
      >
        上一步
      </button>
      <button
        onClick={function (e) {
          e.preventDefault();
          if (shopStage < 3) {
            setShopStage(shopStage + 1);
          }
        }}
      >
        {shopStage === 3 ? "確認下單" : "下一步"}
      </button>
    </div>
  );
}
