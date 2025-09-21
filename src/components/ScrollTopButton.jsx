import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 cursor-pointer bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-3 md:p-5 rounded-full shadow-lg hover:bg-gray-500 transition duration-300 z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}
