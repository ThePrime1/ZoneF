import Button from '../components/Button'
import ChooseUs from '../components/ChooseUs';
import Uniq from '../components/Uniq';

const Home = () => {
    return (
        <div className='home-page'>
            <div className="showcase">
                <div className='showcase-text'>
                    <div>
                        <h1>ZoneForce International Limited</h1>
                        <h4>Let's Start Something New Together!</h4>
                        <p>ZomeForce International Ltd. starts its journey to becoming a reliable global organization that provides excellence and Quality through innovation with a forward-looking approach. </p>
                        <button className='btn-h'>REQUEST A PRODUCT</button>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className='introduce-section'>
                <div>
                    <p className='intro'>Let's Introduce</p>
                    <h1>Innovative Design Is Our Passion</h1>
                    <Button text={'Contact Now'} />
                </div>
                <div>
                    <p>Style Outfit Ltd. is one of the leading trendy apparel manufacturers & buying agents in Bangladesh. We assist our customers to purchase their products according to customer demands. We have dedicated Merchandising, Production, Quality Assurance, Compliance, Sourcing & Design Teams to ensure the best customer support and achieve maximum customer satisfaction.</p>
                    <p>Our Design team is always ready to send new inspiration according to the customer’s demands & development team is working to ensure the best developments support for our customers. We believe that fast development can bring us more opportunities and that’s why we do special care in development.</p>
                </div>
            </div>
            <Uniq />
            <ChooseUs />
        </div>
    );
}

export default Home;