import React, { useState } from "react";

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    service: "",
    details: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    paymentOption: "payNow",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    { id: "bms", name: "Business Management Systems", price: 49900 },
    { id: "crm", name: "Customer Relationship Management", price: 39900 },
    { id: "sms", name: "SMS Marketing", price: 29900 },
    { id: "api", name: "Data Provisioning APIs", price: 59900 },
    { id: "custom", name: "Custom Software Development", price: 99900 },
    { id: "pos", name: "Modern Point-of-Sale Systems", price: 49900 },
    { id: "other", name: "Other", price: 0 },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      if (formData.paymentOption === "payNow") {
        window.location.href = "https://paystack.com/pay/abetaq5oov";
        return;
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedServicePrice = () => {
    const selected = services.find((s) => s.id === formData.service);
    return selected ? selected.price / 100 : 0;
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Request Submitted Successfully!
        </h2>
        <p className="text-gray-700 mb-6">
          {formData.paymentOption === "payNow"
            ? "Your payment was processed successfully. Our team will be in touch with you shortly."
            : "We've received your service request. Our team will be in touch shortly."}
        </p>
        <p className="text-gray-600 mb-8">
          A confirmation email has been sent to {formData.email}
        </p>
        <div className="flex justify-center gap-4">
          <a href="/" className="btn-primary">
            Return Home
          </a>
          <button
            onClick={() => setIsSuccess(false)}
            className="btn-secondary"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {/* Service Select */}
      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Select Service *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
  <option key={service.id} value={service.id}>
    {service.name} {service.price > 0 ? `(Starting from GHC ${service.price / 100})` : ""}
  </option>
))}

        </select>
      </div>

      {/* Details */}
      <div className="mb-6">
        <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
          Tell us more about what you need
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="Describe your requirements..."
          className="input-field"
        />
      </div>

      {/* Name, Email, Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Business Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="+233 55 000 0000"
        />
      </div>

      {/* Company */}
      <div className="mb-8">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      {/* Payment Option */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Payment Option
        </label>
        <div className="flex flex-col md:flex-row gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentOption"
              value="payNow"
              checked={formData.paymentOption === "payNow"}
              onChange={handleChange}
              className="h-4 w-4 text-radiiant-navy focus:ring-radiiant-navy border-gray-300"
            />
            <span className="ml-2 text-sm">Pay Now (Paystack)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentOption"
              value="payLater"
              checked={formData.paymentOption === "payLater"}
              onChange={handleChange}
              className="h-4 w-4 text-radiiant-navy focus:ring-radiiant-navy border-gray-300"
            />
            <span className="ml-2 text-sm">Pay Later (Contact Me First)</span>
          </label>
        </div>
      </div>

      {/* Price Summary */}
      {formData.service && formData.paymentOption === "payNow" && (
        <div className="mb-8 p-4 border border-gray-200 rounded-md bg-gray-50">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Selected Service:</span>
            <span className="font-bold text-radiiant-navy">
              {services.find((s) => s.id === formData.service)?.name}
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-medium text-gray-700">Amount:</span>
            <span className="font-bold text-radiiant-navy">
              ${getSelectedServicePrice().toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-radiiant-navy text-white px-6 py-3 rounded-md font-medium
          hover:bg-opacity-90 transition-all duration-300 flex justify-center items-center
          ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : formData.paymentOption === "payNow" ? (
          "Pay & Submit Request"
        ) : (
          "Submit Request"
        )}
      </button>
    </form>
  );
};

export default RequestForm;
