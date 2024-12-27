import './footer.css'
import img from '../../Collance_assets/Landing_page_assets/Footer/LOGO.png'
import social from '../../Collance_assets/Landing_page_assets/Footer/socials.png'

export default function Footer() {
    return(
        <div className="footer w-screen grid relative animate-appear">
            <img className='social_ref absolute' src={social} alt="img" />
            <div className="footer_info absolute">&copy; 2024 Collance.com . All rights reserverd.</div>
            <img className='footer_logo absolute w-64 h-16' src={img} alt="social img" />
            <div className="collance grid justify-center">
                <h3 className="text-lg">Collance</h3>
                <a className="text-sm" href="">Pricing</a>
                <a className="text-sm" href="">Updates</a>
                <a className="text-sm" href="">Beta</a>
                <a className="text-sm" href="">Newsletter</a>
                <a className="text-sm" href="">Collaborations</a>
            </div>
            <div className="product grid justify-center">
                <h3 className="text-lg">Product</h3>
                <a className="text-sm" href="">Clients</a>
                <a className="text-sm" href="">Freelancers</a>
                <a className="text-sm" href="">Newcomers</a>
            </div>
            <div className="learning grid justify-center">
                <h3 className="text-lg">Learning</h3>
                <a className="text-sm" href="">Learn</a>
                <a className="text-sm" href="">Tutorials</a>
                <a className="text-sm" href="">Communities</a>
            </div>
            <div className="resources grid justify-center">
                <h3 className="text-lg">Resources</h3>
                <a className="text-sm" href="">Tutorials</a>
                <a className="text-sm" href="">Editorials</a>
                <a className="text-sm" href="">Product</a>
                <a className="text-sm" href="">Newsroom</a>
            </div>
            <div className="about grid justify-center">
                <h3 className="text-lg">About</h3>
                <a className="text-sm" href="">Company</a>
                <a className="text-sm" href="">Careers</a>
                <a className="text-sm" href="">Legal</a>
                <a className="text-sm" href="">Help</a>
            </div>
            
        </div>
    )
}