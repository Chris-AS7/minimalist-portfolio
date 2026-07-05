import React, { useState } from 'react';
import Title from './Title';
import { supabase } from '../supabase';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Supabase Error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-black drop-shadow-md hover:bg-black/60 transition-all"
          >
            {status === 'sending' ? 'Sending...' : 'Contact Me 💬'}
          </button>

          {status === 'success' && (
            <p className="mt-2 text-green-500">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-2 text-red-500">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;