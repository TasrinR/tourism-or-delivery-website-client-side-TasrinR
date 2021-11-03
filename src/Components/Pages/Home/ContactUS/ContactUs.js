import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactUs.css'

const ContactUs = () => {
    
    const { register, handleSubmit, reset } = useForm();
    return (
            <div className="contact-us m-3 p-3" style={{border: '1px solid grey'}}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit()}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("message")} placeholder="Your Message" />
                <textarea {...register("email")} placeholder="Your Email" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default ContactUs;