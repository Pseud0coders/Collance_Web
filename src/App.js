import FindThemGigs from "./components/Landing_page_components/findthemgigs";
import Footer from "./components/Landing_page_components/footer";
import Gigsmadesimpler from "./components/Landing_page_components/gigsmadesimpler";
import HeroBox from "./components/Landing_page_components/HeroBox";
import Indiangov from "./components/Landing_page_components/Indiangov";
import Navbar from "./components/Landing_page_components/navbar";
import PopularServices from "./components/Landing_page_components/PopularServices";
import QuickGuide from "./components/Landing_page_components/quickguide";
import SkilledFreelance from "./components/Landing_page_components/skilledfreelance";
import WhyCollance from "./components/Landing_page_components/whycollance";
import './App.css';

function App() {
  return (
    <div className="web_box">
    <Navbar/>
    <HeroBox/>
    <Indiangov/>
    <PopularServices/>
    <WhyCollance/>
    <FindThemGigs/>
    <SkilledFreelance/>
    <QuickGuide/>
    <Gigsmadesimpler/>
    <Footer/>
    </div>
  );
}

export default App;
