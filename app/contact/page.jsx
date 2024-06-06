import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We would love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7190.345728508059!2d82.7335!3d25.6987!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717687509031!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default Contact;
