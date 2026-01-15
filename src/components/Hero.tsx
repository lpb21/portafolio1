import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold">
                LP
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            David Leonardo Parra Bernal
          </h1>

          <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-slide-up animation-delay-200">
            Ingeniero de Software Full Stack
          </p>

          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            Especializado en desarrollo frontend y backend, diseño de API REST y microservicios,
            construyendo aplicaciones eficientes, seguras y escalables
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up animation-delay-600">
            <a
              href="https://github.com/lpb21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leonardparra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:leonardoparrasoft@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Contacto
            </a>
          </div>

          <div className="animate-bounce mt-16">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
