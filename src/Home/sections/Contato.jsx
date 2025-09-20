import ContatoForm from "../../components/ContatoForm.jsx";

function Contato(){
    return(
        <section
        id="Contato"
        className="flex w-full min-h-screen mx-auto justify-center items-center text-white">
            <div className="flex flex-col items-center justify-center gap-40 max-w-[1280px] w-full overflow-hidden">
                <p className="text-[40px] md:text-[80px] font-bold drop-shadow-[0_0_40px_#FFFFFF] mt-10 py-10">Contato</p>

                <div className="flex flex-col items-center justify-center gap-40 max-w-[1280px] w-full overflow-hidden">
                    <ContatoForm />
                </div>
            </div>
        </section>
    );
}
export default Contato;