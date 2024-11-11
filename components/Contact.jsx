import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Thank you for your message! I’ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Oops! Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}

      <div className="mt-10 text-center">
        <p className="text-gray-700  text-xl font-patrick">Or reach out directly at:</p>
        <p className="font-semibold font-patrick text-blue-500">junekrotich@gmail.com</p>
        <p className="font-semibold font-patrick text-blue-500">+254 745 383 037</p>
      </div>
    </div>
  );
};

export default ContactSection;
