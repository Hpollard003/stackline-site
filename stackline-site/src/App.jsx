import "./App.css";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Table } from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}>
        <ProductCard />
        <Table />
      </div>
    </>
  );
}

export default App;
