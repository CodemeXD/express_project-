const Footer = () => {


    return(

        <div className="footer">
            
            <div className="imag">
                <div className="images_component img1"></div>
                <div className="images_component img2"></div>
                <div className="images_component img3"></div>
                <div className="images_component img4"></div>
            </div>

            <div className="footer1">
                 <div className="logo1">Sunnyside</div>
                 <div>
                    <ul >
                        <li> <a href="#" className="footer-nav">Accueil</a></li>
                        <li><a href="#" className="footer-nav">services</a></li>
                        <li><a href="#" className="footer-nav">contact</a></li>
                    </ul>
                 </div>
                 <div className="copyright">
                     all right reserverd 
                 </div>
            </div>
        </div>
    )

}

export default Footer;