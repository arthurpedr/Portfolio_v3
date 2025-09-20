function Footer() {
  const abrirLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full min-h-[800px] flex justify-center items-center">
      <div className="py-12 flex flex-col items-center gap-4 text-white">
        <div>
          <nav className="flex items-center font-semibold text-[10px] md:text-lg">
            <ul className="flex items-center gap-8">
              <li>
                <a className="Footer-hover" href="#About">
                  About
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
                <a className="Footer-hover" href="#?">
                  ?
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
        <div className="text-[12px]">
          <p>
            &copy; 2025 Developed by{" "}
            <a href="#Home">
              DEV <span className="text-cyan-300">PEDRO</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
