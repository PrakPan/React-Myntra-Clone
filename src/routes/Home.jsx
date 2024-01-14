import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Home = () => {
  const items = useSelector((store) => store.itemsSlice);

  return (
    <>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default Home;
