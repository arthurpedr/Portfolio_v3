import Carousel from "../../components/Carousel.jsx";
function Servicos() {

  const carouselItems = [
    "./html.svg",
    "./css.svg",
    "./js.svg",
    "./react.svg",
    "./tailwind.svg",
    "./c.svg",
    "./figma.svg",
    "./html.svg",
    "./css.svg",
    "./js.svg",
    "./react.svg",
    "./tailwind.svg",
    "./c.svg",
    "./figma.svg",
  ];

  return (
    <section
      id="Serviços"
      className="flex w-full min-h-screen mx-auto justify-center items-center text-white"
    >
      <div className=" flex flex-col items-center justify-center gap-40 max-w-[1280px] w-full overflow-hidden">
        <p className="text-[40px] md:text-[80px] font-bold">Serviços</p>
        <div className="motion">
          
          {/* Carrossel para Direita */}
          <section className="mb-10">
            <Carousel
              direction="right"
              items={carouselItems}
              className="mb-8"
            />
          </section>

          {/* Carrossel para Esquerda */}

          <section className="mb-10">
            <Carousel direction="left"
             items={carouselItems} />
          </section>
        </div>
      </div>
    </section>
  );
}
export default Servicos;
