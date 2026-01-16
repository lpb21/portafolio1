export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "React Hooks", "Redux", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Java", "PHP", "Python", "API RESTful", "Microservicios"]
    },
    {
      title: "Bases de Datos",
      skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Mongo Atlas", "Sequelize ORM", "Procedimientos Almacenados", "Triggers"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Git", "GitHub", "GitLab", "Docker", "Azure DevOps", "Confluence", "Bash", "Linux", "Windows", "AWS EC2", "AWS CloudFront", "AWS S3"]
    },
    {
      title: "Testing & Quality",
      skills: ["Jest", "Selenium", "Clean Code", "SOLID", "Code Review", "Debugging"]
    },
    {
      title: "Metodologías",
      skills: ["Scrum", "Kanban", "Agile", "GitFlow", "CI/CD"]
    },
    {
      title: "Otros",
      skills: ["ISO 20022 CBPR+", "Highcharts", "Axios", "Visual Basic Script", "Lua", "Roblox Studio"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Idiomas</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3">Español</h4>
                <p className="text-blue-100">Nativo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3">Inglés</h4>
                <p className="text-blue-100">B1 - Intermedio</p>
                <p className="text-sm text-blue-200 mt-2">Comprensión lectora y auditiva B1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
