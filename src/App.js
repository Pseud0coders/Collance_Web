import FindThemGigs from "./components/findthemgigs";
import Footer from "./components/footer";
import Gigsmadesimpler from "./components/gigsmadesimpler";
import HeroBox from "./components/HeroBox";
import Indiangov from "./components/Indiangov";
import Navbar from "./components/navbar";
import PopularServices from "./components/PopularServices";
import QuickGuide from "./components/quickguide";
import SkilledFreelance from "./components/skilledfreelance";
import WhyCollance from "./components/whycollance";
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
