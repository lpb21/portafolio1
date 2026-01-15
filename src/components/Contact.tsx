import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
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
                Estoy disponible para oportunidades de desarrollo full stack, consultoría técnica
                y colaboración en proyectos innovadores. Contáctame para discutir cómo puedo
                aportar valor a tu equipo.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:leonardoparrasoft@gmail.com"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Mail className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">leonardoparrasoft@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+573124640886"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                    <Phone className="text-green-600 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Teléfono / WhatsApp</p>
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
                <p className="text-slate-700 font-semibold mb-4">Encuéntrame en:</p>
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
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-300">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 resize-none transition-colors"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensaje
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
