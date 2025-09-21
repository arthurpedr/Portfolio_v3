import Timeline from "../../components/Timeline.jsx";
import ScrollTopButton from "../../components/ScrollTopButton.jsx";

function About() {
  const timelineData = [
    {
      title: "Curso de HTML e CSS",
      description: "Módulo 01",
      images: [
        { src: "Digitaçao.png", alt: "Descrição da imagem 1" },
      ],
    },
    {
      title: "Curso de HTML e CSS",
      description: "Módulo 02",
      images: [
        { src: "Digitaçao.png", alt: "Descrição da imagem 1" },
      ],
    },
    {
      title: "Curso de Digitação",
      description: "Módulo Iniciante",
      images: [
        { src: "Digitaçao.png", alt: "Descrição da imagem 1" },
      ],
    },
    {
      title: "Curso de Digitação",
      description: "Módulo Iniciante",
      images: [
        { src: "Digitaçao.png", alt: "Descrição da imagem 1" },
      ],
    },
  ];

  return (
    <section
      id="About"
      className="flex flex-col w-full mx-auto justify-center items-center text-white"
    >
      <p className="text-[40px] md:text-[80px] font-bold drop-shadow-[0_0_40px_#FFFFFF]">
        About
      </p>
      <div className=" flex flex-col items-center justify-center gap-40 max-w-[1280px] w-full py-10">
        <div className="w-[90vw] md:w-full">
          <Timeline items={timelineData} />
        </div>
      </div>
      <ScrollTopButton />
    </section>
  );
}
export default About;
