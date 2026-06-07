import Counter from "./Components/Counter";
import CounterButton from "./Components/CounterButton";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-5 bg-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 item-center text-blue-600">
       Tece <span className="text-red-600">Jone</span>
      </h1>

      <Counter />
      <CounterButton />

      <ProductList />

      <Cart />
    </div>
  );
}

export default App;