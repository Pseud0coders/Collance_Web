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
import Login from "./components/Landing_page_components/Login";
import Register from "./components/Landing_page_components/Register";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";




function App() {

  const Router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/signup",
        element : <Register/>
      }
      ]
    }
  ])

  
  return (
    <RouterProvider router={Router}>
      
      <Layout/>
    </RouterProvider>
  );
}

function Layout() {

  return(
    <>
    <div className="web_box">
    <Navbar/>
    <Outlet/>    

    </div>
    </>
  );
}

function Home() {
  return(
    <>
      <HeroBox/>
      <Indiangov/>
      <PopularServices/>
      <WhyCollance/>
      <FindThemGigs/>
      <SkilledFreelance/>
      <QuickGuide/>
      <Gigsmadesimpler/>
      <Footer/>
    </>
  );
}

export default App;
