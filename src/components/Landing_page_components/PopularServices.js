import './PopularServices.css'
import CardBubble from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/cardbubble'
import Headerbubble from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/Headerbubble'
import img12 from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/pos12.png'
import img14 from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/pos14.jpg'
import img21 from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/pos21.jpg'
import img23 from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/pos23.jpeg'
import img25 from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/pos25.jpg'
import arrowbtn from '../../Collance_assets/Landing_page_assets/POPULAR SERVICES/external-link.png'

export default function PopularServices() {
    return(
        <div className="popular_services max-w-full relative grid justify-center animate-appear">
            <div className="popular_services_header relative">
                <span className='flex relative text-4xl font-bold'>POPULAR SERVICES</span>
                <div className="headerbubble absolute top-0 flex">
                    <Headerbubble/>
                    <Headerbubble/>
                </div>
            </div>

            <div className="popular_services_table relative grid">
                <div className="pos11 bg-white relative grid justify-center content-center text-white">
                    <div className="ser1 text-center">Web Development</div>
                    <div className="ser2 text-center">App Development</div>
                    <button className="arrow_btn absolute transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"><img className='h-10' src={arrowbtn} alt="" /></button>
                </div>
                <div className="pos12 object-cover"><img src={img12} alt="" /></div>
                <div className="pos13 bg-white relative grid justify-center content-center text-white">
                    <div className="ser1 text-center">LEGAL COUNSELING</div>
                    <div className="ser2 text-center">CONTRACT FORMATION</div>
                    <button className="arrow_btn absolute transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"><img className='h-10' src={arrowbtn} alt="" /></button>
                </div>
                <div className="pos14"><img src={img14} alt="" /></div>
                <div className="pos15 bg-white relative grid justify-center content-center text-white">
                    <div className="ser1 text-center">AI AUTOMATION</div>
                    <div className="ser2 text-center">VIRTUAL ASSISTANCE</div>
                    <button className="arrow_btn absolute transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"><img className='h-10' src={arrowbtn} alt="" /></button>
                </div>
                <div className="pos21"><img className='h-56' src={img21} alt="" /></div>
                <div className="pos22 bg-white relative grid justify-center content-center text-white">
                    <div className="ser1 text-center">WEBSITE DESIGN</div>
                    <div className="ser2 text-center">LOGO DESIGN</div>
                    <button className="arrow_btn absolute transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"><img className='h-10' src={arrowbtn} alt="" /></button>
                </div>
                <div className="pos23"><img className='h-56' src={img23} alt="" /></div>
                <div className="pos24 bg-white relative grid justify-center content-center text-white">
                    <div className="ser1 text-center">VOICE ARTIST</div>
                    <div className="ser2 text-center">MUSIC PRODUCITON</div>
                    <button className="arrow_btn absolute transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"><img className='h-10' src={arrowbtn} alt="" /></button>
                </div>
                <div className="pos25"><img className='h-56' src={img25} alt="" /></div>
            </div>
            <div className="cardbubble cardbubble1 absolute"><CardBubble/></div>
            <div className="cardbubble cardbubble2 absolute"><CardBubble/></div>
            
            

        </div>
    )
}