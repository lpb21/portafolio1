import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (formData.name.trim().length < 4) {
      newErrors.name = "El nombre debe tener al menos 4 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
    }

    // Validar teléfono
    // Permite números, espacios y el símbolo + al inicio
    const phoneRegex = /^[+]?[\d\s]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Solo se permiten números";
    } else if (formData.phone.trim().replace(/\s/g, "").length <= 6) {
      newErrors.phone = "El teléfono debe tener más de 6 dígitos";
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      console.error("VITE_API_URL no está definida");
      return;
    }

    try {
      // Enviar datos al endpoint con los nombres de variables correctos
      const payload = {
        userName: formData.name,
        userEmail: formData.email,
        message: formData.message,
        userPhone: formData.phone,
      };

      await axios.post(apiUrl, payload);

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "", phone: "" });

      // Ocultar mensaje de éxito después de 6 segundos
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.894 3.488" />
    </svg>
  );

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Hablemos sobre tu próximo proyecto
              </h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Estoy disponible para oportunidades de desarrollo full stack,
                consultoría técnica y colaboración en proyectos innovadores.
                Contáctame para discutir cómo puedo aportar valor a tu equipo.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:leonardoparrasoft@gmail.com"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Mail
                      className="text-blue-600 group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">
                      leonardoparrasoft@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${import.meta.env.VITE_NUMBER}?text=Hola%20Leonardo,%20vi%20tu%20portafolio%20web%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <p className="text-slate-600">+57 312 464 0886</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Ubicación</p>
                    <p className="text-slate-600">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-slate-700 font-semibold mb-4">
                  Encuéntrame en:
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/lpb21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <Github className="text-white" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leonardparra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <Linkedin className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-600 rounded-lg flex items-center gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-sm">
                    ¡Mensaje enviado correctamente! Te responderé pronto.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-slate-300"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none text-white placeholder-slate-500 transition-colors ${errors.name
                      ? "border-red-500"
                      : "border-slate-700 focus:border-blue-500"
                      }`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-slate-300"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none text-white placeholder-slate-500 transition-colors ${errors.email
                      ? "border-red-500"
                      : "border-slate-700 focus:border-blue-500"
                      }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2 text-slate-300"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel" // Cambiado de email a tel para teclados móviles
                    id="phone"
                    name="phone" // Debe coincidir con el estado: "phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none text-white placeholder-slate-500 transition-colors ${errors.phone
                      ? "border-red-500"
                      : "border-slate-700 focus:border-blue-500"
                      }`}
                    placeholder="+57 300 000 0000"
                  />
                  {errors.phone && (
                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-slate-300"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none text-white placeholder-slate-500 resize-none transition-colors ${errors.message
                      ? "border-red-500"
                      : "border-slate-700 focus:border-blue-500"
                      }`}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                  {errors.message && (
                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${isSubmitting
                    ? "bg-slate-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:scale-105"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-600">
          2026 David Leonardo Parra Bernal - Ingeniero de Software Full Stack
        </p>
      </footer>
    </section>
  );
}
