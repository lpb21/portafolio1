import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Educación y Certificaciones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Ingeniero de Software
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">
                    Universidad Politécnico Grancolombiano
                  </p>
                  <p className="text-slate-600 mt-2">2018 - 2024</p>
                  <p className="text-slate-600">Colombia</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Formación en Ingeniería de Software con énfasis en desarrollo de aplicaciones,
                bases de datos, arquitectura de software y metodologías ágiles.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    AWS Cloud Practitioner
                  </h3>
                  <p className="text-orange-600 font-semibold text-lg">
                    Amazon Web Services
                  </p>
                  <p className="text-slate-600 mt-2">En formación</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Preparación para certificación en fundamentos de AWS Cloud, incluyendo servicios en la nube,
                arquitectura, seguridad y mejores prácticas.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Aprendizaje Continuo</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Me destaco por mi capacidad de aprendizaje continuo y adaptación a nuevas tecnologías.
              Constantemente actualizo mis conocimientos en desarrollo de software, cloud computing,
              mejores prácticas de arquitectura y metodologías ágiles para mantenerme a la vanguardia
              de la industria tecnológica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
