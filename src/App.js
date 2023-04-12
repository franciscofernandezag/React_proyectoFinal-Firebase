import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./components/Context/CustomContext";

const App = () => {


  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categories/:name" element={<ItemListContainer />} />
            <Route
              path="/product/:id"
              element={<ItemDetailContainer/>}
            />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
