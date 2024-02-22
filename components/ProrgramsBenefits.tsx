import React from "react";

const ProrgramsBenefits = () => {
  const programs = [
    {
      key: 0,
      heading: "Innovation Fellowships",
      content:
        "Provide funding and mentorship to promising young innovators working on projects relevant to Malaysia's national priorities.",
    },
    {
      key: 1,
      heading: "Entrepreneurship Boot Camps",
      content:
        "Equip participants with the necessary skills and knowledge to launch and grow successful businesses in Malaysia.",
    },
    {
      key: 2,
      heading: "Industry Immersion Programs",
      content:
        "Connect innovators with leading Malaysian companies for collaborative research and development projects.",
    },
    {
      key: 3,
      heading: "Mentorship Network",
      content:
        "Match young innovators with experienced mentors who can provide guidance and support throughout their entrepreneurial journey.",
    },
    {
      key: 4,
      heading: "Access to Resources",
      content:
        "Facilitate access to funding, infrastructure, and other resources essential for developing and commercializing innovations.",
    },
    {
      key: 5,
      heading: "University Collaboration Program",
      content:
        "Establish partnerships with prestigious U.S. universities to organize workshops and seminars on cutting-edge technologies relevant to Malaysia's development.",
    },
  ];
  const benefits = [
    {
      key: 0,
      heading: "Global Recognition",
      content:
        "Showcase Malaysia's talent and innovation potential on the international stage, attracting further investment and partnerships.",
    },
    {
      key: 0,
      heading: "Economic Growth",
      content:
        "Drive the creation of new businesses, jobs, and industries, contributing significantly to Malaysia's GDP.",
    },
    {
      key: 0,
      heading: "Technological Advancement",
      content:
        "Bridge the technology gap by leveraging cutting-edge knowledge and expertise from U.S. universities.",
    },
    {
      key: 0,
      heading: "Talent Repatriation",
      content:
        "Encourage skilled Malaysians to return and contribute their expertise, enriching the local talent pool.",
    },
    {
      key: 0,
      heading: "National Pride",
      content:
        " Inspire the next generation of innovators and entrepreneurs, fostering a culture of creativity and ambition.",
    },
    {
      key: 0,
      heading: "Sustainable Talent Pipeline",
      content:
        "Attract and retain top talent by providing continuous learning and development opportunities through university partnerships.",
    },
  ];

  return (
    <div className="py-20">
      <h1>Programs</h1>
      <div className="flex gap-x-11 gap-y-9 flex-wrap pt-10">
        {programs.map(({ key, heading, content }) => (
          <div
            key={key}
            className="flex flex-col bg-[#D9D9D9] rounded-xl px-10 py-14 w-[450px] aspect-square justify-between"
          >
            <p className="text-2xl font-normal text-center">{heading}</p>
            <p className="text-lg font-normal text-center">{content}</p>
          </div>
        ))}
      </div>

      <h1 className="pt-40">Benefits for Malaysia</h1>
      <div className="flex gap-x-11 gap-y-9 flex-wrap pt-10 pb-20">
        {benefits.map(({ key, heading, content }) => (
          <div
            key={key}
            className="flex flex-col bg-[#D9D9D9] rounded-xl px-10 py-14 w-[450px] aspect-square justify-between"
          >
            <p className="text-2xl font-normal text-center">{heading}</p>
            <p className="text-lg font-normal text-center">{content}</p>
          </div>
        ))}
      </div>

      <h1 className="pt-20">
        Call to Action: <br></br>
        Making Malaysia a global hub for innovation
      </h1>
      <p className="pt-8 text-2xl font-normal">
        We urge the Malaysian government to recognize the immense potential of
        its diaspora and actively support the establishment of the Malaysian
        Diaspora Innovation Centre. By assigning dedicated ministries and
        government agencies to render support, providing financial grants, and
        facilitating deployment and marketing of these innovations, we can
        unlock a treasure trove of talent and propel Malaysia towards a
        brighter, more innovative future. Let us join hands and harness the
        ingenuity of our young minds, making Malaysia a global leader in
        innovation and a source of national pride.
      </p>
    </div>
  );
};

export default ProrgramsBenefits;
