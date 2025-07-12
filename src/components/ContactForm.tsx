import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_mrivqjc',
        'template_i3tu6nc',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '2XJwRs-YoX-kiO7kI'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink focus:ring-1 focus:ring-nebulaPink outline-none transition-colors"
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink focus:ring-1 focus:ring-nebulaPink outline-none transition-colors"
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink focus:ring-1 focus:ring-nebulaPink outline-none transition-colors"
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink focus:ring-1 focus:ring-nebulaPink outline-none transition-colors"
          required
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-nebulaPink to-cosmicBlue text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </button>
      <Toaster position="bottom-center" />
    </form>
  );
};

export default ContactForm;
