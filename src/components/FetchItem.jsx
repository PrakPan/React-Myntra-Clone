import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../store/fetchItemSlice";
import { useEffect } from "react";
import { itemsAction } from "../store/itemsSlice";
const FetchItem = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus.fetchDone);
  useEffect(() => {
    if (fetchStatus) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchAction.fetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchAction.fetchEnded());
        dispatch(fetchAction.markFetchDone());
        dispatch(itemsAction.addInitialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};
export default FetchItem;
