import './Indiangov.css'
import './scroll.css'
import img3 from '../../Collance_assets/Landing_page_assets/Indian Gov/INDIANGOV.png'

export default function Indiangov() {
    return(
        <div className="indiangov_box flex justify-center max-w-full h-32 relative animate-appear">
            <div className="indiangov flex justify-center items-center h-32 rounded-lg">
                <div className="indiangov_text text-2xl font-semibold">POWERED BY THE GOVERNMENT OF INDIA</div>
                <img className="indiangov_img h-24" src={img3} alt="" />
            </div>
        </div>
    )
}
