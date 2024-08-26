import React, { useRef } from 'react';
import '../App.css';
// import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import contactUs from '../images/Cover/logo-branding.jpg';
import facebook from '../images/menu/fb.svg';
import instagram from '../images/menu/instagram.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const phoneInput = document.getElementById('phone').value;
        const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

        if (phoneInput && !phonePattern.test(phoneInput)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Phone Number',
                text: 'Please enter a valid phone number.',
            });
            return;
        }

        try {
            const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customer_name: form.current.name.value,
                    customer_email: form.current.email.value,
                    customer_phoneNumber: form.current.phone.value,
                    customer_interest: form.current.interested.value,
                    customer_message: form.current.message.value,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Email successfully sent!', result.message);
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
                form.current.reset();
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to send message. Please try again later.',
            });
        }
    };

    return (
        <section id='contact' className='contact-box'>
            <div className='contact-box-left'>
                <LazyLoadImage src={contactUs} alt="telephone contact us." className='left-box-img' effect='blur'/>
            </div>

            <div className='contact-box-right'>
                <h2>Contact Us</h2>
                <div className='personal-contact'>
                    <div className='information'>
                        <p style={{color: '#333'}}>Location:</p>
                        <p>San Diego, CA</p>
                    </div>

                    <div className='information'>
                        <p style={{color: '#333'}}>Email:</p>
                        <p>dohoangtrang217@gmail.com</p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='input-box'>
                        <div className='input-field field'>
                            <input
                                type='text'
                                placeholder='Full Name'
                                id='name'
                                className='item'
                                autoComplete='off'
                                name='customer_name'
                                required
                            />
                            <div className='error-txt'>Full Name can't be blank</div>
                        </div>

                        <div className='input-field field'>
                            <input
                                type='email'
                                placeholder='Email Address'
                                id='email'
                                className='item'
                                autoComplete='off'
                                name='customer_email'
                                required
                            />
                            <div className='error-txt'>Email Address can't be blank</div>
                        </div>

                        <div className='input-field field'>
                            <input
                                type='tel'
                                placeholder='Phone Number (Optional)'
                                id='phone'
                                className='item'
                                autoComplete='off'
                                name='customer_phoneNumber'
                            />
                        </div>

                        <div className='input-field field'>
                            <label htmlFor='interested' className='visually-hidden'>Select your area of interest:</label>
                            <select
                                id='interested'
                                className='item'
                                name='customer_interest'
                                autoComplete='off'
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    I'm interested in...
                                </option>
                                <option value='newborn'>Newborn</option>
                                <option value='family'>Family</option>
                                <option value='foods/products'>Foods/Products</option>
                                <option value='maternity'>Maternity</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='text-area field'>
                        <textarea
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder='Your Message'
                            className="item"
                            autoComplete='off'
                            name='customer_message'
                            required
                        ></textarea>
                        <div className='error-txt'>Message can't be blank</div>
                    </div>

                    <button type='submit' value="Send" className='submit-button'>Send Message</button>
                </form>
                <div className='follow-us'>
                    <p>Follow us here</p>
                    <a href="https://www.facebook.com/botbotbaby?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                        <LazyLoadImage src={facebook} alt="Facebook Logo" className='social-logo' effect='blur'/>
                        <span class="sr-only">Follow us on Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/botbot_photography/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr&fbclid=IwZXh0bgNhZW0CMTAAAR1EIJ8LBlHmm2MDsa1RRueprHrJOiksScykuaV7Hyf6Vs7q8k4qpCar62w_aem_uNqmf4wd22V47X-eHbWmTw" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                        <LazyLoadImage src={instagram} alt="Instagram Logo" className='social-logo' effect='blur'/>
                        <span class="sr-only">Follow us on Instagram</span>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
