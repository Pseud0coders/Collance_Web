import './quickguide.css'
import icon1 from '../../Collance_assets/Landing_page_assets/QUICK GUIDES TO/Connect.png'
import icon2 from '../../Collance_assets/Landing_page_assets/QUICK GUIDES TO/NFT Collection.png'
import icon3 from '../../Collance_assets/Landing_page_assets/QUICK GUIDES TO/Link.png'

export default function QuickGuide(){
    return(
        <div className="quickguide_container relative flex justify-center">
            <div className="quickguide_box relative flex flex-col content-around">
                <div className="header h-12 text-4xl font-bold text-left">QUICK GUIDES TO 
                    <div className="header_bg1 h-24 absolute"></div>
                    <div className="header_bg2 h-24 absolute"></div>
                </div>
                <div className="panel_box flex justify-around relative">
                    <Panel icon_path={icon1} btn_name={"Connect System"}/>
                    <Panel icon_path={icon2} btn_name={"Credit System"}/>
                    <Panel icon_path={icon3} btn_name={"Referal System"}/>
                </div>
            </div>
        </div>
    )
}

function Panel({icon_path , btn_name}) {
    return(
        <div className="panel h-48 flex justify-center items-center transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            <div className="icon"><img src={icon_path} alt="" /></div>
            <div className="btn_name w-48 h-24 text-4xl font-bold text-center">{btn_name}</div>    
        </div>
    )
}
