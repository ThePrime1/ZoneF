import { Link } from 'react-router-dom'

const Uniq = () => {
    return (
        <div className='uniq'>
            <h1>Our Unique Style</h1>
            <p>We are always in search of new designs, new fabric, and new technology. We are evolving with the fast-changing fashion industry. We have many more to offer you from our fashion closet
            </p>

            <div className='collection'>
                <div>
                    <img src="/img/22.jpg" alt="mens" /><br />
                    <Link to='#'>Mens</Link>
                </div>

                <div>
                    <img src="/img/25.jpg" alt="mens" /><br />
                    <Link to='#'>Ladies</Link>
                </div>

                <div>
                    <img src="/img/26.jpg" alt="mens" /><br />
                    <Link to='#'>Kids</Link>
                </div>

                <div>
                    <img src="/img/27.jpg" alt="mens" /><br />
                    <Link to='#'>Active Wear</Link>
                </div>

                <div>
                    <img src="/img/28.jpg" alt="mens" /> <br />
                    <Link to='#'>Out Wear</Link>
                </div>

                <div>
                    <img src="/img/29.jpg" alt="mens" /> <br />
                    <Link to='#'>Accessories</Link>
                </div>
            </div>

        </div>
    );
}

export default Uniq;