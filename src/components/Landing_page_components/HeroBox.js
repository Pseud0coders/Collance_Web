import img2 from '../../Collance_assets/Landing_page_assets/Hero Section/Hero Bar/deskman.jpg'
import search_icon from '../../Collance_assets/Landing_page_assets/Hero Section/Hero Bar/searchicon.png'
import './HeroBox.css'

export default function HeroBox() {
    return(
        <div className="herobox relative w-full grid">
            <Left_HeroBox/>
            <Right_HeroBox/>   
        </div>
        
    )
}

function Searchbar() {
    return(
        
        <form className="search_form h-20 flex justify-around items-center relative" action="">
            <button type="submit"><img src={search_icon} alt="" /></button>
            <input className=" relative h-18" type="text" placeholder="Search for services" name ="search" />
        </form>
        
    )
}

function Popular_section() {
    return(
        <ul className='popular_section relative flex justify-between'>
            <li className='popular_search p-2 text-base font-semibold'>Popular Searches :</li>
            <li className='search_option text-white h-10 w-auto p-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>Logo Design</li>
            <li className='search_option text-white h-10 w-auto p-2  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>Automation</li>
            <li className='search_option  text-white h-10 w-auto p-2  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>Video Editing</li>
        </ul>
    )
}


function Left_HeroBox() {
    return(
        <>
        <div className="left_herobox overflow-visible relative grid pt-10">
            <h1 className='text-5xl font-bold text-left'>YOUR SKILLS. OUR PLATFORM. <br/> ENDLESS POSSIBILITIES.</h1>
            <Searchbar/>
            <Popular_section/>
            <span className='hero_left_text relative text-gray-900 text-xl font-semibold'>Connect with top talent, work seamlessly with clients, and <br/> turn opportunities into lasting success. </span>
        </div>
        </>
    )
}

function Right_HeroBox() {
    return(
        <div className="right_herobox relative flex">
            <img className='object-cover' src={img2} alt="" />
        </div>
    )
}

