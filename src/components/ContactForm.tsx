import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) return;
    if (name.length > 100 || email.length > 255 || message.length > 2000) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return;

    setStatus("sending");

    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, message });

    if (error) {
      setStatus("error");
    } else {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 max-w-[520px]"
      >
        <p className="text-foreground text-lg md:text-xl tracking-tight">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      onSubmit={handleSubmit}
      className="mt-16 max-w-[520px] space-y-6"
    >
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm text-muted-foreground tracking-tight">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          maxLength={100}
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
          className="w-full bg-transparent border-b border-border text-foreground text-base md:text-lg tracking-tight py-2 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm text-muted-foreground tracking-tight">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          maxLength={255}
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          className="w-full bg-transparent border-b border-border text-foreground text-base md:text-lg tracking-tight py-2 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm text-muted-foreground tracking-tight">
          Message
        </label>
        <textarea
          id="message"
          required
          maxLength={2000}
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className="w-full bg-transparent border-b border-border text-foreground text-base md:text-lg tracking-tight py-2 outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/40"
          placeholder="What's on your mind?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="text-foreground text-base md:text-lg tracking-tight hover:opacity-70 transition-opacity disabled:opacity-40 pt-2"
      >
        {status === "sending" ? "Sending..." : status === "error" ? "Try again →" : "Send message →"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
