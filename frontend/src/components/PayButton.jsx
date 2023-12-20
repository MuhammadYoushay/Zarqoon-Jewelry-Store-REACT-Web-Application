//import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
  //const user = useSelector((state) => state.auth);

  const handleCheckout = () => {
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
