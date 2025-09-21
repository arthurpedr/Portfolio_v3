import CarouselProjects from "../../components/CarouselProjetos";

function Projetos(){
    return(
        <section
        id="Projetos"
        className="flex w-full mx-auto justify-center items-center text-white">
            <div className="flex px-6 md:px-0 flex-col items-center justify-center gap-40 max-w-[1280px] w-full overflow-hidden">
                <p className="text-[40px] md:text-[80px] font-bold drop-shadow-[0_0_40px_#FFFFFF] mt-10">Projetos</p>
                <CarouselProjects />
            </div>
        </section>
    );
}
export default Projetos;