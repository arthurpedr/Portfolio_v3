import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("nome", formData.nome);
    formPayload.append("email", formData.email);
    formPayload.append("assunto", formData.assunto);
    formPayload.append("mensagem", formData.mensagem);

    const res = await fetch("https://formspree.io/f/mjkgonza", {
      method: "POST",
      body: formPayload,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      alert("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    } else {
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto flex flex-col items-center justify-center gap-[20px]"
    >
      {/* Campo Nome */}
      <label htmlFor="nome" className="self-start text-[16px] text-[#1C1D20] dark:text-[#EFECFF]">
        Nome
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="Nome"
        required
        value={formData.nome}
        onChange={handleChange}
        className="w-full h-[56px] bg-[#EFECFF] rounded-[8px] px-4 text-[#000] border border-[#BABABB] focus:outline-none"
      />

      {/* Campo Email */}
      <label htmlFor="email" className="self-start text-[16px] text-[#1C1D20] dark:text-[#EFECFF]">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full h-[56px] bg-[#EFECFF] rounded-[8px] px-4 text-[#000] border border-[#BABABB] focus:outline-none"
      />

      {/* Campo Assunto */}
      <label htmlFor="assunto" className="self-start text-[16px] text-[#1C1D20] dark:text-[#EFECFF]">
        Assunto
      </label>
      <input
        type="text"
        name="assunto"
        id="assunto"
        placeholder="Assunto"
        required
        value={formData.assunto}
        onChange={handleChange}
        className="w-full h-[56px] bg-[#EFECFF] rounded-[8px] px-4 text-[#000] border border-[#BABABB] focus:outline-none"
      />

      {/* Campo Mensagem */}
      <label htmlFor="mensagem" className="self-start text-[16px] text-[#1C1D20] dark:text-[#EFECFF]">
        Mensagem
      </label>
      <textarea
        name="mensagem"
        id="mensagem"
        placeholder="Mensagem"
        required
        value={formData.mensagem}
        onChange={handleChange}
        className="w-full h-[80px] bg-[#EFECFF] rounded-[8px] px-4 py-2 text-[#000] border border-[#BABABB] focus:outline-none"
      />

      {/* Botão de Envio */}
      <button
        type="submit"
        className="w-full h-[55px] bg-blue-600 rounded-[8px] text-[#EFECFF] font-[700] cursor-pointer hover:bg-transparent hover:border border-white transition-all duration-300"
      >
        Enviar Mensagem
      </button>

      {/* Feedback de envio */}
      {status === "sucesso" && (
        <p className="text-green-600 font-medium">Mensagem enviada com sucesso!</p>
      )}
      {status === "erro" && (
        <p className="text-red-600 font-medium">Erro ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}

export default ContactForm;
