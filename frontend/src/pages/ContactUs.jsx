import { Mail, Phone, MapPin, Clock, MessagesSquare, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white mt-10 to-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to our team, and we&apos;ll be happy to assist you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Phone,
                title: 'Admissions',
                description: 'Contact our admissions office for queries about programs and enrollment.',
                contact: '+91 (080) 1234-5678',
                link: 'Call Admissions',
              },
              {
                icon: MessagesSquare,
                title: 'Support',
                description: '24/7 support for all academic and administrative assistance.',
                contact: 'support@sambhramit.edu',
                link: 'Open Support Ticket',
              },
              {
                icon: Mail,
                title: 'Press',
                description: 'For media inquiries and collaborations, reach out to our media team.',
                contact: 'press@sambhramit.edu',
                link: 'Email Press Team',
              },
            ].map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 mb-6">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <p className="mt-4 font-medium text-gray-900">{item.contact}</p>
                <a href="#" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  {item.link}
                  <Send className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea rows={4} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg px-4 py-3 font-semibold hover:from-indigo-700 hover:to-indigo-900 transition-colors">
                    Send message
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Office Location</h2>
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.631956081026!2d77.51143957475714!3d13.103158990784811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d966d245d1bb%3A0x8ef58f7b5d5d0f10!2sSambhram%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1697651234567!5m2!1sen!2sin"
                      className="w-full h-64 rounded-lg border-0"
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Sambhram Institute of Technology</h3>
                        <p className="text-gray-600">
                          M.S. Palya, Jalahalli East, Bangalore, Karnataka 560097, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM IST
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
