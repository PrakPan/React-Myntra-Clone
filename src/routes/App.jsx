import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {
  const { currentlyFetching } = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem />
      {currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
