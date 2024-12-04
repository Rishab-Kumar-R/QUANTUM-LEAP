import { Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import profile from "../Assets/profilepic.jpg";

const AboutUs = () => {
  const stats = [
    { label: "Years in Business", value: "0+", id: "years" },
    { label: "Team Members", value: "04", id: "team" },
    { label: "Countries", value: "01+", id: "countries" },
    { label: "Happy Clients", value: "50+", id: "clients" },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible with AI technology, constantly innovating to deliver cutting- edge solutions.",
      id: "innovation",
    },
    {
      icon: Users,
      title: "Customer Success",
      description:
        "Your success is our success. We're committed to providing exceptional support and ensuring your goals are met.",
      id: "customer",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from code quality to customer service.",
      id: "excellence",
    },
  ];

  const team = [
    {
      name: "Ranjan Kumar Verma",
      role: "Frontend Developer",
      image: profile,
      id: "ranjan",
    },
    {
      name: "R. Sai Kiran Reddy",
      role: "ML Model Developer",
      image: profile,
      id: "sai",
    },
    {
      name: "Rishab Kumar R",
      role: "Backend Developer",
      image: profile,
      id: "rishab",
    },
    {
      name: "SR Sharath Kumar",
      role: "React Developer",
      image: profile,
      id: "sharath",
    },
  ];

  return (
    <main className="bg-gradient-to-b mt-10 from-white to-gray-50 min-h-screen">
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <section aria-labelledby="mission-heading">
            <h1
              id="mission-heading"
              className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 sm:text-6xl text-center"
            >
              Our Mission
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto text-center">
              We&apos;re on a mission to revolutionize visual AI technology and
              make it accessible to businesses of all sizes. Our innovative
              solutions help companies unlock the full potential of their visual
              data.
            </p>
          </section>

          {/* Stats Section */}
          <section aria-labelledby="stats-heading" className="mt-16">
            <h2 id="stats-heading" className="sr-only">
              Company Statistics
            </h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div
                    className="text-4xl font-bold text-indigo-600"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section aria-labelledby="values-heading" className="mt-24">
            <h2
              id="values-heading"
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Our Values
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value) => (
                <Card
                  key={value.id}
                  className="hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 mb-6">
                      <value.icon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section aria-labelledby="team-heading" className="mt-24">
            <h2
              id="team-heading"
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.id} className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
                    src={member.image}
                    alt=""
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
