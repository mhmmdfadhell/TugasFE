import React from "react";

export default function About() {
  const services = [
    {
      icon: "/images/eye.png",
      title: "Ideation",
      description:
        "To analyze the requirement through in-depth research and fruitful group discussions",
    },
    {
      icon: "/images/asterisk.png",
      title: "Prototyping",
      description:
        "To sketch the design according to the requirements and conduct feasibility testing",
    },
    {
      icon: "/images/paint-brush.png",
      title: "Design",
      description:
        "After completing feasibility test, a final design is prepared to be developed",
    },
    {
      icon: "/images/settings.png",
      title: "Develop",
      description:
        "Now, our the development team starts developing the solution according to design",
    },
    {
      icon: "/images/high.png",
      title: "Test",
      description:
        "In testing phase, we test every component to make sure that our solution meets the requirement",
    },
    {
      icon: "/images/team.png",
      title: "Celebrate",
      description:
        "We make delivery for the solution and assist our clients to control and administer solution.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold mb-4">Service</h1>
      <p className="text-center">Build The Best IT Product and Services</p>

      <div className="grid grid-cols-3 gap-4 mt-8 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 bg-white rounded shadow"
          >
            <img src={service.icon} />
            <h3 className="text-lg font-bold mt-4">{service.title}</h3>
            <p className="items-start">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
