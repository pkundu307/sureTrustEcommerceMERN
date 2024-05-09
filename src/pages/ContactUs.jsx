import React from "react";
import Navbar from "../features/navbar/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom/dist";
import Footer from "../features/common/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };


  const [faq, setFaq] = useState([
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a refund.',
    },
    {
      question: 'Can I change my shipping address after placing the order?',
      answer: 'You may be able to change your shipping address before the order is processed. Contact customer support for assistance.',
    },
    {
      question: 'How do I place an order?',
      answer: 'You can place an order by adding items to your cart and proceeding to checkout.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, PayPal, and other secure payment methods.',
    },
    {
      question: 'Can I cancel my order?',
      answer: 'You can cancel your order before it is shipped. Contact customer support for assistance.',
    },
   
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping fees may apply.',
    },
    
    {
      question: 'Are my payment details secure?',
      answer: 'Yes, we use industry-standard encryption to secure your payment information.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location and the shipping method chosen. You can check estimated delivery times during checkout.',
    },
    {
      question: 'Do you offer express shipping?',
      answer: 'Yes, we offer express shipping options for faster delivery.',
    },
    {
      question: 'Can I change my shipping address after placing the order?',
      answer: 'You may be able to change your shipping address before the order is processed. Contact customer support for assistance.',
    },
    {
      question: 'What should I do if my order is damaged upon arrival?',
      answer: 'Contact our customer support team immediately with details and photos of the damage. We will assist you with a replacement or refund.',
    },
    {
      question: 'Do you offer gift wrapping services?',
      answer: 'Yes, we offer gift wrapping services for a small additional fee.',
    },
    {
      question: 'Can I add items to an existing order?',
      answer: 'Unfortunately, we cannot add items to an order once it has been placed. You will need to create a new order for additional items.',
    },
    {
      question: 'What happens if an item is out of stock?',
      answer: 'If an item is out of stock, you will be notified during checkout. You can choose to wait for the item to be restocked or remove it from your order.',
    },
    {
      question: 'Do you offer discounts for bulk orders?',
      answer: 'Yes, we offer discounts for bulk orders. Contact our sales team for more information.',
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take privacy and data security seriously. Your personal information is protected according to industry standards.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team via email, phone, or live chat on our website.',
    },
    {
      question: 'What should I do if I forget my password?',
      answer: 'You can reset your password using the "Forgot Password" link on the login page. Follow the instructions sent to your registered email.',
    },
    {
      question: 'Do you have a loyalty program?',
      answer: 'Yes, we have a loyalty program where you can earn rewards points for purchases and redeem them for discounts or freebies.',
    },
    {
      question: 'Can I change or cancel my order after it has been placed?',
      answer: 'Once an order is placed, changes or cancellations may not be possible. Contact customer support immediately for assistance.',
    },
  ]);

  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="bg-white-500 w-full">
      <div>
        <Navbar />
      </div>
      
      <div className="max-w-7xl mx-auto sm:w-10/12">
        <h1 className="text-3xl font-bold mb-4">TrendCart Help Center | 24x7 Customer Care Support</h1>
        <p className="text-lg text-black-700 mb-6">
          The TrendCart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The TrendCart Help Centre also lists out more information that you may need regarding TrendCart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the TrendCart Help Centre number or even access TrendCart Help Centre support if you need professional help regarding various topics.
        </p>
      </div>

      <div className="flex  mt-12 sm:flex-col md:flex-col lg:flex-row-reverse">

        {/* contact us form */}
      <div className="flex flex-col mx-auto mt-10 p-8 m-8 bg-gray-600 rounded-lg  h-1/2 sm:w-5/6 lg:w-2/5  "> 
        
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label htmlFor="fullName" className="block text-white text-2xl">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-2xl text-white">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white text-2xl">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="block w-full px-4 py-2 mt-1 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            ></textarea>
          </div>
          <Link to='/'>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-2 px-4 mt-4 font-bold ml-auto text-2xl"
          >
            Submit
          </button></Link>
        </form>
      </div>

        {/* frequently asked questions */}
      <div className="flex flex-col bg-white py-12 m-auto lg:w-3/5 sm:w-5/6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 sm:w-10/12 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900"><pre>Frequently Asked Questions                             </pre></h2>
          <dl className="mt-6 space-y-8  h-96 overflow-auto ...">
          {faq.map((item, index) => (
              <div key={index} className="border rounded-lg p-2 text-semibold text-xl  text-black">
                <button className="flex justify-between w-full mb-2" onClick={() => setFaqOpen(index)}>
                  <span className="font-semibold">{item.question}</span>
                  <span >{faqOpen === index ? " " : "﹀"}</span>
                  
                </button>
                {faqOpen === index && <p className="text-xl">{item.answer}</p>}
              </div>
            ))}
          </dl>
        </div>
      </div>

      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
