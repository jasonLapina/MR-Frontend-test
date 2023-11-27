import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Product from "./components/Product";
import "./style.css";

function App() {
  return (
    <>
      <Cart />
      <Layout>
        <Product />
      </Layout>
    </>
  );
}

export default App;
