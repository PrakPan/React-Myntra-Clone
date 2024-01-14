import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div style={{ margin: "auto auto", height: "70vh", fontSize: "2rem" }}>
      OOP's no item in the Cart Add some
      <div>
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Go to Home
        </button>
      </div>
    </div>
  );
};
export default ErrorMessage;
