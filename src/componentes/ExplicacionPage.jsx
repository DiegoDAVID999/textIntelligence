// "use client"

// import { ArrowLeft, BookOpen, Brain, Eye, Leaf, Music, Heart, Users, Zap } from "lucide-react"

// const inteligencias = [
//   {
//     codigo: "VL",
//     nombre: "Verbal Lingüística",
//     icon: BookOpen,
//     color: "primary",
//     descripcion: "Capacidad para usar las palabras de manera efectiva, tanto oral como escrita.",
//     caracteristicas: [
//       "Facilidad para leer, escribir y comunicarse",
//       "Disfruta de los juegos de palabras y la poesía",
//       "Aprende mejor a través de la lectura y escritura",
//     ],
//     ejemplos: "Escritores, periodistas, abogados, oradores, poetas",
//     aplicaciones: "Tomar notas detalladas, explicar conceptos verbalmente, crear historias para recordar información",
//   },
//   {
//     codigo: "LM",
//     nombre: "Lógica Matemática",
//     icon: Brain,
//     color: "success",
//     descripcion: "Capacidad para usar números de manera efectiva y razonar adecuadamente.",
//     caracteristicas: [
//       "Facilidad para resolver problemas lógicos",
//       "Disfruta de patrones, secuencias y relaciones",
//       "Piensa de manera sistemática y organizada",
//     ],
//     ejemplos: "Matemáticos, científicos, ingenieros, programadores, contadores",
//     aplicaciones: "Crear esquemas lógicos, usar fórmulas y estadísticas, resolver problemas paso a paso",
//   },
//   {
//     codigo: "VE",
//     nombre: "Visual Espacial",
//     icon: Eye,
//     color: "info",
//     descripcion: "Capacidad para percibir el mundo visual-espacial de manera precisa.",
//     caracteristicas: [
//       "Facilidad para visualizar objetos en 3D",
//       "Disfruta del arte, diseño y colores",
//       "Aprende mejor con imágenes y diagramas",
//     ],
//     ejemplos: "Artistas, arquitectos, diseñadores, pilotos, cirujanos",
//     aplicaciones: "Usar mapas mentales, crear diagramas, organizar espacios, usar colores para categorizar",
//   },
//   {
//     codigo: "M",
//     nombre: "Musical",
//     icon: Music,
//     color: "warning",
//     descripcion: "Capacidad para percibir, discriminar, transformar y expresar las formas musicales.",
//     caracteristicas: [
//       "Sensibilidad al ritmo, tono y melodía",
//       "Disfruta cantando, tocando instrumentos",
//       "Aprende mejor con música de fondo",
//     ],
//     ejemplos: "Músicos, compositores, cantantes, productores musicales, terapeutas musicales",
//     aplicaciones: "Estudiar con música, crear ritmos para memorizar, usar canciones para aprender idiomas",
//   },
//   {
//     codigo: "CK",
//     nombre: "Corporal Kinestésica",
//     icon: Zap,
//     color: "danger",
//     descripcion: "Capacidad para usar todo el cuerpo para expresar ideas y sentimientos.",
//     caracteristicas: [
//       "Facilidad para el movimiento y coordinación",
//       "Disfruta de actividades físicas y manuales",
//       "Aprende mejor haciendo y tocando",
//     ],
//     ejemplos: "Atletas, bailarines, cirujanos, artesanos, actores",
//     aplicaciones: "Tomar descansos activos, usar gestos al estudiar, crear modelos físicos",
//   },
//   {
//     codigo: "N",
//     nombre: "Naturalista",
//     icon: Leaf,
//     color: "success",
//     descripcion: "Capacidad para reconocer y clasificar especies de flora y fauna.",
//     caracteristicas: [
//       "Sensibilidad hacia el mundo natural",
//       "Disfruta de la observación y clasificación",
//       "Aprende mejor al aire libre",
//     ],
//     ejemplos: "Biólogos, veterinarios, jardineros, ecologistas, chefs",
//     aplicaciones: "Estudiar en espacios naturales, usar analogías con la naturaleza, organizar por categorías",
//   },
//   {
//     codigo: "INTR",
//     nombre: "Intrapersonal",
//     icon: Heart,
//     color: "secondary",
//     descripcion: "Capacidad para conocerse a uno mismo y actuar adaptativamente sobre la base de ese conocimiento.",
//     caracteristicas: [
//       "Autoconciencia y reflexión profunda",
//       "Disfruta del tiempo a solas",
//       "Aprende mejor con autorreflexión",
//     ],
//     ejemplos: "Psicólogos, filósofos, escritores, consejeros, emprendedores",
//     aplicaciones: "Llevar un diario de aprendizaje, establecer metas personales, autoevaluación constante",
//   },
//   {
//     codigo: "INT",
//     nombre: "Interpersonal",
//     icon: Users,
//     color: "dark",
//     descripcion: "Capacidad para entender a otras personas y trabajar efectivamente con ellas.",
//     caracteristicas: [
//       "Facilidad para comunicarse y liderar",
//       "Disfruta del trabajo en equipo",
//       "Aprende mejor en grupos y discusiones",
//     ],
//     ejemplos: "Maestros, vendedores, políticos, terapeutas, líderes",
//     aplicaciones: "Estudiar en grupos, enseñar a otros, participar en debates y discusiones",
//   },
// ]

// export default function ExplicacionPage({ onNext, onBack }) {
//   return (
//     <div className="min-vh-100 py-5" style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)" }}>
//       <div className="container">
//         <div className="row justify-content-center mb-5">
//           <div className="col-lg-10">
//             <div className="card shadow-lg border-0 rounded-4">
//               <div className="card-body text-center p-5">
//                 <h1
//                   className="display-5 fw-bold mb-3"
//                   style={{
//                     background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   Las 8 Inteligencias Múltiples
//                 </h1>
//                 <p className="lead text-muted">
//                   Conoce cada tipo de inteligencia y descubre cómo se manifiestan en la vida diaria
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row g-4 mb-5">
//           {inteligencias.map((inteligencia) => {
//             const IconComponent = inteligencia.icon
//             return (
//               <div key={inteligencia.codigo} className="col-lg-6">
//                 <div
//                   className={`card h-100 border-${inteligencia.color} border-opacity-25 shadow-sm`}
//                   style={{
//                     backgroundColor: `var(--bs-${inteligencia.color}-rgb, 13, 110, 253)`,
//                     backgroundOpacity: "0.05",
//                   }}
//                 >
//                   <div className="card-body p-4">
//                     <div className="d-flex align-items-center mb-3">
//                       <div
//                         className={`d-flex align-items-center justify-content-center rounded-circle me-3 bg-${inteligencia.color} bg-opacity-10`}
//                         style={{ width: "48px", height: "48px" }}
//                       >
//                         <IconComponent size={24} className={`text-${inteligencia.color}`} />
//                       </div>
//                       <div>
//                         <h5 className="fw-bold text-dark mb-1">{inteligencia.nombre}</h5>
//                         <small className="text-muted fw-medium">({inteligencia.codigo})</small>
//                       </div>
//                     </div>

//                     <p className="text-muted small mb-3">{inteligencia.descripcion}</p>

//                     <div className="mb-3">
//                       <h6 className="fw-semibold text-dark mb-2">Características:</h6>
//                       <ul className="list-unstyled">
//                         {inteligencia.caracteristicas.map((caracteristica, index) => (
//                           <li key={index} className="small text-muted d-flex align-items-start mb-1">
//                             <span
//                               className="d-inline-block rounded-circle me-2 mt-1"
//                               style={{ width: "6px", height: "6px", backgroundColor: "#6c757d" }}
//                             ></span>
//                             {caracteristica}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="mb-3">
//                       <h6 className="fw-semibold text-dark mb-1">Profesiones típicas:</h6>
//                       <p className="small text-muted mb-0">{inteligencia.ejemplos}</p>
//                     </div>

//                     <div>
//                       <h6 className="fw-semibold text-dark mb-1">Estrategias de aprendizaje:</h6>
//                       <p className="small text-muted mb-0">{inteligencia.aplicaciones}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         <div className="d-flex justify-content-between align-items-center">
//           <button onClick={onBack} className="btn btn-outline-secondary d-flex align-items-center">
//             <ArrowLeft size={16} className="me-2" />
//             Volver
//           </button>

//           <button
//             onClick={onNext}
//             className="btn btn-lg fw-semibold px-5 py-3 rounded-3"
//             style={{ background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)", border: "none", color: "white" }}
//           >
//             Comenzar Test
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import {
  ArrowLeft,
  BookOpen,
  Brain,
  Eye,
  Leaf,
  Music,
  Heart,
  Users,
  Zap,
  ArrowRight,
  Star,
  Lightbulb,
  Target,
  Briefcase,
  GraduationCap,
} from "lucide-react"

const inteligencias = [
  {
    codigo: "VL",
    nombre: "Verbal Lingüística",
    icon: BookOpen,
    color: "#4facfe",
    emoji: "📝",
    descripcion: "Capacidad para usar las palabras de manera efectiva, tanto oral como escrita.",
    caracteristicas: [
      "Facilidad para leer, escribir y comunicarse",
      "Disfruta de los juegos de palabras y la poesía",
      "Aprende mejor a través de la lectura y escritura",
    ],
    ejemplos: "Escritores, periodistas, abogados, oradores, poetas",
    aplicaciones: "Tomar notas detalladas, explicar conceptos verbalmente, crear historias para recordar información",
    fortalezas: ["Comunicación excepcional", "Memoria verbal superior", "Habilidades de persuasión"],
  },
  {
    codigo: "LM",
    nombre: "Lógica Matemática",
    icon: Brain,
    color: "#43e97b",
    emoji: "🧮",
    descripcion: "Capacidad para usar números de manera efectiva y razonar adecuadamente.",
    caracteristicas: [
      "Facilidad para resolver problemas lógicos",
      "Disfruta de patrones, secuencias y relaciones",
      "Piensa de manera sistemática y organizada",
    ],
    ejemplos: "Matemáticos, científicos, ingenieros, programadores, contadores",
    aplicaciones: "Crear esquemas lógicos, usar fórmulas y estadísticas, resolver problemas paso a paso",
    fortalezas: ["Pensamiento analítico", "Resolución de problemas", "Razonamiento abstracto"],
  },
  {
    codigo: "VE",
    nombre: "Visual Espacial",
    icon: Eye,
    color: "#fa709a",
    emoji: "🎨",
    descripcion: "Capacidad para percibir el mundo visual-espacial de manera precisa.",
    caracteristicas: [
      "Facilidad para visualizar objetos en 3D",
      "Disfruta del arte, diseño y colores",
      "Aprende mejor con imágenes y diagramas",
    ],
    ejemplos: "Artistas, arquitectos, diseñadores, pilotos, cirujanos",
    aplicaciones: "Usar mapas mentales, crear diagramas, organizar espacios, usar colores para categorizar",
    fortalezas: ["Imaginación espacial", "Sentido artístico", "Orientación visual"],
  },
  {
    codigo: "M",
    nombre: "Musical",
    icon: Music,
    color: "#3FA3C2",
    emoji: "🎵",
    descripcion: "Capacidad para percibir, discriminar, transformar y expresar las formas musicales.",
    caracteristicas: [
      "Sensibilidad al ritmo, tono y melodía",
      "Disfruta cantando, tocando instrumentos",
      "Aprende mejor con música de fondo",
    ],
    ejemplos: "Músicos, compositores, cantantes, productores musicales, terapeutas musicales",
    aplicaciones: "Estudiar con música, crear ritmos para memorizar, usar canciones para aprender idiomas",
    fortalezas: ["Oído musical desarrollado", "Sensibilidad rítmica", "Expresión creativa"],
  },
  {
    codigo: "CK",
    nombre: "Corporal Kinestésica",
    icon: Zap,
    color: "#ff9a9e",
    emoji: "🏃",
    descripcion: "Capacidad para usar todo el cuerpo para expresar ideas y sentimientos.",
    caracteristicas: [
      "Facilidad para el movimiento y coordinación",
      "Disfruta de actividades físicas y manuales",
      "Aprende mejor haciendo y tocando",
    ],
    ejemplos: "Atletas, bailarines, cirujanos, artesanos, actores",
    aplicaciones: "Tomar descansos activos, usar gestos al estudiar, crear modelos físicos",
    fortalezas: ["Coordinación excepcional", "Destreza manual", "Expresión corporal"],
  },
  {
    codigo: "N",
    nombre: "Naturalista",
    icon: Leaf,
    color: "#a8edea",
    emoji: "🌿",
    descripcion: "Capacidad para reconocer y clasificar especies de flora y fauna.",
    caracteristicas: [
      "Sensibilidad hacia el mundo natural",
      "Disfruta de la observación y clasificación",
      "Aprende mejor al aire libre",
    ],
    ejemplos: "Biólogos, veterinarios, jardineros, ecologistas, chefs",
    aplicaciones: "Estudiar en espacios naturales, usar analogías con la naturaleza, organizar por categorías",
    fortalezas: ["Conexión con la naturaleza", "Observación detallada", "Clasificación sistemática"],
  },
  {
    codigo: "INTR",
    nombre: "Intrapersonal",
    icon: Heart,
    color: "#d299c2",
    emoji: "🧘",
    descripcion: "Capacidad para conocerse a uno mismo y actuar adaptativamente sobre la base de ese conocimiento.",
    caracteristicas: [
      "Autoconciencia y reflexión profunda",
      "Disfruta del tiempo a solas",
      "Aprende mejor con autorreflexión",
    ],
    ejemplos: "Psicólogos, filósofos, escritores, consejeros, emprendedores",
    aplicaciones: "Llevar un diario de aprendizaje, establecer metas personales, autoevaluación constante",
    fortalezas: ["Autoconocimiento profundo", "Reflexión metacognitiva", "Autodisciplina"],
  },
  {
    codigo: "INT",
    nombre: "Interpersonal",
    icon: Users,
    color: "#89f7fe",
    emoji: "👥",
    descripcion: "Capacidad para entender a otras personas y trabajar efectivamente con ellas.",
    caracteristicas: [
      "Facilidad para comunicarse y liderar",
      "Disfruta del trabajo en equipo",
      "Aprende mejor en grupos y discusiones",
    ],
    ejemplos: "Maestros, vendedores, políticos, terapeutas, líderes",
    aplicaciones: "Estudiar en grupos, enseñar a otros, participar en debates y discusiones",
    fortalezas: ["Liderazgo natural", "Empatía desarrollada", "Habilidades sociales"],
  },
]

export default function ExplicacionPage({ onNext, onBack }) {
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
          .card-hover {
            transition: all 0.4s ease;
          }
          .card-hover:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          }
          .intelligence-card {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          .intelligence-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
          }
          .intelligence-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          .intelligence-card:hover::before {
            left: 100%;
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
          .section-divider {
            height: 3px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
            margin: 2rem 0;
          }
        `}
      </style>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-11">
            {/* Header Espectacular */}
            <div className="text-center mb-5">
              <div className="position-relative d-inline-block mb-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-lg pulsing-element"
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <Star size={50} className="text-white" />
                </div>
                {/* Elementos decorativos */}
                <div
                  className="position-absolute sparkling-element"
                  style={{ top: "-10px", right: "-10px", fontSize: "24px" }}
                >

                </div>
                <div
                  className="position-absolute sparkling-element"
                  style={{ bottom: "-5px", left: "-15px", fontSize: "20px", animationDelay: "0.5s" }}
                >

                </div>
                <div
                  className="position-absolute sparkling-element"
                  style={{ top: "10px", left: "-20px", fontSize: "18px", animationDelay: "1s" }}
                >

                </div>
              </div>
              <br />

              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Glow blanco detrás */}
                <h1
                  className="display-4 fw-bold mb-4"
                  style={{
                    
    filter: "drop-shadow(0 0 4px white) drop-shadow(0 0 8px white)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    color: "white",
                    textShadow: `
                      0 0 8px white,
                      0 0 16px white,
                      0 0 24px white
      `,
                    pointerEvents: "none",
                    margin: 0,
                  }}
                >
                  Las 8 Inteligencias Múltiples
                </h1>

                {/* Texto con degradado claro */}
                <h1
                  className="display-4 fw-bold mb-4"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Las 8 Inteligencias Múltiples
                </h1>

              </div>
              <div
                className="bg-white rounded-4 p-4 shadow-lg mb-4 floating-element"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  animationDelay: "1s",
                }}
              >
                <p className="lead text-muted mb-0">
                  🧠 <strong>Conoce cada tipo de inteligencia</strong> y descubre cómo se manifiestan en la vida diaria
                  ✨
                </p>
              </div>
            </div>

            {/* Cards de las 8 Inteligencias */}
            <div className="row g-4 mb-5">
              {inteligencias.map((inteligencia, index) => {
                const IconComponent = inteligencia.icon
                return (
                  <div key={inteligencia.codigo} className="col-lg-6">
                    <div
                      className="card border-0 h-100 shadow-lg intelligence-card"
                      style={{
                        backdropFilter: "blur(15px)",
                        backgroundColor: "rgba(255,255,255,0.95)",
                        border: `2px solid ${inteligencia.color}33`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="card-body p-4">
                        {/* Header de la Inteligencia */}
                        <div className="d-flex align-items-center mb-4">
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle me-3 shadow-sm floating-element"
                            style={{
                              width: "60px",
                              height: "60px",
                              background: `linear-gradient(135deg, ${inteligencia.color} 0%, ${inteligencia.color}99 100%)`,
                              animationDelay: `${index * 0.2}s`,
                            }}
                          >
                            <IconComponent size={28} className="text-white" />
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center mb-1">
                              <h4 className="fw-bold text-dark mb-0 me-2">{inteligencia.nombre}</h4>
                              <span className="fs-4">{inteligencia.emoji}</span>
                            </div>
                            <small className="fw-semibold" style={{ color: inteligencia.color, fontSize: "0.85rem" }}>
                              ({inteligencia.codigo})
                            </small>
                          </div>
                        </div>

                        {/* Descripción */}
                        <p className="text-muted mb-4 lead" style={{ fontSize: "0.95rem" }}>
                          {inteligencia.descripcion}
                        </p>

                        {/* Características */}
                        <div className="mb-4">
                          <div className="d-flex align-items-center mb-3">
                            <Lightbulb size={18} style={{ color: inteligencia.color }} className="me-2" />
                            <h6 className="fw-bold text-dark mb-0">Características Principales:</h6>
                          </div>
                          <ul className="list-unstyled">
                            {inteligencia.caracteristicas.map((caracteristica, idx) => (
                              <li key={idx} className="d-flex align-items-start mb-2">
                                <span
                                  className="d-inline-block rounded-circle me-3 mt-1"
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: inteligencia.color,
                                    flexShrink: 0,
                                  }}
                                ></span>
                                <span className="text-muted small">{caracteristica}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Fortalezas */}
                        <div className="mb-4">
                          <div className="d-flex align-items-center mb-3">
                            <Target size={18} style={{ color: inteligencia.color }} className="me-2" />
                            <h6 className="fw-bold text-dark mb-0">Fortalezas Clave:</h6>
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            {inteligencia.fortalezas.map((fortaleza, idx) => (
                              <span
                                key={idx}
                                className="badge rounded-pill px-3 py-2"
                                style={{
                                  backgroundColor: `${inteligencia.color}20`,
                                  color: inteligencia.color,
                                  border: `1px solid ${inteligencia.color}40`,
                                  fontSize: "0.75rem",
                                }}
                              >
                                {fortaleza}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Profesiones */}
                        <div className="mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <Briefcase size={18} style={{ color: inteligencia.color }} className="me-2" />
                            <h6 className="fw-bold text-dark mb-0">Profesiones Típicas:</h6>
                          </div>
                          <p className="text-muted small mb-0">{inteligencia.ejemplos}</p>
                        </div>

                        {/* Estrategias */}
                        <div
                          className="p-3 rounded-3"
                          style={{
                            backgroundColor: `${inteligencia.color}10`,
                            border: `1px solid ${inteligencia.color}30`,
                          }}
                        >
                          <div className="d-flex align-items-center mb-2">
                            <GraduationCap size={18} style={{ color: inteligencia.color }} className="me-2" />
                            <h6 className="fw-bold text-dark mb-0">Estrategias de Aprendizaje:</h6>
                          </div>
                          <p className="text-muted small mb-0">{inteligencia.aplicaciones}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Sección Motivacional */}
            <div className="mb-5">
              <div
                className="card border-0 shadow-lg card-hover"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 pulsing-element"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                      }}
                    >
                      <Heart size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="h2 fw-bold text-dark mb-4">🎯 ¡Tu Combinación es Única! 🎯</h3>
                  <p className="lead text-muted mb-4">
                    Recuerda que <strong>todas las personas</strong> tienen una mezcla especial de estas inteligencias.
                    No existe una inteligencia "mejor" que otra, sino diferentes formas de brillar y contribuir al
                    mundo.
                  </p>
                  <div className="row g-3 justify-content-center">
                    <div className="col-auto">
                      <div className="d-flex align-items-center">
                        <span className="me-2">🌟</span>
                        <small className="text-muted fw-semibold">Cada mente es valiosa</small>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="d-flex align-items-center">
                        <span className="me-2">🚀</span>
                        <small className="text-muted fw-semibold">Tu potencial es ilimitado</small>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="d-flex align-items-center">
                        <span className="me-2">💎</span>
                        <small className="text-muted fw-semibold">Eres único e irrepetible</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación */}
            <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center gap-3">
  <button
    onClick={onBack}
    className="btn btn-outline-light btn-lg d-flex align-items-center px-4 py-3 rounded-4 shadow"
    style={{
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255,255,255,0.2)",
      border: "2px solid rgba(255,255,255,0.3)",
      color: "white",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "rgba(255,255,255,0.3)";
      e.target.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
      e.target.style.transform = "translateY(0)";
    }}
  >
    <ArrowLeft size={20} className="me-2" />
    <span className="fw-semibold">Volver</span>
  </button>

  <button
    onClick={onNext}
    className="btn btn-lg fw-bold px-5 py-4 rounded-4 shadow-lg position-relative overflow-hidden flex-grow-1 flex-md-grow-0"
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      color: "white",
      fontSize: "1.2rem",
      minWidth: "280px", // Considera ajustar este valor o eliminarlo para móviles
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "translateY(-3px) scale(1.02)";
      e.target.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.4)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "translateY(0) scale(1)";
      e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
    }}
  >
    <span className="me-3">🧠</span>
    Comenzar Test
    <ArrowRight size={24} className="ms-3" />
  </button>
</div>

            {/* Footer Inspiracional */}
            <div className="text-center mt-5">
              <div
                className="bg-white rounded-4 p-4 shadow-lg floating-element"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  animationDelay: "2s",
                }}
              >
                <p className="lead text-muted mb-2 fst-italic">
                  💡 "La verdadera inteligencia está en reconocer y desarrollar nuestros talentos únicos" 💡
                </p>
                <small className="text-muted fw-semibold">- Mentes Maestras</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
