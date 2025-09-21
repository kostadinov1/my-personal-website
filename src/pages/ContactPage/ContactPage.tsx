import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './ContactPage.module.css';
import { AnimatedSection } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactPage: React.FC = () => {
  // Add reset to the useForm hook
  const {
    register,
    handleSubmit,
    reset, // <-- Get the reset function
    formState: { errors, isSubmitting }, // <-- Track submitting state
  } = useForm<FormInputs>();

  // State to hold submission status (for success/error messages)
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  // Helper function to encode the form data for Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setSubmissionStatus(null); // Reset status on new submission

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', // This must match the form's name attribute
        ...data,
      }),
    })
      .then(() => {
        setSubmissionStatus('success');
        reset(); // Clear the form fields on success
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setSubmissionStatus('error');
      });
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

        {/* The form tag itself does not need the onSubmit anymore, react-hook-form handles it */}
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.contactForm}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ display: 'none' }}>
            <label>
              Don’t fill this out if you’re human: <input {...register('bot-field' as any)} />
            </label>
          </div>

          {/* ... Your form groups for name, email, message ... */}

          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" {...register('name', { required: 'Name is required' })} disabled={isSubmitting} />
            {errors.name && <span className={styles.errorMsg}>{errors.name.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })} disabled={isSubmitting} />
            {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} {...register('message', { required: 'Message is required' })} disabled={isSubmitting} />
            {errors.message && <span className={styles.errorMsg}>{errors.message.message}</span>}
          </div>


          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* --- NOTIFICATION MESSAGES --- */}
        {submissionStatus === 'success' && (
          <div className={`${styles.notification} ${styles.success}`}>
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submissionStatus === 'error' && (
          <div className={`${styles.notification} ${styles.error}`}>
            Sorry, there was an error sending your message. Please try again later.
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default ContactPage;