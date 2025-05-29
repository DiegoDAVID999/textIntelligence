// // "use client"

// // import { Brain, Lightbulb, Target, Users } from "lucide-react"

// // export default function IntroduccionPage({ onNext }) {
// //   return (
// //     <div className="min-vh-100 py-5" style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)" }}>
// //       <div className="container">
// //         <div className="row justify-content-center">
// //           <div className="col-lg-10 col-xl-10">
// //             <div className="card shadow-lg border-0 rounded-4">
// //               <div className="card-body p-5">
// //                 <div className="text-center mb-5">
// //                   <div
// //                     className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
// //                     style={{
// //                       width: "64px",
// //                       height: "64px",
// //                       background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)",
// //                     }}
// //                   >
// //                     <Brain size={32} className="text-white" />
// //                   </div>
// //                   <h1
// //                     className="display-5 fw-bold"
// //                     style={{
// //                       background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)",
// //                       WebkitBackgroundClip: "text",
// //                       WebkitTextFillColor: "transparent",
// //                     }}
// //                   >
// //                     ¿Qué son las Inteligencias Múltiples?
// //                   </h1>
// //                 </div>

// //                 <div className="mb-5">
// //                   <p className="lead text-muted">
// //                     La teoría de las <strong>Inteligencias Múltiples</strong>, desarrollada por Howard Gardner,
// //                     revolucionó nuestra comprensión de la inteligencia humana. En lugar de ver la inteligencia como una
// //                     capacidad única y fija, Gardner propuso que existen <strong>múltiples tipos de inteligencia</strong>
// //                     , cada una representando diferentes formas de procesar información y resolver problemas.
// //                   </p>
// //                 </div>

// //                 <div className="row g-4 mb-5">
// //                   <div className="col-md-4">
// //                     <div
// //                       className="card h-100 border-primary border-opacity-25"
// //                       style={{ backgroundColor: "rgba(13, 110, 253, 0.05)" }}
// //                     >
// //                       <div className="card-body text-center p-4">
// //                         <Lightbulb size={48} className="text-primary mb-3" />
// //                         <h5 className="fw-semibold text-dark">Diversidad Cognitiva</h5>
// //                         <p className="small text-muted mb-0">
// //                           Cada persona tiene una combinación única de fortalezas intelectuales
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="col-md-4">
// //                     <div
// //                       className="card h-100 border-success border-opacity-25"
// //                       style={{ backgroundColor: "rgba(25, 135, 84, 0.05)" }}
// //                     >
// //                       <div className="card-body text-center p-4">
// //                         <Target size={48} className="text-success mb-3" />
// //                         <h5 className="fw-semibold text-dark">Potencial Individual</h5>
// //                         <p className="small text-muted mb-0">
// //                           Identificar tus fortalezas te ayuda a maximizar tu potencial
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="col-md-4">
// //                     <div
// //                       className="card h-100 border-info border-opacity-25"
// //                       style={{ backgroundColor: "rgba(13, 202, 240, 0.05)" }}
// //                     >
// //                       <div className="card-body text-center p-4">
// //                         <Users size={48} className="text-info mb-3" />
// //                         <h5 className="fw-semibold text-dark">Aprendizaje Personalizado</h5>
// //                         <p className="small text-muted mb-0">
// //                           Conocer tu estilo te permite adaptar tu forma de estudiar y trabajar
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div
// //                   className="card mb-5"
// //                   style={{
// //                     background: "linear-gradient(135deg, rgba(111, 66, 193, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%)",
// //                   }}
// //                 >
// //                   <div className="card-body p-4">
// //                     <h3 className="h4 fw-semibold text-dark mb-4">¿Cómo funciona este test?</h3>
// //                     <div className="row g-3">
// //                       <div className="col-12">
// //                         <div className="d-flex align-items-start">
// //                           <div
// //                             className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold"
// //                             style={{ width: "24px", height: "24px", backgroundColor: "#6f42c1", fontSize: "12px" }}
// //                           >
// //                             1
// //                           </div>
// //                           <p className="text-muted mb-0">
// //                             Responderás <strong>85 preguntas</strong> sobre tus preferencias, habilidades y formas de
// //                             pensar
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-12">
// //                         <div className="d-flex align-items-start">
// //                           <div
// //                             className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold"
// //                             style={{ width: "24px", height: "24px", backgroundColor: "#6f42c1", fontSize: "12px" }}
// //                           >
// //                             2
// //                           </div>
// //                           <p className="text-muted mb-0">
// //                             Cada respuesta contribuye al puntaje de las <strong>8 inteligencias múltiples</strong>
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-12">
// //                         <div className="d-flex align-items-start">
// //                           <div
// //                             className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold"
// //                             style={{ width: "24px", height: "24px", backgroundColor: "#6f42c1", fontSize: "12px" }}
// //                           >
// //                             3
// //                           </div>
// //                           <p className="text-muted mb-0">
// //                             Recibirás un <strong>perfil personalizado</strong> con tu inteligencia predominante y
// //                             recomendaciones
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="text-center">
// //                   <button
// //                     onClick={onNext}
// //                     className="btn btn-lg fw-semibold px-5 py-3 rounded-3"
// //                     style={{
// //                       background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)",
// //                       border: "none",
// //                       color: "white",
// //                     }}
// //                   >
// //                     Conocer las 8 Inteligencias
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// "use client"

// import {
//   Brain,
//   Lightbulb,
//   Target,
//   Users,
//   BookOpen,
//   Eye,
//   Music,
//   Heart,
//   Leaf,
//   Zap,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react"

// export default function IntroduccionPage({ onNext }) {
//   return (
//     <div
//       className="min-vh-100"
//       style={{
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
//         backgroundSize: "400% 400%",
//         animation: "gradientShift 15s ease infinite",
//       }}
//     >
//       <style>
//         {`
//           @keyframes gradientShift {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//           @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-10px); }
//           }
//           @keyframes pulse {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//           }
//           @keyframes sparkle {
//             0%, 100% { opacity: 1; transform: scale(1); }
//             50% { opacity: 0.7; transform: scale(1.2); }
//           }
//           .card-hover {
//             transition: all 0.3s ease;
//           }
//           .card-hover:hover {
//             transform: translateY(-8px);
//             box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
//           }
//           .intelligence-preview {
//             transition: all 0.3s ease;
//           }
//           .intelligence-preview:hover {
//             transform: scale(1.1) rotate(5deg);
//           }
//           .floating-element {
//             animation: float 3s ease-in-out infinite;
//           }
//           .pulsing-element {
//             animation: pulse 2s ease-in-out infinite;
//           }
//           .sparkling-element {
//             animation: sparkle 1.5s ease-in-out infinite;
//           }
//         `}
//       </style>

//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-11 col-xl-10">
//             {/* Header Espectacular */}
//             <div className="text-center mb-5">
//               <div className="position-relative d-inline-block mb-4">
//                 <div
//                   className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-lg pulsing-element"
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                   }}
//                 >
//                   <Brain size={50} className="text-white" />
//                 </div>
//                 {/* Elementos flotantes decorativos */}
//                 <div
//                   className="position-absolute sparkling-element"
//                   style={{ top: "-10px", right: "-10px", fontSize: "24px" }}
//                 >

//                 </div>
//                 <div
//                   className="position-absolute sparkling-element"
//                   style={{ bottom: "-5px", left: "-15px", fontSize: "20px", animationDelay: "0.5s" }}
//                 >

//                 </div>
//               </div>

//              <div style={{ position: "relative", display: "inline-block" }}>
//   {/* Glow blanco detrás */}
//   <h1
//     className="display-4 fw-bold mb-4"
//     style={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       zIndex: 0,
//       color: "white",
//       textShadow: `
//         0 0 8px white,
//         0 0 16px white,
//         0 0 24px white
//       `,
//       pointerEvents: "none",
//     }}
//   >
//      ¿Qué son las Inteligencias Múltiples? 
//   </h1>

//   {/* Texto con degradado azul-morado */}
//   <h1
//     className="display-4 fw-bold mb-4"
//     style={{
//       background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//       WebkitBackgroundClip: "text",
//       backgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       color: "transparent",
//       position: "relative",
//       zIndex: 1,
//     }}
//   >
//      ¿Qué son las Inteligencias Múltiples? 
//   </h1>


// </div>



//               <div
//                 className="bg-white rounded-4 p-4 shadow-lg mb-4 floating-element"
//                 style={{
//                   backdropFilter: "blur(15px)",
//                   backgroundColor: "rgba(255,255,255,0.95)",
//                   border: "2px solid rgba(255,255,255,0.3)",
//                   animationDelay: "1s",
//                 }}
//               >
//                 <p className="lead text-muted mb-0">
//                   🚀 <strong>Descubre el revolucionario concepto</strong> que cambió nuestra comprensión de la
//                   inteligencia humana 
//                 </p>
//               </div>
//             </div>

//             {/* Card Principal Mejorada */}
//             <div
//               className="card shadow-lg border-0 rounded-4 card-hover mb-5"
//               style={{
//                 backdropFilter: "blur(15px)",
//                 backgroundColor: "rgba(255,255,255,0.95)",
//                 border: "2px solid rgba(255,255,255,0.2)",
//               }}
//             >
//               <div className="card-body p-5">
//                 {/* Contenido Principal */}
//                 <div className="row align-items-center mb-5">
//                   <div className="col-lg-8">
//                     <div className="mb-4">
//                       <h3 className="h2 fw-bold text-dark mb-4">🌟 La Revolución de Howard Gardner 🌟</h3>
//                       <p className="lead text-muted mb-4">
//                         La teoría de las <strong className="text-primary">Inteligencias Múltiples</strong>, desarrollada
//                         por el psicólogo de Harvard <strong>Howard Gardner</strong>, revolucionó nuestra comprensión de
//                         la inteligencia humana.
//                       </p>
//                       <p className="text-muted mb-4">
//                         En lugar de ver la inteligencia como una capacidad única y fija, Gardner propuso que existen{" "}
//                         <strong className="text-success">múltiples tipos de inteligencia</strong>, cada una
//                         representando diferentes formas de procesar información y resolver problemas.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-lg-4">
//                     <div className="text-center">
//                       <div
//                         className="position-relative d-inline-block floating-element"
//                         style={{ animationDelay: "0.5s" }}
//                       >
//                         <div
//                           className="rounded-circle p-4 shadow-lg"
//                           style={{
//                             background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//                             width: "120px",
//                             height: "120px",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <Sparkles size={60} className="text-white" />
//                         </div>
//                         <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-3 border-white opacity-50"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Conceptos Clave */}
//                 <div className="row g-4 mb-5">
//                   <div className="col-lg-4">
//                     <div
//                       className="card border-0 h-100 shadow-sm card-hover"
//                       style={{
//                         background: "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)",
//                       }}
//                     >
//                       <div className="card-body text-center p-4">
//                         <div className="mb-3 floating-element" style={{ animationDelay: "0.2s" }}>
//                           <Lightbulb size={48} className="text-primary" />
//                         </div>
//                         <h5 className="fw-bold text-dark mb-3">🎯 Diversidad Cognitiva</h5>
//                         <p className="text-muted mb-0">
//                           Cada persona tiene una <strong>combinación única</strong> de fortalezas intelectuales que la
//                           hacen especial
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-4">
//                     <div
//                       className="card border-0 h-100 shadow-sm card-hover"
//                       style={{
//                         background: "linear-gradient(135deg, rgba(67, 233, 123, 0.1) 0%, rgba(56, 249, 215, 0.1) 100%)",
//                       }}
//                     >
//                       <div className="card-body text-center p-4">
//                         <div className="mb-3 floating-element" style={{ animationDelay: "0.4s" }}>
//                           <Target size={48} className="text-success" />
//                         </div>
//                         <h5 className="fw-bold text-dark mb-3">🚀 Potencial Individual</h5>
//                         <p className="text-muted mb-0">
//                           Identificar tus fortalezas te ayuda a <strong>maximizar tu potencial</strong> y alcanzar el
//                           éxito
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-4">
//                     <div
//                       className="card border-0 h-100 shadow-sm card-hover"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, rgba(247, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.1) 100%)",
//                       }}
//                     >
//                       <div className="card-body text-center p-4">
//                         <div className="mb-3 floating-element" style={{ animationDelay: "0.6s" }}>
//                           <Users size={48} className="text-warning" />
//                         </div>
//                         <h5 className="fw-bold text-dark mb-3">📚 Aprendizaje Personalizado</h5>
//                         <p className="text-muted mb-0">
//                           Conocer tu estilo te permite <strong>adaptar tu forma</strong> de estudiar y trabajar
//                           eficientemente
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Preview de las 8 Inteligencias */}
//                 <div className="mb-5">
//                   <h4 className="h3 fw-bold text-center text-dark mb-4">✨ Las 8 Inteligencias que Descubrirás ✨</h4>
//                   <div className="row g-3">
//                     {[
//                       { icon: BookOpen, name: "Verbal", color: "#4facfe", emoji: "📝" },
//                       { icon: Brain, name: "Lógica", color: "#43e97b", emoji: "🧮" },
//                       { icon: Eye, name: "Visual", color: "#fa709a", emoji: "🎨" },
//                       { icon: Music, name: "Musical", color: "#ffecd2", emoji: "🎵" },
//                       { icon: Zap, name: "Corporal", color: "#ff9a9e", emoji: "🏃" },
//                       { icon: Leaf, name: "Naturalista", color: "#a8edea", emoji: "🌿" },
//                       { icon: Heart, name: "Intrapersonal", color: "#d299c2", emoji: "🧘" },
//                       { icon: Users, name: "Interpersonal", color: "#89f7fe", emoji: "👥" },
//                     ].map((intel, index) => {
//                       const IconComponent = intel.icon
//                       return (
//                         <div key={intel.name} className="col-6 col-md-3">
//                           <div className="text-center intelligence-preview">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2 shadow-sm"
//                               style={{
//                                 width: "60px",
//                                 height: "60px",
//                                 background: `linear-gradient(135deg, ${intel.color} 0%, ${intel.color}99 100%)`,
//                                 animationDelay: `${index * 0.1}s`,
//                               }}
//                             >
//                               <IconComponent size={28} className="text-white" />
//                             </div>
//                             <div>
//                               <small className="fw-bold text-dark d-block">{intel.emoji}</small>
//                               <small className="text-muted">{intel.name}</small>
//                             </div>
//                           </div>
//                         </div>
//                       )
//                     })}
//                   </div>
//                 </div>

//                 {/* Cómo Funciona el Test */}
//                 <div
//                   className="card border-0 mb-5 shadow-sm"
//                   style={{
//                     background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
//                   }}
//                 >
//                   <div className="card-body p-5">
//                     <h4 className="h3 fw-bold text-dark mb-4 text-center">
//                       🚀 ¿Cómo funciona nuestro test científico? 🚀
//                     </h4>
//                     <div className="row g-4">
//                       <div className="col-lg-4">
//                         <div className="d-flex align-items-start">
//                           <div
//                             className="d-flex align-items-center justify-content-center rounded-circle me-4 text-white fw-bold shadow-lg floating-element"
//                             style={{
//                               width: "80px",
//                               height: "40px",
//                               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                               fontSize: "18px",
//                               animationDelay: "0.2s",
//                             }}
//                           >
//                             1
//                           </div>
//                           <div>
//                             <h5 className="fw-bold text-dark mb-2">📝 Responde 85 Preguntas</h5>
//                             <p className="text-muted mb-0">
//                               Sobre tus <strong>preferencias, habilidades</strong> y formas únicas de pensar y procesar
//                               información
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="d-flex align-items-start">
//                           <div
//                             className="d-flex align-items-center justify-content-center rounded-circle me-4 text-white fw-bold shadow-lg floating-element"
//                             style={{
//                               width: "80px",
//                               height: "40px",
//                               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                               fontSize: "18px",
//                               animationDelay: "0.4s",
//                             }}
//                           >
//                             2
//                           </div>
//                           <div>
//                             <h5 className="fw-bold text-dark mb-2">🧠 Análisis Inteligente</h5>
//                             <p className="text-muted mb-0">
//                               Cada respuesta contribuye al puntaje de las <strong>8 inteligencias múltiples</strong> con
//                               precisión científica
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="d-flex align-items-start">
//                           <div
//                             className="d-flex align-items-center justify-content-center rounded-circle me-4 text-white fw-bold shadow-lg floating-element"
//                             style={{
//                               width: "80px",
//                               height: "40px",
//                               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                               fontSize: "18px",
//                               animationDelay: "0.6s",
//                             }}
//                           >
//                             3
//                           </div>
//                           <div>
//                             <h5 className="fw-bold text-dark mb-2">📊 Perfil Personalizado</h5>
//                             <p className="text-muted mb-0">
//                               Recibirás tu <strong>inteligencia predominante</strong> y recomendaciones específicas para
//                               tu desarrollo
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Estadísticas Impresionantes */}
//                 <div className="row g-4 mb-5">
//                   <div className="col-md-3">
//                     <div className="text-center">
//                       <div
//                         className="display-4 fw-bold mb-2 pulsing-element"
//                         style={{
//                           background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                         }}
//                       >
//                         8
//                       </div>
//                       <small className="text-muted fw-semibold">Tipos de Inteligencia</small>
//                     </div>
//                   </div>
//                   <div className="col-md-3">
//                     <div className="text-center">
//                       <div
//                         className="display-4 fw-bold mb-2 pulsing-element"
//                         style={{
//                           background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           animationDelay: "0.2s",
//                         }}
//                       >
//                         85
//                       </div>
//                       <small className="text-muted fw-semibold">Preguntas Científicas</small>
//                     </div>
//                   </div>
//                   <div className="col-md-3">
//                     <div className="text-center">
//                       <div
//                         className="display-4 fw-bold mb-2 pulsing-element"
//                         style={{
//                           background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           animationDelay: "0.4s",
//                         }}
//                       >
//                         15
//                       </div>
//                       <small className="text-muted fw-semibold">Minutos Máximo</small>
//                     </div>
//                   </div>
//                   <div className="col-md-3">
//                     <div className="text-center">
//                       <div
//                         className="display-4 fw-bold mb-2 pulsing-element"
//                         style={{
//                           background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           animationDelay: "0.6s",
//                         }}
//                       >
//                         ∞
//                       </div>
//                       <small className="text-muted fw-semibold">Potencial a Descubrir</small>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Botón de Acción */}
//                 <div className="text-center">
//                   <button
//                     onClick={onNext}
//                     className="btn btn-lg fw-bold px-5 py-4 rounded-4 shadow-lg position-relative overflow-hidden"
//                     style={{
//                       background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                       border: "none",
//                       color: "white",
//                       fontSize: "1.3rem",
//                       minWidth: "320px",
//                       transition: "all 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.transform = "translateY(-3px) scale(1.02)"
//                       e.target.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.4)"
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.transform = "translateY(0) scale(1)"
//                       e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"
//                     }}
//                   >
//                     <span className="me-3">🧠</span>
//                     Conocer las 8 Inteligencias
//                     <ArrowRight size={24} className="ms-3" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Footer Inspiracional */}
//             <div className="text-center">
//               <div
//                 className="bg-white rounded-4 p-4 shadow-lg floating-element"
//                 style={{
//                   backdropFilter: "blur(15px)",
//                   backgroundColor: "rgba(255,255,255,0.9)",
//                   animationDelay: "1.5s",
//                 }}
//               >
//                 <p className="lead text-muted mb-2 fst-italic">
//                   💡 "No hay una sola forma de ser inteligente. Cada mente es única y valiosa" 💡
//                 </p>
//                 <small className="text-muted fw-semibold">- Inspirado en Howard Gardner</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect } from "react"
import {
  Brain,
  Lightbulb,
  Target,
  Users,
  BookOpen,
  Eye,
  Music,
  Heart,
  Leaf,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function IntroduccionPage({ onNext }) {
  // 🎯 SCROLL RESET: Asegura que la página inicie desde arriba
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Sin animación para carga inicial
    })
  }, [])

  const handleNext = () => {
    // Scroll reset antes de navegar
    window.scrollTo(0, 0)
    onNext()
  }

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
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.2); }
          }
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
          }
          .intelligence-preview {
            transition: all 0.3s ease;
          }
          .intelligence-preview:hover {
            transform: scale(1.1) rotate(5deg);
          }
          .floating-element {
            animation: float 3s ease-in-out infinite;
          }
          .pulsing-element {
            animation: pulse 2s ease-in-out infinite;
          }
          .sparkling-element {
            animation: sparkle 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
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
                  <Brain size={50} className="text-white" />
                </div>
                {/* Elementos flotantes decorativos */}
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
              </div>

              <div style={{ position: "relative", display: "inline-block",  }}>
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
                  }}
                >
                  ¿Qué son las Inteligencias Múltiples?
                </h1>

                {/* Texto con degradado azul-morado */}
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
                  ¿Qué son las Inteligencias Múltiples?
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
                  🚀 <strong>Descubre el revolucionario concepto</strong> que cambió nuestra comprensión de la
                  inteligencia humana 
                </p>
              </div>
            </div>

            {/* Card Principal Mejorada */}
            <div
              className="card shadow-lg border-0 rounded-4 card-hover mb-5"
              style={{
                backdropFilter: "blur(15px)",
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "2px solid rgba(255,255,255,0.2)",
              }}
            >
              <div className="card-body p-5">
                {/* Contenido Principal */}
                <div className="row align-items-center mb-5">
                  <div className="col-lg-8">
                    <div className="mb-4">
                      <h3 className="h2 fw-bold text-dark mb-4">🌟 La Revolución de Howard Gardner 🌟</h3>
                      <p className="lead text-muted mb-4">
                        La teoría de las <strong className="text-primary">Inteligencias Múltiples</strong>, desarrollada
                        por el psicólogo de Harvard <strong>Howard Gardner</strong>, revolucionó nuestra comprensión de
                        la inteligencia humana.
                      </p>
                      <p className="lead text-muted mb-4">
                        En lugar de ver la inteligencia como una capacidad única y fija, Gardner propuso que existen{" "}
                        <strong className="text-success">múltiples tipos de inteligencia</strong>, cada una
                        representando diferentes formas de procesar información y resolver problemas.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center">
                      <div
                        className="position-relative d-inline-block floating-element"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <div
                          className="rounded-circle p-4 shadow-lg"
                          style={{
                            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                            width: "120px",
                            height: "120px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Sparkles size={60} className="text-white" />
                        </div>
                        <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-3 border-white opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conceptos Clave */}
                <div className="row g-4 mb-5">
                  <div className="col-lg-4">
                    <div
                      className="card border-0 h-100 shadow-sm card-hover"
                      style={{
                        background: "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)",
                      }}
                    >
                      <div className="card-body text-center p-4">
                        <div className="mb-3 floating-element" style={{ animationDelay: "0.2s" }}>
                          <Lightbulb size={48} className="text-primary" />
                        </div>
                        <h5 className="fw-bold text-dark mb-3">🎯 Diversidad Cognitiva</h5>
                        <p className="text-muted mb-0">
                          Cada persona tiene una <strong>combinación única</strong> de fortalezas intelectuales que la
                          hacen especial
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="card border-0 h-100 shadow-sm card-hover"
                      style={{
                        background: "linear-gradient(135deg, rgba(67, 233, 123, 0.1) 0%, rgba(56, 249, 215, 0.1) 100%)",
                      }}
                    >
                      <div className="card-body text-center p-4">
                        <div className="mb-3 floating-element" style={{ animationDelay: "0.4s" }}>
                          <Target size={48} className="text-success" />
                        </div>
                        <h5 className="fw-bold text-dark mb-3">🚀 Potencial Individual</h5>
                        <p className="text-muted mb-0">
                          Identificar tus fortalezas te ayuda a <strong>maximizar tu potencial</strong> y alcanzar el
                          éxito
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="card border-0 h-100 shadow-sm card-hover"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(247, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.1) 100%)",
                      }}
                    >
                      <div className="card-body text-center p-4">
                        <div className="mb-3 floating-element" style={{ animationDelay: "0.6s" }}>
                          <Users size={48} className="text-warning" />
                        </div>
                        <h5 className="fw-bold text-dark mb-3">📚 Aprendizaje Personalizado</h5>
                        <p className="text-muted mb-0">
                          Conocer tu estilo te permite <strong>adaptar tu forma</strong> de estudiar y trabajar
                          eficientemente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview de las 8 Inteligencias */}
                <div className="mb-5">
                  <h4 className="h3 fw-bold text-center text-dark mb-4">✨ Las 8 Inteligencias que Descubrirás ✨</h4>
                  <div className="row g-3">
                    {[
                      { icon: BookOpen, name: "Verbal", color: "#4facfe",  },
                      { icon: Brain, name: "Lógica", color: "#43e97b",  },
                      { icon: Eye, name: "Visual", color: "#fa709a",  },
                      { icon: Music, name: "Musical", color: "#ffecd2",  },
                      { icon: Zap, name: "Corporal", color: "#ff9a9e",  },
                      { icon: Leaf, name: "Naturalista", color: "#a8edea",  },
                      { icon: Heart, name: "Intrapersonal", color: "#d299c2",  },
                      { icon: Users, name: "Interpersonal", color: "#89f7fe",  },
                    ].map((intel, index) => {
                      const IconComponent = intel.icon
                      return (
                        <div key={intel.name} className="col-6 col-md-3">
                          <div className="text-center intelligence-preview">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2 shadow-sm"
                              style={{
                                width: "60px",
                                height: "60px",
                                background: `linear-gradient(135deg, ${intel.color} 0%, ${intel.color}99 100%)`,
                                animationDelay: `${index * 0.1}s`,
                              }}
                            >
                              <IconComponent size={28} className="text-white" />
                            </div>
                            <div>
                              <small className="fw-bold text-dark d-block">{intel.emoji}</small>
                              <small className="text-muted">{intel.name}</small>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Cómo Funciona el Test */}
                <div
                  className="card border-0 mb-5 shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                  }}
                >
                  <div className="card-body p-4">
                    <h4 className="h4 fw-bold text-dark mb-4 text-center">
                      🚀 ¿Cómo funciona nuestro test científico? 🚀
                    </h4>
                    <div className="row g-4">
                      <div className="col-lg-4">
                        <div className="d-flex align-items-start">
                          <div
  className="d-flex align-items-center justify-content-center rounded-circle me-4 text-white fw-bold shadow-lg floating-element"
  style={{
    width: "92px",
    height: "32px", // igual al width
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontSize: "16px",
    animationDelay: "0.2s",
  }}
>
  1
</div>

                          <div>
                            <h5 className="fw-bold text-dark mb-2">📝 Responde 85 Preguntas</h5>
                            <p className="text-muted mb-0">
                              Sobre tus <strong>preferencias, habilidades</strong> y formas únicas de pensar y procesar
                              información
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="d-flex align-items-start">
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle me-4 text-white fw-bold shadow-lg floating-element"
                            style={{
                              width: "92px",
                              height: "32px",
                              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              fontSize: "16px",
                              animationDelay: "0.4s",
                            }}
                          >
                            2
                          </div>
                          <div>
                            <h5 className="fw-bold text-dark mb-2">🧠 Análisis Inteligente</h5>
                            <p className="text-muted mb-0">
                              Cada respuesta contribuye al puntaje de las <strong>8 inteligencias múltiples</strong> con
                              precisión científica
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="d-flex align-items-start">
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle me-4 text-white fw-bold shadow-lg floating-element"
                            style={{
                              width: "92px",
                              height: "32px",
                              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              fontSize: "16px",
                              animationDelay: "0.6s",
                            }}
                          >
                            3
                          </div>
                          <div>
                            <h5 className="fw-bold text-dark mb-2">📊 Perfil Personalizado</h5>
                            <p className="text-muted mb-0">
                              Recibirás tu <strong>inteligencia predominante</strong> y recomendaciones específicas para
                              tu desarrollo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estadísticas Impresionantes */}
                <div className="row g-4 mb-5">
                  <div className="col-md-3">
                    <div className="text-center">
                      <div
                        className="display-4 fw-bold mb-2 pulsing-element"
                        style={{
                          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        8
                      </div>
                      <small className="text-muted fw-semibold">Tipos de Inteligencia</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div
                        className="display-4 fw-bold mb-2 pulsing-element"
                        style={{
                          background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          animationDelay: "0.2s",
                        }}
                      >
                        85
                      </div>
                      <small className="text-muted fw-semibold">Preguntas Científicas</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div
                        className="display-4 fw-bold mb-2 pulsing-element"
                        style={{
                          background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          animationDelay: "0.4s",
                        }}
                      >
                        15
                      </div>
                      <small className="text-muted fw-semibold">Minutos Máximo</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div
                        className="display-4 fw-bold mb-2 pulsing-element"
                        style={{
                          background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          animationDelay: "0.6s",
                        }}
                      >
                        ∞
                      </div>
                      <small className="text-muted fw-semibold">Potencial a Descubrir</small>
                    </div>
                  </div>
                </div>

                {/* Botón de Acción */}
                <div className="text-center">
                  <button
                    onClick={handleNext}
                    className="btn btn-lg fw-bold px-5 py-4 rounded-4 shadow-lg position-relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      color: "white",
                      fontSize: "1.2rem",
                      minWidth: "280px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-3px) scale(1.02)"
                      e.target.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.4)"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0) scale(1)"
                      e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"
                    }}
                  >
                    <span className="me-3">🧠</span>
                    Conocer las 8 Inteligencias
                    <ArrowRight size={24} className="ms-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Inspiracional */}
            <div className="text-center">
              <div
                className="bg-white rounded-4 p-4 shadow-lg floating-element"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  animationDelay: "1.5s",
                }}
              >
                <p className="lead text-muted mb-2 fst-italic">
                  💡 "No hay una sola forma de ser inteligente. Cada mente es única y valiosa" 💡
                </p>
                <small className="text-muted fw-semibold">- Inspirado en Howard Gardner</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
