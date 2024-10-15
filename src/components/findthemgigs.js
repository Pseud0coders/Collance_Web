import './findthemgigs.css'
import img from '../Collance_assets/pick them gig/Picture For Card.jpg'
import Ornament from '../Collance_assets/pick them gig/ornament';

export default function FindThemGigs(){

    let text1 = "As a client on Collance, easily browse through a wide range of freelancer expertise and project types, from small tasks to large-scale collaborations, ensuring you find the perfect fit for your needs.";

    return(
        <div className="section_box flex justify-center items-center relative">
            <div className="oranament1 absolute"><Ornament/></div>
            <div className="oranament2 absolute"><Ornament/></div>
            <div className="pick_them_gigs relative grid">
                <div className="content flex flex-col justify-around items-start">
                    <div className="header relative h-12 text-4xl font-semibold text-left">PICK THEM GIGS</div>
                    <div className="pick_them_gigs_text relative h-40 text-xl font-medium leading-6 text-left"><Text text={text1}/></div>
                    <div className="footer_btn flex justify-around">
                        <div className="btn h-20 w-56  flex justify-center items-center "><Button placeholder={"BY PROJECTS"}/></div>
                        <div className="btn h-20 w-56  flex justify-center items-center "><Button placeholder={"BY TALENT POOL"}/></div>
                        <div className="btn h-20 w-56  flex justify-center items-center "><Button placeholder={"COLLABORATIVE GIGS"}/></div>
                    </div>
                </div>
                <div className="picture"><img className='object-cover' src={img} alt="" /></div>
            </div>
        </div>
    )
}

function Button({placeholder}) {
    return(
        <>
        {placeholder}
        </>
    )
}

function Text({text}) {
    return(
        <>{text}</>
    )
}