"use client"

const Contact = () => {
    const handleContactForm = (event) => {
        event.preventDefault();
        alert("Form is not working right now")
    }
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-600 text-lg mb-8 text-center">
        Have any questions or suggestions? We'd love to hear from you!
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <form className="flex flex-col gap-4" onSubmit={handleContactForm}>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
