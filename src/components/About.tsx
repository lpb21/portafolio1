import { Code2, Database, Cloud, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Experiencia en React, Node.js, Java, Angular y TypeScript"
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description: "SQL Server, PostgreSQL, MySQL, MongoDB con procedimientos almacenados"
    },
    {
      icon: Cloud,
      title: "APIs & Microservicios",
      description: "Diseño de API RESTful, integración de sistemas y arquitectura escalable"
    },
    {
      icon: Zap,
      title: "Metodologías Ágiles",
      description: "Scrum, Kanban, Git, Azure DevOps y entrega continua"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-12"></div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Ingeniero de Software graduado con más de 3 años de experiencia en desarrollo frontend y backend,
              diseño de API REST y microservicios, enfocado en construir aplicaciones eficientes, seguras y escalables.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              He trabajado en la integración de soluciones orientadas a mensajería y procesamiento de transacciones
              financieras, incluyendo el uso de colas de mensajes para validación de ACK/NAK en flujos de negocio
              y conocimientos en normativa <span className="font-semibold text-blue-700">ISO 20022 CBPR+</span>,
              asegurando confiabilidad e interoperabilidad en entornos críticos.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Me destaco por mi capacidad de aprendizaje continuo, trabajo en equipo y orientación a la mejora de procesos,
              aportando soluciones innovadoras y de alto impacto en cada proyecto. Actualmente en formación para la
              certificación <span className="font-semibold text-blue-700">AWS Cloud Practitioner</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
