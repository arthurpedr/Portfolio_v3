function Home() {
  const abrirLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="Home"
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-6 py-10 mx-auto text-white"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-[1280px] w-full">
        {/* Texto */}
        <div className="flex flex-col items-center lg:items-start gap-6 max-w-lg text-center lg:text-left">
          <p className="text-3xl md:text-7xl font-semibold">
            Hello, I’m{" "}
            <span className="font-bold drop-shadow-[0_0_40px_#FFFFFF]">
              Pedro Arthur
            </span>
          </p>
          <p className="text-xl md:text-3xl font-semibold text-gray-100">
            Desenvolvedor Front-End
          </p>
          {/* Botão CV */}
          <a
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 hover:shadow-lg shadow-[#3B82F6]/90 rounded-[8px] text-lg font-medium transition-all duration-300"
            href="/Currículo.pdf"
            download="Currículo.pdf"
          >
            Download CV
          </a>
          {/* Ícones */}
          <div className="flex gap-4 mt-4">
            <button onClick={() => abrirLink("https://github.com/arthurpedr")}>
              <img
                className="w-10 cursor-pointer text-gray-200 bg-[#2563EB] drop-shadow-[0_0_40px_#3B82F6] rounded-full p-1"
                src="./branco-github.svg"
                alt="github"
              />
            </button>
            <button
              onClick={() =>
                abrirLink("https://www.instagram.com/pedro_marrtins/")
              }
            >
              <img
                className="w-10 cursor-pointer bg-[#2563EB] drop-shadow-[0_0_40px_#3B82F6]  rounded-full p-1"
                src="./branco-instagram.svg"
                alt="instagram"
              />
            </button>
          </div>
        </div>
        {/* Imagem */}
        <div className="relative flex-shrink-0">
          <img
            className="rounded-full w-60 h-60 lg:w-120 lg:h-120 object-cover shadow-lg shadow-[#3B82F6]/90"
            style={{
              animation: "slideUpDown 2s ease-in-out infinite",
            }}
            src="/pedro-02.png"
            alt="Foto do desenvolvedor Pedro Arthur"
          />
          <style>
            {`
          @keyframes slideUpDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
          </style>

          {/*Claridadee da imagem*/}
          <div
            className="absolute inset-0 bg-black/10 rounded-full"
            style={{
              animation: "slideUpDown 2s ease-in-out infinite",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
