import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 25000,
    },
    {
      id: 3,
      name: "Headphone",
      price: 3000,
    },
     {
      id: 4,
      name: "Airbuds",
      price: 3000,
    },
    {
      id: 5,
      name: "camera",
      price: 70000,
    },
    {
      id: 6,
      name: "microphone",
      price: 5000,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-10 shadow-lg p-5 rounded-lg">
      {products.map((product) => (
        <div
          key={product.id}
          className="border text-white p-5 rounded-lg shadow bg-blue-900"
        >
          <h2 className="text-xl font-bold">
            {product.name}
          </h2>

          <p className="my-2">
            {product.price} Tk
          </p>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
            className="bg-black hover:bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;