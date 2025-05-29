
"use client"

import {
  BookOpen,
  Brain,
  Eye,
  Leaf,
  Music,
  Heart,
  Users,
  Zap,
  Trophy,
  Target,
  Lightbulb,
  Star,
  Award,
  TrendingUp,
  Sparkles,
  Gift,
  Rocket,
} from "lucide-react"

const inteligenciasInfo = {
  VL: {
    nombre: "Verbal Lingüística",
    icon: BookOpen,
    color: "#4facfe",
    emoji: "📝",
    descripcion: "Tienes una gran facilidad para las palabras y el lenguaje.",
    fortalezas: [
      "Excelente comunicación oral y escrita",
      "Facilidad para aprender idiomas",
      "Capacidad para persuadir y explicar conceptos",
    ],
    recomendaciones: [
      "Considera carreras en periodismo, literatura o educación",
      "Practica la escritura creativa regularmente",
      "Participa en debates y presentaciones públicas",
    ],
    estrategias: [
      "Toma notas detalladas mientras estudias",
      "Explica conceptos en voz alta",
      "Usa técnicas de memorización verbal",
    ],
    superpoderes: ["Maestro de las Palabras", "Comunicador Nato", "Contador de Historias"],
    frase: "Las palabras son tu superpoder para cambiar el mundo",
  },
  LM: {
    nombre: "Lógica Matemática",
    icon: Brain,
    color: "#43e97b",
    emoji: "🧮",
    descripcion: "Destacas en el pensamiento lógico y la resolución de problemas.",
    fortalezas: [
      "Excelente capacidad analítica",
      "Facilidad para detectar patrones",
      "Pensamiento sistemático y organizado",
    ],
    recomendaciones: [
      "Explora carreras en ciencias, ingeniería o tecnología",
      "Practica con acertijos y problemas lógicos",
      "Desarrolla habilidades de programación",
    ],
    estrategias: [
      "Organiza información en esquemas lógicos",
      "Usa fórmulas y estadísticas para estudiar",
      "Resuelve problemas paso a paso",
    ],
    superpoderes: ["Solucionador de Enigmas", "Arquitecto del Pensamiento", "Detective de Patrones"],
    frase: "Tu mente lógica puede descifrar los misterios del universo",
  },
  VE: {
    nombre: "Visual Espacial",
    icon: Eye,
    color: "#fa709a",
    emoji: "🎨",
    descripcion: "Tienes una excelente percepción visual y espacial.",
    fortalezas: ["Facilidad para visualizar en 3D", "Sentido artístico desarrollado", "Buena orientación espacial"],
    recomendaciones: [
      "Considera carreras en arte, diseño o arquitectura",
      "Practica dibujo y diseño regularmente",
      "Explora tecnologías de realidad virtual",
    ],
    estrategias: [
      "Usa mapas mentales y diagramas",
      "Estudia con colores y elementos visuales",
      "Crea representaciones gráficas de conceptos",
    ],
    superpoderes: ["Visionario Creativo", "Arquitecto de Sueños", "Maestro del Espacio"],
    frase: "Tu imaginación visual puede crear mundos extraordinarios",
  },
  M: {
    nombre: "Musical",
    icon: Music,
    color: "#ffecd2",
    emoji: "🎵",
    descripcion: "Posees una gran sensibilidad musical y rítmica.",
    fortalezas: [
      "Excelente oído musical",
      "Sensibilidad al ritmo y la melodía",
      "Capacidad para crear y apreciar música",
    ],
    recomendaciones: [
      "Explora carreras en música o producción musical",
      "Aprende a tocar instrumentos musicales",
      "Participa en coros o grupos musicales",
    ],
    estrategias: [
      "Estudia con música de fondo",
      "Crea ritmos para memorizar información",
      "Usa canciones para aprender idiomas",
    ],
    superpoderes: ["Compositor de Emociones", "Director de Sinfonías", "Sanador Musical"],
    frase: "Tu alma musical puede tocar corazones y transformar vidas",
  },
  CK: {
    nombre: "Corporal Kinestésica",
    icon: Zap,
    color: "#ff9a9e",
    emoji: "🏃",
    descripcion: "Tienes una excelente coordinación y expresión corporal.",
    fortalezas: [
      "Excelente coordinación motora",
      "Facilidad para actividades físicas",
      "Aprendizaje a través del movimiento",
    ],
    recomendaciones: [
      "Considera carreras en deportes, danza o fisioterapia",
      "Practica actividades físicas regularmente",
      "Explora artes marciales o danza",
    ],
    estrategias: [
      "Toma descansos activos mientras estudias",
      "Usa gestos y movimientos al aprender",
      "Crea modelos físicos de conceptos",
    ],
    superpoderes: ["Atleta Natural", "Bailarín de la Vida", "Escultor del Movimiento"],
    frase: "Tu cuerpo es el instrumento perfecto para expresar tu genialidad",
  },
  N: {
    nombre: "Naturalista",
    icon: Leaf,
    color: "#a8edea",
    emoji: "🌿",
    descripcion: "Tienes una gran conexión con la naturaleza y los seres vivos.",
    fortalezas: [
      "Sensibilidad hacia el medio ambiente",
      "Facilidad para clasificar y observar",
      "Conexión con la naturaleza",
    ],
    recomendaciones: [
      "Explora carreras en biología, ecología o veterinaria",
      "Participa en actividades de conservación",
      "Desarrolla un jardín o huerto",
    ],
    estrategias: [
      "Estudia en espacios naturales",
      "Usa analogías con la naturaleza",
      "Organiza información por categorías",
    ],
    superpoderes: ["Guardián de la Tierra", "Susurrador de Plantas", "Protector de Especies"],
    frase: "Eres el puente entre la humanidad y la naturaleza",
  },
  INTR: {
    nombre: "Intrapersonal",
    icon: Heart,
    color: "#d299c2",
    emoji: "🧘",
    descripcion: "Tienes una gran capacidad de autoconocimiento y reflexión.",
    fortalezas: ["Excelente autoconciencia", "Capacidad de autorreflexión", "Independencia en el aprendizaje"],
    recomendaciones: [
      "Considera carreras en psicología o filosofía",
      "Practica la meditación y mindfulness",
      "Desarrolla un diario personal",
    ],
    estrategias: [
      "Lleva un diario de aprendizaje",
      "Establece metas personales claras",
      "Practica la autoevaluación constante",
    ],
    superpoderes: ["Sabio Interior", "Explorador del Alma", "Maestro de la Consciencia"],
    frase: "Tu sabiduría interior es la brújula hacia tu verdadero potencial",
  },
  INT: {
    nombre: "Interpersonal",
    icon: Users,
    color: "#89f7fe",
    emoji: "👥",
    descripcion: "Tienes una gran habilidad para entender y trabajar con otros.",
    fortalezas: [
      "Excelentes habilidades sociales",
      "Facilidad para liderar equipos",
      "Empatía y comprensión hacia otros",
    ],
    recomendaciones: [
      "Considera carreras en educación, ventas o liderazgo",
      "Participa en actividades de voluntariado",
      "Desarrolla habilidades de coaching",
    ],
    estrategias: ["Estudia en grupos de trabajo", "Enseña conceptos a otros", "Participa en debates y discusiones"],
    superpoderes: ["Líder Natural", "Conector de Almas", "Inspirador de Multitudes"],
    frase: "Tu don para conectar con otros puede transformar comunidades enteras",
  },
}

export default function ResultadosPage({ results, onRestart }) {
  const { puntajes, inteligenciaPredominante } = results

  const inteligenciaPrincipal = inteligenciasInfo[inteligenciaPredominante]
  const IconPrincipal = inteligenciaPrincipal.icon

  // Normalizar puntajes para mostrar como porcentajes
  const maxPuntaje = Math.max(...Object.values(puntajes))
  const puntajesNormalizados = Object.entries(puntajes)
    .map(([codigo, puntaje]) => ({
      codigo,
      puntaje,
      porcentaje: maxPuntaje > 0 ? (puntaje / maxPuntaje) * 100 : 0,
      info: inteligenciasInfo[codigo],
    }))
    .sort((a, b) => b.puntaje - a.puntaje)

  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.7; transform: scale(1.2) rotate(180deg); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
            50% { box-shadow: 0 0 40px rgba(255,255,255,0.6); }
          }
          @keyframes slideInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
          }
          .card-hover {
            transition: all 0.4s ease;
          }
          .card-hover:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          }
          .floating-element {
            animation: float 3s ease-in-out infinite;
          }
          .pulsing-element {
            animation: pulse 2s ease-in-out infinite;
          }
          .sparkling-element {
            animation: sparkle 2s ease-in-out infinite;
          }
          .bouncing-element {
            animation: bounce 2s ease-in-out infinite;
          }
          .glowing-element {
            animation: glow 3s ease-in-out infinite;
          }
          .slide-in-up {
            animation: slideInUp 0.6s ease-out forwards;
          }
          .confetti-element {
            animation: confetti 3s ease-out infinite;
          }
          .progress-bar-animated {
            transition: width 2s ease-out;
            position: relative;
            overflow: hidden;
          }
          .progress-bar-animated::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 2s infinite;
          }
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          .crown-icon {
            filter: drop-shadow(0 0 10px rgba(255,215,0,0.8));
          }
          .trophy-glow {
            filter: drop-shadow(0 0 15px rgba(255,215,0,0.6));
          }
        `}
      </style>

      <div className="container py-3 py-md-5">
        {/* 🎉 CELEBRACIÓN PRINCIPAL */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-10">
            <div
              className="card border-0 shadow-lg card-hover glowing-element"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Elementos decorativos flotantes */}
              <div
                className="position-absolute confetti-element"
                style={{ top: "10%", left: "10%", fontSize: "24px", animationDelay: "0s" }}
              >
                🎉
              </div>
              <div
                className="position-absolute confetti-element"
                style={{ top: "20%", right: "15%", fontSize: "20px", animationDelay: "0.5s" }}
              >
                ✨
              </div>
              <div
                className="position-absolute confetti-element"
                style={{ bottom: "15%", left: "20%", fontSize: "18px", animationDelay: "1s" }}
              >
                🌟
              </div>
              <div
                className="position-absolute confetti-element"
                style={{ bottom: "10%", right: "10%", fontSize: "22px", animationDelay: "1.5s" }}
              >
                💫
              </div>

              <div className="card-body p-3 p-md-5 text-center">
                <div className="position-relative d-inline-block mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-lg bouncing-element trophy-glow d-md-none"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
                      border: "4px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <Trophy size={60} className="text-white" />
                  </div>
                  <div
                    className="d-none d-md-inline-flex align-items-center justify-content-center rounded-circle shadow-lg bouncing-element trophy-glow"
                    style={{
                      width: "120px",
                      height: "120px",
                      background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
                      border: "4px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <Trophy size={60} className="text-white" />
                  </div>
                  <div
                    className="position-absolute crown-icon"
                    style={{ top: "-15px", right: "-10px", fontSize: "30px" }}
                  >
                    👑
                  </div>
                </div>

                <h1 className="display-6 display-md-4 fw-bold mb-4 slide-in-up" style={{ animationDelay: "0.2s" }}>
                  🎊 ¡FELICITACIONES! 🎊
                </h1>
                <p className="lead mb-4 slide-in-up" style={{ animationDelay: "0.4s", fontSize: "1.3rem" }}>
                  Has completado exitosamente el <strong>Test de Inteligencias Múltiples</strong>
                </p>
                <div className="slide-in-up" style={{ animationDelay: "0.6s" }}>
                  <div className="d-inline-flex align-items-center bg-white bg-opacity-20 rounded-pill px-4 py-2">
                    <Award size={24} className="me-2" />
                    <span className="fw-bold text-dark">¡Eres oficialmente un genio multidimensional!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏆 INTELIGENCIA PREDOMINANTE */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-11">
            <div
              className="card border-0 shadow-lg card-hover"
              style={{
                backdropFilter: "blur(15px)",
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="card-body p-3 p-md-5">
                {/* Header de la Inteligencia Principal */}
                <div className="text-center mb-5">
                  <div className="position-relative d-inline-block mb-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-lg pulsing-element"
                      style={{
                        width: "100px",
                        height: "100px",
                        background: `linear-gradient(135deg, ${inteligenciaPrincipal.color} 0%, ${inteligenciaPrincipal.color}99 100%)`,
                      }}
                    >
                      <IconPrincipal size={50} className="text-white" />
                    </div>
                    <div
                      className="position-absolute sparkling-element"
                      style={{ top: "-10px", right: "-10px", fontSize: "28px" }}
                    >
                      {inteligenciaPrincipal.emoji}
                    </div>
                  </div>

                  <h2 className="h3 fw-bold text-dark mb-3">🌟 Tu Inteligencia Predominante 🌟</h2>
                  <h1
                    className="display-6 display-md-5 fw-bold mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${inteligenciaPrincipal.color} 0%, ${inteligenciaPrincipal.color}99 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {inteligenciaPrincipal.nombre}
                  </h1>
                  <p className="lead text-muted mb-4" style={{ fontSize: "1.2rem" }}>
                    {inteligenciaPrincipal.descripcion}
                  </p>

                  {/* Frase Inspiracional */}
                  <div
                    className="card border-0 mb-4 floating-element"
                    style={{
                      background: `linear-gradient(135deg, ${inteligenciaPrincipal.color}20 0%, ${inteligenciaPrincipal.color}10 100%)`,
                      border: `2px solid ${inteligenciaPrincipal.color}40`,
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <Sparkles size={24} style={{ color: inteligenciaPrincipal.color }} className="me-2" />
                        <h5 className="fw-bold text-dark mb-0">Tu Frase de Poder</h5>
                        <Sparkles size={24} style={{ color: inteligenciaPrincipal.color }} className="ms-2" />
                      </div>
                      <p className="lead text-dark mb-0 fst-italic fw-semibold">"{inteligenciaPrincipal.frase}"</p>
                    </div>
                  </div>
                </div>

                {/* Superpoderes */}
                <div className="mb-5">
                  <div className="text-center mb-4">
                    <h4 className="h3 fw-bold text-dark">🦸‍♀️ Tus Superpoderes Únicos 🦸‍♂️</h4>
                  </div>
                  <div className="row g-3">
                    {inteligenciaPrincipal.superpoderes.map((superpoder, index) => (
                      <div key={index} className="col-12 col-sm-6 col-md-4">
                        <div
                          className="card border-0 h-100 shadow-sm card-hover floating-element"
                          style={{
                            background: `linear-gradient(135deg, ${inteligenciaPrincipal.color}15 0%, ${inteligenciaPrincipal.color}05 100%)`,
                            border: `2px solid ${inteligenciaPrincipal.color}30`,
                            animationDelay: `${index * 0.2}s`,
                          }}
                        >
                          <div className="card-body text-center p-4">
                            <div className="mb-3">
                              <div
                                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  background: `linear-gradient(135deg, ${inteligenciaPrincipal.color} 0%, ${inteligenciaPrincipal.color}99 100%)`,
                                }}
                              >
                                <Star size={30} className="text-white" />
                              </div>
                            </div>
                            <h6 className="fw-bold text-dark mb-0">{superpoder}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secciones de Información */}
                <div className="row g-4">
                  {/* Fortalezas */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="card border-0 h-100 shadow-sm card-hover"
                      style={{
                        background: "linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(40, 167, 69, 0.05) 100%)",
                        border: "2px solid rgba(40, 167, 69, 0.2)",
                      }}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="d-inline-flex align-items-center justify-content-center rounded-circle me-3"
                            style={{ width: "40px", height: "40px", backgroundColor: "#28a745" }}
                          >
                            <Target size={20} className="text-white" />
                          </div>
                          <h5 className="fw-bold text-dark mb-0">🎯 Tus Fortalezas</h5>
                        </div>
                        <ul className="list-unstyled mb-0">
                          {inteligenciaPrincipal.fortalezas.map((fortaleza, index) => (
                            <li key={index} className="d-flex align-items-start mb-3">
                              <span
                                className="d-inline-block rounded-circle me-3 mt-1"
                                style={{ width: "8px", height: "8px", backgroundColor: "#28a745", flexShrink: 0 }}
                              ></span>
                              <span className="text-muted">{fortaleza}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recomendaciones */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="card border-0 h-100 shadow-sm card-hover"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(13, 110, 253, 0.05) 100%)",
                        border: "2px solid rgba(13, 110, 253, 0.2)",
                      }}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="d-inline-flex align-items-center justify-content-center rounded-circle me-3"
                            style={{ width: "40px", height: "40px", backgroundColor: "#0d6efd" }}
                          >
                            <Lightbulb size={20} className="text-white" />
                          </div>
                          <h5 className="fw-bold text-dark mb-0">💡 Recomendaciones</h5>
                        </div>
                        <ul className="list-unstyled mb-0">
                          {inteligenciaPrincipal.recomendaciones.map((recomendacion, index) => (
                            <li key={index} className="d-flex align-items-start mb-3">
                              <span
                                className="d-inline-block rounded-circle me-3 mt-1"
                                style={{ width: "8px", height: "8px", backgroundColor: "#0d6efd", flexShrink: 0 }}
                              ></span>
                              <span className="text-muted">{recomendacion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Estrategias */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="card border-0 h-100 shadow-sm card-hover"
                      style={{
                        background: "linear-gradient(135deg, rgba(220, 53, 69, 0.1) 0%, rgba(220, 53, 69, 0.05) 100%)",
                        border: "2px solid rgba(220, 53, 69, 0.2)",
                      }}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="d-inline-flex align-items-center justify-content-center rounded-circle me-3"
                            style={{ width: "40px", height: "40px", backgroundColor: "#dc3545" }}
                          >
                            <Brain size={20} className="text-white" />
                          </div>
                          <h5 className="fw-bold text-dark mb-0">🧠 Estrategias de Estudio</h5>
                        </div>
                        <ul className="list-unstyled mb-0">
                          {inteligenciaPrincipal.estrategias.map((estrategia, index) => (
                            <li key={index} className="d-flex align-items-start mb-3">
                              <span
                                className="d-inline-block rounded-circle me-3 mt-1"
                                style={{ width: "8px", height: "8px", backgroundColor: "#dc3545", flexShrink: 0 }}
                              ></span>
                              <span className="text-muted">{estrategia}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 PERFIL COMPLETO */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-11">
            <div
              className="card border-0 shadow-lg card-hover"
              style={{
                backdropFilter: "blur(15px)",
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="card-body p-3 p-md-5">
                <div className="text-center mb-5">
                  <div className="d-inline-flex align-items-center mb-3">
                    <TrendingUp size={32} className="text-primary me-3" />
                    <h2 className="h2 fw-bold text-dark mb-0">📊 Tu Perfil Completo de Inteligencias 📊</h2>
                    <TrendingUp size={32} className="text-primary ms-3" />
                  </div>
                  <p className="text-muted lead">Distribución detallada de tus diferentes tipos de inteligencia</p>
                </div>

                <div className="row g-4">
                  {puntajesNormalizados.map(({ codigo, puntaje, porcentaje, info }, index) => {
                    const IconComponent = info.icon
                    const isTop3 = index < 3
                    return (
                      <div key={codigo} className="col-12">
                        <div
                          className={`card border-0 shadow-sm card-hover ${isTop3 ? "glowing-element" : ""}`}
                          style={{
                            background: isTop3
                              ? `linear-gradient(135deg, ${info.color}20 0%, ${info.color}10 100%)`
                              : "rgba(248, 249, 250, 0.8)",
                            border: `2px solid ${isTop3 ? `${info.color}40` : "rgba(0,0,0,0.1)"}`,
                            position: "relative",
                          }}
                        >
                          {isTop3 && (
                            <div className="position-absolute" style={{ top: "10px", right: "15px", fontSize: "24px" }}>
                              {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                            </div>
                          )}

                          <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <div
                                  className="d-flex align-items-center justify-content-center rounded-circle me-3 shadow-sm"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}99 100%)`,
                                  }}
                                >
                                  <IconComponent size={24} className="text-white" />
                                </div>
                                <div>
                                  <h5 className="fw-bold text-dark mb-1 d-flex align-items-center">
                                    {info.nombre}
                                    <span className="ms-2" style={{ fontSize: "1.2rem" }}>
                                      {info.emoji}
                                    </span>
                                  </h5>
                                  <small className="text-muted">Puntuación: {puntaje} puntos</small>
                                </div>
                              </div>
                              <div className="text-end">
                                <div className="h4 fw-bold mb-0" style={{ color: info.color, fontSize: "1.5rem",  marginRight: "0.5cm" }}>
                                  {Math.round(porcentaje)}%
                                </div>
                                {isTop3 && (
                                  <small className="fw-bold" style={{ color: info.color }}>
                                    TOP {index + 1}
                                  </small>
                                )}
                              </div>
                            </div>

                            {/* Barra de Progreso Animada */}
                            <div
                              className="progress mb-2"
                              style={{ height: "15px", borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.1)" }}
                            >
                              <div
                                className="progress-bar progress-bar-animated"
                                style={{
                                  width: `${porcentaje}%`,
                                  background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}99 100%)`,
                                  borderRadius: "10px",
                                }}
                              ></div>
                            </div>

                            {/* Descripción para TOP 3 */}
                            {isTop3 && <p className="text-muted small mb-0 mt-2">{info.descripcion}</p>}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 MENSAJE MOTIVACIONAL */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-10">
            <div
              className="card border-0 shadow-lg card-hover floating-element"
              style={{
                background: "linear-gradient(135deg, rgba(25, 135, 84, 0.1) 0%, rgba(13, 110, 253, 0.1) 100%)",
                backdropFilter: "blur(15px)",
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="card-body p-3 p-md-5 text-center">
                <div className="mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 pulsing-element"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    }}
                  >
                    <Gift size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="h2 fw-bold text-dark mb-4">🎁 ¡Tu Potencial es Infinito! 🎁</h3>
                <p className="lead text-muted mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                  Recuerda que <strong>todas las personas</strong> tienen una combinación única de inteligencias. Tu
                  perfil te muestra tus fortalezas naturales, pero también puedes desarrollar las otras áreas. Lo
                  importante es conocerte mejor para potenciar tu aprendizaje y encontrar las estrategias que mejor
                  funcionen para ti.
                </p>
                <div className="row g-3 justify-content-center mb-4">
                  <div className="col-6 col-sm-4 col-md-auto">
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ fontSize: "1.5rem" }}>
                        🌟
                      </span>
                      <small className="text-muted fw-semibold">Cada mente es valiosa</small>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-auto">
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ fontSize: "1.5rem" }}>
                        🚀
                      </span>
                      <small className="text-muted fw-semibold">Tu potencial es ilimitado</small>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-auto">
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ fontSize: "1.5rem" }}>
                        💎
                      </span>
                      <small className="text-muted fw-semibold">Eres único e irrepetible</small>
                    </div>
                  </div>
                </div>
                <blockquote className="blockquote text-muted fst-italic mb-0">
                  <p className="mb-2">
                    "La inteligencia no es una cantidad fija, sino un potencial que puede desarrollarse"
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Howard Gardner, Psicólogo de Harvard</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* 🔄 BOTÓN REINICIAR */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="btn btn-lg fw-bold px-5 py-4 rounded-4 shadow-lg position-relative overflow-hidden fs-6 fs-md-5"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              color: "white",
              fontSize: "1rem",
              minWidth: "250px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px) scale(1.05)"
              e.target.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)"
              e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"
            }}
          >
            <Rocket size={24} className="me-3" />🔄 Realizar Test Nuevamente
            <Sparkles size={24} className="ms-3" />
          </button>

          <div className="mt-4">
            <small className="text-white fst-italic">
              💡 Comparte tus resultados con amigos y descubran juntos sus superpoderes únicos 💡
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
