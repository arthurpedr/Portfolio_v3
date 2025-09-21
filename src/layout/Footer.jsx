function Footer() {
  const abrirLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full h-[400px] flex justify-center items-center">
      <div className="py-12 flex flex-col items-center gap-8 text-white">
        <div>
          <nav className="flex items-center font-semibold md:text-[20px]">
            <ul className="flex items-center gap-10">
              <li>
                <a className="Footer-hover" href="#About">
                  Sobre
                </a>
              </li>
              <li>
                <a className="Footer-hover" href="#Serviços">
                  Serviços
                </a>
              </li>
              <li>
                <a className="Footer-hover" href="#Projetos">
                  Projetos
                </a>
              </li>
              <li>
                <a className="Footer-hover" href="#Contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="flex justify-center lg:justify-start gap-4">
            <button onClick={() => abrirLink("https://github.com/arthurpedr")}>
              <img
                className="w-10 cursor-pointer bg-[#3B82F6] hover:shadow-lg shadow-[#FFFFFF]/99 rounded-full p-1"
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
                className="w-10 cursor-pointer bg-[#3B82F6] hover:shadow-lg shadow-[#FFFFFF]/99 rounded-full p-1"
                src="./branco-instagram.svg"
                alt="instagram"
              />
            </button>
          </div>
        </div>
        <div className="md:text-[18px]">
          <p>
            &copy; 2025 Developed by{" "}
            <a href="#Home" className="underline underline-offset-4 decoration-1">
              DEV PEDRO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
