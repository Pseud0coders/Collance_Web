import './gigsmadesimpler.css'
import img from '../../Collance_assets/Landing_page_assets/Gigs Made Simpler/Footer Image.png'

export default function Gigsmadesimpler() {

    let text = "New to the freelancing world ? With  Collance getting your first break through is made much simpler, Interested ? Learn more or Register now to get your first gig! . ";

    return(
        <div className="gigsmadesimpler grid relative animate-appear">
            <div className="gigsmadesimpler_content flex flex-col justify-center items-center">
                <div className="gigsmadesimpler_header h-24 text-5xl font-semibold text-center">Gigs made Simpler</div>
                <div className="gigsmadesimpler_text relative h-24 text-xl font-normal leading-6 text-left">{text}</div>
                <div className="gigsmadesimpler_button relative flex justify-between">
                    <div className="gigsmadesimpler_register flex justify-center items-center w-40 h-12 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">REGISTER NOW</div>
                    <div className="gigsmadesimpler_learn_more w-32 h-12 flex justify-center items-center transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">Learn more</div>
                </div>
            </div>
            <div className="gigsmadesimpler_picture"><img src={img} alt="" /></div>
        </div>
    )
}