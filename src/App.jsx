import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeMeesho from "./Pages/HomeMeesho";
import Fashion from "./Components/filters/Fashion";
import VegetableFruits from "./Components/filters/VegetablesFruits";
import FoodDrinks from "./Components/filters/FoodDrinks";
import HomeKitchen from "./Components/filters/HomeKitchen";
import MusicalInstruments from "./Components/filters/MusicalInstruments";
import Mobiles from "./Components/filters/Mobiles";
import JewelleryAccessories from "./Components/filters/JewelleryAccessories";
import BeautyHealth from "./Components/filters/BeautyHealth";
import BagsFootwear from "./Components/filters/BagsFootwear";
import BakeryBiscuit from "./Components/filters/BakeryBiscuit";
import Electronics from "./Components/filters/Electronics";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<HomeMeesho />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/vegetablesfruits" element={<VegetableFruits />} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/FoodDrinks" element={<FoodDrinks />} />
        <Route path="/HomeKitchen" element={<HomeKitchen />} />
        <Route path="/MusicalInstruments" element={<MusicalInstruments />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/jewellery-accessories" element={<JewelleryAccessories />} />
        <Route path="/beautyhealth" element={<BeautyHealth />} />
        <Route path="/bakerybiscuit" element={<BakeryBiscuit/>} />
        <Route path="/BagsFootwear" element={<BagsFootwear/>} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
