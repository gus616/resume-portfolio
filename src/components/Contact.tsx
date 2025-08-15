import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Message sent!");
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-pink-500 mb-6">Contact Me</h2>
      <form onSubmit={submitForm} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-3 rounded bg-dark border-2 border-primary text-pink-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-3 rounded bg-dark border-2 border-primary text-pink-500"
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="p-3 rounded bg-dark border-2 border-primary text-pink-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black cyan-text glitch text-dark font-bold rounded-lg shadow-lg hover:opacity-90 cursor-pointer"
        >
          Send
        </button>
      </form>
    </section>
  );
}
