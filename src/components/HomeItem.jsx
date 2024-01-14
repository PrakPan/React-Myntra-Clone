import { useDispatch } from "react-redux";
import { BagAction } from "../store/BagItemSlice";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
const HomeItem = ({ item }) => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {toggleBtn ? (
        <button
          type="button"
          className="btn btn-warning btn-add-bag"
          onClick={() => {
            dispatch(BagAction.addBagItem(item));
            setToggleBtn(false);
          }}
        >
          <IoAddCircleOutline /> Add to Cart
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={() => {
            dispatch(BagAction.removeItem(item));
            setToggleBtn(true);
          }}
        >
          <MdOutlineDelete /> Remove from Cart
        </button>
      )}
    </div>
  );
};
export default HomeItem;
