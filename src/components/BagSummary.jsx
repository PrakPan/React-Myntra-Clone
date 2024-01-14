import { useSelector } from "react-redux";
const BagSummary = () => {
  const items = useSelector((store) => store.BagItems);
  let totalMRP = 0;
  items.forEach((element) => {
    totalMRP += element.original_price;
  });
  let discountMRP = 0;
  items.forEach((element) => {
    discountMRP += (element.original_price * element.discount_percentage) / 100;
  });
  let finalMRP = Math.round(totalMRP - discountMRP + 99);
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({items.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{discountMRP}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalMRP}</span>
        </div>
      </div>
      <button
        className="btn-place-order"
        onClick={() => console.log("Item placed")}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};
export default BagSummary;
