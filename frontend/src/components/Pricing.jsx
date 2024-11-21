import { Check, Zap, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "Perfect for trying out our services",
      features: [
        "10 image queries per month",
        "Basic image recognition",
        "Standard response time",
        "Basic API access"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      title: "Starter",
      price: "$29",
      period: "/month",
      description: "For professionals and growing businesses",
      features: [
        "1,000 image queries per month",
        "Advanced image recognition",
        "Email & chat support",
        "Full API access",
        "Custom integrations"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      title: "Professional",
      price: "Contact Us",
      description: "For large-scale enterprise needs",
      features: [
        "Unlimited image queries",
        "Enterprise-grade recognition",
        "24/7 dedicated support",
        "Advanced security features",
        "Custom AI model training",
        "Premium analytics"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-800 sm:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start with our free tier and scale as you grow. No hidden fees, no surprises - just powerful AI capabilities at your fingertips.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:gap-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 
                hover:transform hover:-translate-y-3 hover:shadow-xl border border-gray-100
                ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 px-3 py-1 text-sm font-semibold text-white">
                    <Star className="h-4 w-4" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-gray-600">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2
                  ${plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-800 text-white hover:from-indigo-700 hover:to-indigo-900'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
              >
                {plan.buttonText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Trusted by hundreds of businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { text: 'Enterprise-grade security' },
              { text: '99.9% uptime SLA' },
              { text: '24/7 monitoring' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-700">
                <Zap className="h-5 w-5 text-indigo-600" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;