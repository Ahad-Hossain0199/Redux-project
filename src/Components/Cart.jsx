import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="mt-10 border p-5 rounded-lg">
      <h2 className="text-2xl font-bold text-red-600">
        Shopping Cart
      </h2>

      <p className="mt-2 text-blue-600 font-bold">
        Total Items: {items.length}
      </p>

      <p className="text-xl font-bold text-red-600">
        Total Price: {total} Tk
      </p>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between mt-3 border-b pb-2 bg-blue-100 p-2 rounded"
        >
          <span>
            {item.name} : {item.price} Tk
          </span>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;