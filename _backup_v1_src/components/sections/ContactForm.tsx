"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Smile, Mail, Phone, BookOpen, MessageSquare, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle2 size={64} color="#1565C0" strokeWidth={1.5} style={{ display: "block", margin: "0 auto 20px" }} />
        <h4 className="alt-font text-dark-gray mb-10px">Enquiry Sent!</h4>
        <p className="w-60 mx-auto md-w-100">Thank you for reaching out. Our team will review your enquiry and respond as soon as possible.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn btn-small btn-double-border btn-border-base-color mt-20px"
        >
          <span><span className="btn-double-text" data-text="Send another enquiry">Send another enquiry</span></span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form-style-03" noValidate>
      <div className="row">
        <div className="col-md-6">
          <label className="form-label fs-13 ls-1px text-uppercase text-dark-gray fw-500 mb-0">Your name *</label>
          <div className="position-relative form-group mb-25px">
            <span className="form-icon"><Smile size={16} strokeWidth={1.5} /></span>
            <input
              {...register("name")}
              type="text"
              placeholder="What's your good name?"
              className="fs-17 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
            />
            {errors.name && <span className="fs-13 text-base-color d-block mt-5px">{errors.name.message}</span>}
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label fs-13 ls-1px text-uppercase text-dark-gray fw-500 mb-0">Your email address *</label>
          <div className="position-relative form-group mb-25px">
            <span className="form-icon"><Mail size={16} strokeWidth={1.5} /></span>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="fs-17 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
            />
            {errors.email && <span className="fs-13 text-base-color d-block mt-5px">{errors.email.message}</span>}
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label fs-13 ls-1px text-uppercase text-dark-gray fw-500 mb-0">Your phone number</label>
          <div className="position-relative form-group mb-25px">
            <span className="form-icon"><Phone size={16} strokeWidth={1.5} /></span>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="fs-17 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
            />
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label fs-13 ls-1px text-uppercase text-dark-gray fw-500 mb-0">Your subject</label>
          <div className="position-relative form-group mb-25px">
            <span className="form-icon"><BookOpen size={16} strokeWidth={1.5} /></span>
            <select
              {...register("subject")}
              className="fs-17 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
            >
              <option value="">How can we help you?</option>
              <option value="Protective Coating Enquiry">Protective Coating Enquiry</option>
              <option value="Industrial Coating Enquiry">Industrial Coating Enquiry</option>
              <option value="Floor Coating Enquiry">Floor Coating Enquiry</option>
              <option value="Fireproofing Enquiry">Fireproofing Enquiry</option>
              <option value="Industrial Refurbishment">Industrial Refurbishment</option>
              <option value="Project Quotation">Project Quotation</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
        </div>
        <div className="col-12 mb-35px">
          <label className="form-label fs-13 ls-1px text-uppercase text-dark-gray fw-500 mb-0">Your message *</label>
          <div className="position-relative form-group form-textarea mb-0">
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Describe your project, surface type, location and any specific requirements..."
              className="fs-17 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
            />
            <span className="form-icon"><MessageSquare size={16} strokeWidth={1.5} /></span>
          </div>
          {errors.message && <span className="fs-13 text-base-color d-block mt-5px">{errors.message.message}</span>}
        </div>
        {error && (
          <div className="col-12 mb-20px">
            <p className="fs-15 text-base-color">{error}</p>
          </div>
        )}
        <div className="col-md-8 sm-mb-30px text-center text-md-start">
          <p className="mb-0 fs-15 lh-26 w-80 md-w-85 sm-w-100">We are committed to protecting your privacy. We will never collect information about you without your explicit consent.</p>
        </div>
        <div className="col-md-4 text-center text-md-end">
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-small btn-double-border btn-border-base-color left-icon"
          >
            <span>
              <span><Send size={14} strokeWidth={1.5} style={{ display: "inline", verticalAlign: "middle" }} /></span>
              <span className="btn-double-text" data-text="Send message">
                {submitting ? "Sending..." : "Send message"}
              </span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
