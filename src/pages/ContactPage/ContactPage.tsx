// src/pages/ContactPage/ContactPage.tsx
import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './ContactPage.module.css';
import { AnimatedSection } from '../../components';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Define the type for our form inputs
type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // This function will be called on successful form submission
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Netlify forms are handled via attributes on the form tag.
    // This function is here to log the data for now, but the actual
    // submission is handled declaratively by Netlify.
    console.log('Form submitted successfully:', data);
    // alert('Thank you for your message! I will get back to you soon.');
    // In a real app, you might reset the form here: reset();
  };

  return (
    <AnimatedSection>
      <div className={styles.contactPage}>
        <h1 className={styles.pageTitle}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.headingIcon} />
          Contact Me
        </h1>
        <p className={styles.pageSubtitle}>
          Have a question or want to work together? Feel free to reach out. The best way to contact me is through
          <a href="https://linkedin.com/in/evgeni-k-a5a734218" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
          or by using the form below.
        </p>

        {/* --- NETLIFY FORM SETUP --- */}
        {/* 'data-netlify="true"' enables Netlify's form handling. */}
        {/* The hidden input with name="form-name" tells Netlify the name of the form. */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.contactForm}
        >
          {/* This hidden input is REQUIRED for Netlify Forms to work with React */}
          <input type="hidden" name="form-name" value="contact" />

          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span className={styles.errorMsg}>{errors.message.message}</span>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default ContactPage;