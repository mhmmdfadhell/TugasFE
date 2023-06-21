import React from "react";
import DashboardLayout from "../../components/template/DashboardLayout";
import About from "../../components/organism/AboutUs";
import Service from "../../components/organism/Service";
import Client from "../../components/organism/Client";

const App = () => {
  const images = [
    {
      id: 1,
      src: "/images/about-mission.jpg",
      title: "Our Mission",
      desc: "Our mission (How) is to provides well designed, successfully implemented and reliably supported ICT solutions to increase customers business performance.",
      row: "flex-row",
    },
    {
      id: 2,
      src: "/images/about-plan.jpg",
      title: "Our Solution",
      desc: "From App development, CI/CD testing, UI/UX Improvement until Manage services, from Bank Core App until Military Mission Critical Management System, from smartphone screen until video wall display, we are ready to roll! ",
      row: "flex-row",
    },
    {
      id: 3,
      src: "/images/about-vision.jpg",
      title: "Our Vision",
      desc: "Our vision (Why) is to be a world class System Integrator that operates regionally with superior performance.",
      row: "flex-row",
    },
  ];
  return (
    <div>
      <DashboardLayout
        title="START WITH DREAM RUN WITH PASSION"
        desc="Aigen was founded by college friends who have the same passion in IT and Telecommunication. We are dream to be one of IT enabler that can provide not just solution but an ever-evolving solution by enriching the man instead the product. Thus, provide you with holistic and realiable solution."
      >
        <div className="flex flex-col w-full">
          <About />
          <div className="flex">
            {images.map((content) => (
              <DashboardLayout.Body
                key={content.id}
                row={content.row}
                src={content.src}
                title={content.title}
                desc={content.desc}
              />
            ))}
          </div>
          <Service />
          <Client />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default App;
