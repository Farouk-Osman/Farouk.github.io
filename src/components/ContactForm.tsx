import React, { useState } from 'react';
import { Send } from 'lucide-react';
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
      const res = await fetch('https://formspree.io/f/mblkqkby', { // ضع اللينك بتاعك هنا
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-deepSpace/50 border border-starWhite/10 focus:border-nebulaPink"
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-nebulaPink to-cosmicBlue text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="w-5 h-5" />
      </button>
      <Toaster position="bottom-center" />
    </form>
  );
};

export default ContactForm;
