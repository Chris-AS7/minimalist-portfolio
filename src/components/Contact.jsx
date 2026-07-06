import React, { useState } from 'react';
import Title from './Title';
import { supabase } from './supabase.js';

function Contact() {
  const [status, setStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    const { name, email, message } = Object.fromEntries(formData.entries());

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

      if (error) throw error;

      setStatus('Message sent successfully!');
      e.target.reset();
    } catch (err) {
      console.error('Supabase error:', err.message);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />

          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-black drop-shadow-md hover:bg-black/60 transition-all"
          >
            Contact Me 💬
          </button>

          {status && <p className="mt-2 text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;