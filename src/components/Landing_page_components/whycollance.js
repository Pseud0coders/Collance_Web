import './whycollance.css'
import img1 from '../../Collance_assets/Landing_page_assets/whycollanceassets/Lock.png'
import img2 from '../../Collance_assets/Landing_page_assets/whycollanceassets/Star.png'
import img3 from '../../Collance_assets/Landing_page_assets/whycollanceassets/People.png'
import ornament from '../../Collance_assets/Landing_page_assets/whycollanceassets/Ornament35.png'

export default function WhyCollance() {
    return(
        <div className="whycollance h-auto  grid flex-col justify-center relative">
            <img className='ornament1 absolute' src={ornament} alt="" />
            <img className='ornament2 absolute' src={ornament} alt="" />
            <img className='ornament3 absolute' src={ornament} alt="" />
            <Header/>
            <div className="carbox h-auto grid">
                <Vertical_separator/>
                <div className="card1">
                    <Card image={img1} title="SECURE PAYMENTS" content="With Collance, your earnings are protected through an escrow system, ensuring safe and timely payments, including options for crypto and Web3 transactions." />
                </div>
                <div className="card2">
                    <Card image={img2} title="OPPORTUNITIES" content="With Collance, your earnings are protected through an escrow system, ensuring safe and timely payments, including options for crypto and Web3 transactions." />
                </div>
                <div className="card3">
                    <Card image={img3} title="COLLABORATION" content="With Collance, your earnings are protected through an escrow system, ensuring safe and timely payments, including options for crypto and Web3 transactions." />
                </div>
            </div>
        </div>
    )
}

function Header() {
    return(
        <div className="header_box h-24 flex justify-center items-center">
                <div className="header relative h-24 grid justify-center items-center">
                    <div className="text h-12 font-bold text-center text-gray-900">WHY COLLANCE ? </div>
                    <div className="text_bg1 h-24"></div>
                    <div className="text_bg2 h-24"></div>
                </div>
            </div>
    )
}

function Vertical_separator() {
    return(
        <div className="vertical_separator flex flex-col">
            <div className="circle self-center h-10 w-10"></div>
            <div className="vetical_line relative w-2"></div>
        </div>
    )
}

function Card({image , title , content }) {
    return(
        <div className="card grid">
            <div className="titlebox flex items-center">
                <span className='title_icon w-16 h-16 object-scale-down'><img src={image} alt="img" /></span>
                <span className='title relative h-10 text-3xl font-bold leading-10 text-left text-gray-900'>{title}</span>
            </div>
            <div className="content overflow-auto p-5 text-xl font-normal leading-6 text-center">{content}</div>
        </div>
    )
}