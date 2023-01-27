import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import Works from "../Works/Works";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Works />
      <Pricing />
      <Team />
      <ContactUs />
    </div>
  )
};

export default Main;