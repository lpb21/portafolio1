import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Cobis Topaz",
      position: "Developer Analyst",
      period: "Diciembre 2023 - Actualidad",
      location: "Colombia",
      achievements: [
        "Desarrollo de aplicaciones web escalables con Java, Angular y TypeScript aplicando Clean Code y SOLID",
        "Experiencia avanzada en React y Cobis Designer para interfaces organizacionales optimizadas",
        "Gestión eficiente con Git aplicando GitFlow, pull requests y resolución de conflictos",
        "Manejo de Azure DevOps y Confluence para gestión ágil y documentación técnica",
        "Optimización de bases de datos SQL con procedimientos almacenados, triggers y funciones",
        "Desarrollo e integración de API RESTful con soporte JSON y XML",
        "Implementación de flujos de mensajería financiera bajo normativa ISO 20022 CBPR+"
      ],
      color: "from-blue-600 to-cyan-500"
    },
    {
      company: "Kodland Latinoamérica",
      position: "Tutor / Desarrollador",
      period: "Abril 2022 - Agosto 2025",
      location: "Argentina (Por horas)",
      achievements: [
        "Diseño de planes de enseñanza personalizados usando Roblox Studio y scripting con Lua",
        "Guía en creación de proyectos interactivos con mecánicas de juego y lógica de programación",
        "Enseñanza de fundamentos en Lua y Python adaptados por nivel de estudiante",
        "Desarrollo de automatizaciones con Python y Selenium para gestión educativa",
        "Mentoría en estructuración de código limpio y buenas prácticas de desarrollo"
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      company: "LG Electronics Colombia",
      position: "Desarrollador Full Stack",
      period: "Enero 2023 - Agosto 2023",
      location: "Colombia",
      achievements: [
        "Lideré el desarrollo del nuevo sitio web corporativo de LG Colombia",
        "Diseñé y desarrollé desde cero el módulo web de Business Intelligence (BI)",
        "Implementé visualizaciones dinámicas con React para análisis de datos",
        "Desarrollé back-end basado en microservicios con Node.js y Express",
        "Optimicé consultas en SQL Server para acceso eficiente a datos críticos",
        "Enfoque en UX para maximizar interacción y satisfacción de usuarios"
      ],
      color: "from-red-600 to-orange-500"
    },
    {
      company: "COS - Colombian Outsourcing Solutions",
      position: "Analista RPA",
      period: "Septiembre 2021 - Abril 2022",
      location: "Colombia",
      achievements: [
        "Diseño y desarrollo de formularios y aplicaciones web con PHP",
        "Implementación de automatizaciones con Visual Basic Script y Python-Selenium",
        "Gestión de control de versiones con Git aplicando GitFlow",
        "Resolución proactiva de bugs con análisis detallado y pruebas rigurosas",
        "Ejecución de consultas SQL avanzadas para optimización de datos"
      ],
      color: "from-green-600 to-teal-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-16"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
              >
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-3">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
