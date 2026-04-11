import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, Loader2, FileDown } from 'lucide-react';

const ContactPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init("5CeEUpjtNqCukVktt");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
  'service_5yjoelj',
  'template_bqnhw1d',
  formData, 
  '5CeEUpjtNqCukVktt'
)
    .then(() => {
        setSubmitted(true);
        setIsSending(false);
    }, (error) => {
        console.error("FAILED...", error);
        alert(`Failed: ${error.text}. Check console for details.`);
        setIsSending(false);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Side: Refined with Brand Colors */}
        <div className="bg-slate-900 w-full md:w-2/5 p-10 lg:p-14 text-white flex flex-col justify-between">
          <div>
            {/* Heading updated to match About/Projects style */}
            <h2 className="text-4xl font-serif font-bold mb-2">Let's Connect</h2>
            <div className="w-12 h-[2px] bg-[#45b69c] mb-8" /> 
            
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              Interested in my work? Feel free to reach out or download my resume below.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-[#45b69c]/10 rounded-2xl text-[#45b69c] group-hover:bg-[#45b69c] group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email</p>
                  <p className="font-medium text-slate-200">varshachowdhury4@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-[#45b69c]/10 rounded-2xl text-[#45b69c] group-hover:bg-[#45b69c] group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Location</p>
                  <p className="font-medium text-slate-200">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials & CV with Brand Green */}
          <div className="mt-16 space-y-6">
            <a 
              href="/RESUME.pdf" 
              download="VARSHA.pdf"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#45b69c] hover:bg-[#3ca189] text-white rounded-2xl font-bold transition-all shadow-lg shadow-[#45b69c]/20 hover:scale-[1.02]"
            >
              <FileDown size={22} />
              Download Resume
            </a>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/varshachowdhurrry/" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-2xl hover:bg-[#45b69c] transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/VARSHAher/" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-2xl hover:bg-[#45b69c] transition-all duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Form */}
        <div className="w-full md:w-3/5 p-10 lg:p-14 bg-white">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="bg-green-50 p-6 rounded-full mb-6">
                <CheckCircle size={64} className="text-[#45b69c] animate-pulse" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Message Sent!</h2>
              <p className="text-gray-500 mt-3 text-lg">Thanks for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="mt-8 px-8 py-3 border-2 border-[#45b69c] text-[#45b69c] font-bold rounded-xl hover:bg-[#45b69c] hover:text-white transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="relative">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-[#45b69c] outline-none transition-all text-gray-800 font-medium"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="relative">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-[#45b69c] outline-none transition-all text-gray-800 font-medium"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="relative">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-[#45b69c] outline-none transition-all text-gray-800 font-medium resize-none"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gray-900 text-white font-bold py-5 rounded-2xl hover:bg-[#45b69c] shadow-xl hover:shadow-[#45b69c]/20 transition-all flex items-center justify-center gap-3 disabled:bg-gray-400 group"
              >
                {isSending ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending...</>
                ) : (
                  <>
                    <span className="text-lg">Send Message</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;