import './skilledfreelance.css'
import img from '../Collance_assets/Skilled Freelance Sections/man.jpeg'
import Ornament1 from '../Collance_assets/Skilled Freelance Sections/ornament1'
import Ornament2 from '../Collance_assets/Skilled Freelance Sections/ornament2'

export default function SkilledFreelance() {
    return(
        <div className="skilledfreelance_container flex justify-center items-center relative">
            <div className="skilledfreelance_ornament1 absolute"><Ornament1/></div>
            <div className="skilledfreelance_ornament2 absolute"><Ornament2/></div>
            <div className="skilledfreelance grid">
                <div className="skilledfreelance_picture"><img className='object-cover' src={img} alt="" /></div>
                <div className="skilledfreelance_content flex flex-col items-center">
                    <div className="skilledfreelance_header relative h-24 text-4xl font-normal text-left">Join forces with skilled freelancers today!</div>
                    <div className="skilledfreelance_text relative flex flex-col justify-between">
                        <div className="skilledfreelance_text1 h-12 text-2xl font-medium leading-7 text-left">Ready to level up your freelance game? We've got opportunities waiting!</div>
                        <div className="skilledfreelance_text2 relative h-32 text-xl font-medium leading-6 text-left"> Collance connects you with new freelancers eager to bring innovation and energy to your projects.</div>
                    </div>
                    <div className="skilledfreelance_footer_btn flex justify-between relative">
                        <div className="skilledfreelance_btn h-16 flex justify-center items-center">COLLABORATE</div>
                        <div className="skilledfreelance_btn h-16 flex justify-center items-center">FIND OPPUTUNITIES</div>
                    </div>
                </div>
            </div>
        </div>
    )
}