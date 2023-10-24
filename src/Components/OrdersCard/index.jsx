import { BanknotesIcon } from "@heroicons/react/24/outline";

const OrdersCards = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex flex-col justify-between items-center mb-5 w-80 ">
      <p className="flex  w-full h-12 items-center justify-around">
        <span>Date</span>
        <span>Products</span>
        <span>Total</span>
      </p>
      <p className="flex w-full justify-around border border-black h-12 items-center rounded-lg">
        <span>10/23/23</span>
        <span>{totalProducts}</span>
        <span>${totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCards;
