import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
const Bag = () => {
  const bagItem = useSelector((store) => store.BagItems);
  return (
    <>
      <main>
        <div className="bag-page">
          {bagItem.length === 0 ? (
            <ErrorMessage />
          ) : (
            <div>
              <div className="bag-items-container">
                {bagItem.map((item) => (
                  <BagItem key={item.id} item={item} />
                ))}
              </div>
              <div className="bag-summary">
                <BagSummary />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
export default Bag;
