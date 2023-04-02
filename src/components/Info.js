import Button from "./Button";

const Info = () => {
    return (
        <div className='info-section'>
            <div className='about-section'>
                <h1>Zone<span>Force</span></h1>

                <h5>About Us</h5>
                <p>Style Outfit Ltd. starts its journey to becoming a reliable global organization that provides excellence and Quality through innovation with a forward-looking approach. We’re motivated to provide comfortable and high-end quality products to the customer.</p>
            </div>

            <div className='contact-section'>
                <h4>Contact With Us</h4>
                <p>Facebook</p>
                <p>Linkedin</p>

                <h5>Visit Us</h5>
                <h6>Our Office Location</h6>
                <p>House -91, 1st Floor, Road – 14,
                    Uttara, Sector – 11,
                    Dhaka – 1230, Bangladesh
                    Email: info@style-outfit.com</p>
            </div>

            <div className='subscribe'>
                <h4>Subscribe</h4>
                <p>Sign up, you will love hearing from us. We promise!</p>

                <input type="email" placeholder='Email' /><br />
                <Button text={'Send'} />
            </div>
        </div>
    );
}

export default Info;