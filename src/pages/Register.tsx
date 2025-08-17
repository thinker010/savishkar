import React, { useState } from "react";
import "../register-autofill-fix.css";

const initialForm = {
  delegateName: "",
  email: "",
  phone: "",
  whatsapp: "",
  designation: "",
  youAre: "",
  institution: "",
  pranth: "",
  education: ""
};

const Register: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add backend logic here if needed
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background (copied from Hero) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyber-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-tech-orange/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      <div className="w-full max-w-lg bg-card p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Register for Savishkar</h2>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold">Thank you for registering!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="delegateName">Name of the Delegate<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="delegateName"
                name="delegateName"
                value={form.delegateName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">E-mail address<span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="phone">Phone/Contact number<span className="text-red-500">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="whatsapp">WhatsApp number<span className="text-red-500">*</span></label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="designation">Designation in Savishkar<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">You are<span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-4">
                {['Vidhyarthi', 'Vidhyarthini', 'Professor Male', 'Professor Female', 'Other'].map(option => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="youAre"
                      value={option}
                      checked={form.youAre === option}
                      onChange={handleChange}
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="institution">Institution<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={form.institution}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="pranth">Pranth<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="pranth"
                name="pranth"
                value={form.pranth}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="education">Education<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="education"
                name="education"
                value={form.education}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-tech-orange text-foreground bg-background placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-tech-orange text-white font-semibold rounded hover:bg-orange-600 transition-colors"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
