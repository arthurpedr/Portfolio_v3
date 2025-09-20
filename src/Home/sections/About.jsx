import Timeline from "../../components/Timeline.jsx";

function About() {
  const timelineData = [
    {
      date: "10/12/2022",
      title: "Ensino Médio",
      description:
        "Colégio E.E.P Balbina viana arrais - Técnico em Edificações",
    },
    {
      date: "28/11/2023",
      title: "Ensino Superior",
      description:
        "UFERSA Universidade Federal Rural do Semi-Árido - Interdisciplinar em Ciência e Tecnólogia.",
    },
    {
      date: "01/02/2024",
      title: "Desenvolvimento",
      description:
        "Aplicação de conhecimentos em HTML e CSS.",
    },
  ];

  return (
    <section
      id="About"
      className="flex flex-col w-full min-h-screen mx-auto justify-center items-center text-white"
    >
      <p className="text-[40px] md:text-[80px] font-bold drop-shadow-[0_0_40px_#FFFFFF]">About</p>
      <div className=" flex flex-col items-center justify-center gap-40 max-w-[1280px] w-full overflow-hidden py-[120px]">
        <div className="max-w-xl mx-auto p-6">
          <Timeline items={timelineData} />
        </div>
      </div>
    </section>
  );
}
export default About;
