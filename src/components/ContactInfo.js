import Button from './Button'

const ContactInfo = () => {
    return (
        <div className='contact-info'>
            <div>
                <h1>Let's Do Something Together</h1>
                <p>WE CAN MAKE ANYTHING YOU CAN IMAGINE!</p>
            </div>

            <div>
                <Button text={'CONTACT'} />
            </div>
        </div>
    );
}

export default ContactInfo;