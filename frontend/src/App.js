import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
//screen
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import OrderScreen from "./Screens/OrderScreen";
import AddProductScreen from "./Screens/AddProductScreen";
//components
import Navbar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
import Login from "./Screens/Login";
import OrderDetail from "./Screens/OrderDetail";

const App = () => {
  const [sideToggler, setSideToggler] = useState(false);
  return (
    <Router className="App">
      <Navbar click={() => setSideToggler(!sideToggler)} />
      <BackDrop show={sideToggler} click={() => setSideToggler(!sideToggler)} />
      <SideDrawer
        show={sideToggler}
        click={() => setSideToggler(!sideToggler)}
      />

      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/orderdetail/:id" element={<OrderDetail />} />
          <Route exact path="/products/:id" element={<ProductScreen />} />
          <Route exact path="/addproduct" element={<AddProductScreen />} />
          <Route exact path="/editproduct/:id" element={<AddProductScreen />} />
          <Route exact path="/order" element={<OrderScreen />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
