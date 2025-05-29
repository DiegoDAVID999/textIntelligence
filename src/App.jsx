// // // "use client"

// // // import { useState } from "react"
// // // import { Brain, BookOpen, Eye, Music } from "lucide-react"
// // // import IntroduccionPage from "./componentes/IntroduccionPage"
// // // import ExplicacionPage from "./componentes/ExplicacionPage"
// // // import TestPage from "./componentes/TestPage"
// // // import ResultadosPage from "./componentes/ResultadosPage"

// // // export default function App() {
// // //   const [currentPage, setCurrentPage] = useState("inicio")
// // //   const [testResults, setTestResults] = useState(null)

// // //   const renderPage = () => {
// // //     switch (currentPage) {
// // //       case "introduccion":
// // //         return <IntroduccionPage onNext={() => setCurrentPage("explicacion")} />
// // //       case "explicacion":
// // //         return <ExplicacionPage onNext={() => setCurrentPage("test")} onBack={() => setCurrentPage("introduccion")} />
// // //       case "test":
// // //         return (
// // //           <TestPage
// // //             onComplete={(results) => {
// // //               setTestResults(results)
// // //               setCurrentPage("resultados")
// // //             }}
// // //             onBack={() => setCurrentPage("explicacion")}
// // //           />
// // //         )
// // //       case "resultados":
// // //         return (
// // //           <ResultadosPage
// // //             results={testResults}
// // //             onRestart={() => {
// // //               setCurrentPage("inicio")
// // //               setTestResults(null)
// // //             }}
// // //           />
// // //         )
// // //       default:
// // //         return (
// // //           <div
// // //             className="min-vh-100 d-flex align-items-center justify-content-center"
// // //             style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)" }}
// // //           >
// // //             <div className="container">
// // //               <div className="row justify-content-center">
// // //                 <div className="col-lg-10 col-xl-10">
// // //                   <div className="card shadow-lg border-0 rounded-4">
// // //                     <div className="card-body p-5">
// // //                       <div className="text-center mb-5">
// // //                         <div
// // //                           className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
// // //                           style={{
// // //                             width: "80px",
// // //                             height: "80px",
// // //                             background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)",
// // //                           }}
// // //                         >
// // //                           <Brain size={40} className="text-white" />
// // //                         </div>
// // //                         <h1
// // //                           className="display-4 fw-bold mb-3"
// // //                           style={{
// // //                             background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)",
// // //                             WebkitBackgroundClip: "text",
// // //                             WebkitTextFillColor: "transparent",
// // //                           }}
// // //                         >
// // //                           Mentes Maestras
// // //                         </h1>
// // //                         <p className="lead text-muted">Test de Inteligencias Múltiples</p>
// // //                       </div>

// // //                       <div className="text-center mb-4">
// // //                         <h2 className="h3 fw-semibold text-dark mb-3">Descubre tu Potencial Único</h2>
// // //                         <p className="text-muted">
// // //                           Cada persona posee una combinación única de inteligencias. Este test te ayudará a identificar
// // //                           tus fortalezas naturales y comprender mejor tu forma de aprender y procesar información.
// // //                         </p>
// // //                       </div>

// // //                       <div className="row g-3 mb-4">
// // //                         <div className="col-6 col-md-3">
// // //                           <div className="text-center">
// // //                             <div
// // //                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2 bg-primary bg-opacity-10"
// // //                               style={{ width: "48px", height: "48px" }}
// // //                             >
// // //                               <BookOpen size={24} className="text-primary" />
// // //                             </div>
// // //                             <small className="d-block fw-medium text-dark">Verbal</small>
// // //                           </div>
// // //                         </div>
// // //                         <div className="col-6 col-md-3">
// // //                           <div className="text-center">
// // //                             <div
// // //                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2 bg-success bg-opacity-10"
// // //                               style={{ width: "48px", height: "48px" }}
// // //                             >
// // //                               <Brain size={24} className="text-success" />
// // //                             </div>
// // //                             <small className="d-block fw-medium text-dark">Lógica</small>
// // //                           </div>
// // //                         </div>
// // //                         <div className="col-6 col-md-3">
// // //                           <div className="text-center">
// // //                             <div
// // //                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2 bg-info bg-opacity-10"
// // //                               style={{ width: "48px", height: "48px" }}
// // //                             >
// // //                               <Eye size={24} className="text-info" />
// // //                             </div>
// // //                             <small className="d-block fw-medium text-dark">Visual</small>
// // //                           </div>
// // //                         </div>
// // //                         <div className="col-6 col-md-3">
// // //                           <div className="text-center">
// // //                             <div
// // //                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2 bg-warning bg-opacity-10"
// // //                               style={{ width: "48px", height: "48px" }}
// // //                             >
// // //                               <Music size={24} className="text-warning" />
// // //                             </div>
// // //                             <small className="d-block fw-medium text-dark">Musical</small>
// // //                           </div>
// // //                         </div>
// // //                       </div>

// // //                       <div className="d-grid gap-2">
// // //                         <button
// // //                           onClick={() => setCurrentPage("introduccion")}
// // //                           className="btn btn-lg fw-semibold rounded-3 py-3"
// // //                           style={{
// // //                             background: "linear-gradient(135deg, #6f42c1 0%, #007bff 100%)",
// // //                             border: "none",
// // //                             color: "white",
// // //                           }}
// // //                         >
// // //                           Comenzar Test
// // //                         </button>
// // //                         <small className="text-center text-muted">
// // //                           Duración aproximada: 10-15 minutos • 85 preguntas
// // //                         </small>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )
// // //     }
// // //   }

// // //   return renderPage()
// // // }
// "use client"

// import { useState } from "react"
// import { Brain, BookOpen, Eye, Music, Users, Heart, Leaf, Zap } from "lucide-react"
// import IntroduccionPage from "./componentes/IntroduccionPage"
// import ExplicacionPage from "./componentes/ExplicacionPage"
// import TestPage from "./componentes/TestPage"
// import ResultadosPage from "./componentes/ResultadosPage"

// export default function App() {
//   const [currentPage, setCurrentPage] = useState("inicio")
//   const [testResults, setTestResults] = useState(null)

//   const renderPage = () => {
//     switch (currentPage) {
//       case "introduccion":
//         return <IntroduccionPage onNext={() => setCurrentPage("explicacion")} />
//       case "explicacion":
//         return <ExplicacionPage onNext={() => setCurrentPage("test")} onBack={() => setCurrentPage("introduccion")} />
//       case "test":
//         return (
//           <TestPage
//             onComplete={(results) => {
//               setTestResults(results)
//               setCurrentPage("resultados")
//             }}
//             onBack={() => setCurrentPage("explicacion")}
//           />
//         )
//       case "resultados":
//         return (
//           <ResultadosPage
//             results={testResults}
//             onRestart={() => {
//               setCurrentPage("inicio")
//               setTestResults(null)
//             }}
//           />
//         )
//       default:
//         return (
//           <div
//             className="min-vh-100"
//             style={{
//               background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
//               backgroundSize: "400% 400%",
//               animation: "gradientShift 15s ease infinite",
//             }}
//           >
//             <style>
//               {`
//                 @keyframes gradientShift {
//                   0% { background-position: 0% 50%; }
//                   50% { background-position: 100% 50%; }
//                   100% { background-position: 0% 50%; }
//                 }
//                 .card-hover {
//                   transition: all 0.3s ease;
//                 }
//                 .card-hover:hover {
//                   transform: translateY(-5px);
//                   box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
//                 }
//                 .intelligence-icon {
//                   transition: all 0.3s ease;
//                 }
//                 .intelligence-icon:hover {
//                   transform: scale(1.1);
//                 }
//               `}
//             </style>

//             <div className="container py-5">
//               <div className="row justify-content-center">
//                 <div className="col-lg-10 col-xl-">
//                   {/* Header Principal */}
//                   <div className="text-center mb-5">
//                     <div
//                       className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 shadow-lg"
//                       style={{
//                         width: "120px",
//                         height: "120px",
//                         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                         animation: "pulse 2s infinite",
//                       }}
//                     >
//                       <Brain size={60} className="text-white" />
                      
//                     </div>
// <br />
//                     <div style={{ position: "relative", display: "inline-block" }}>
//   {/* Capa de sombra iluminada */}
//   <h1
//     className="display-3 fw-bold mb-4"
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
//       pointerEvents: "none", // para que no interfiera con clics
//     }}
//   >
//     Mentes Maestras
//   </h1>

//   {/* Capa principal con el degradado */}
//   <h1
//     className="display-3 fw-bold mb-4"
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
//     Mentes Maestras
//   </h1>
// </div>


//                     <div className="bg-white rounded-4 p-4 shadow-lg mb-4" style={{ backdropFilter: "blur(10px)" }}>
//                       <h2 className="h3 fw-bold text-dark mb-3">🧠 Test de Inteligencias Múltiples 🧠</h2>
//                       <p className="lead text-muted mb-0">
//                         Descubre tu potencial único y conoce tus fortalezas naturales
//                       </p>
//                     </div>
//                   </div>

//                   {/* Card Principal */}
//                   <div
//                     className="card shadow-lg border-0 rounded-4 card-hover mb-5"
//                     style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.95)" }}
//                   >
//                     <div className="card-body p-5">
//                       <div className="text-center mb-5">
//                         <h3 className="h2 fw-bold text-dark mb-4">✨ Explora las 8 Inteligencias Múltiples ✨</h3>
//                         <p className="lead text-muted mb-4">
//                           Cada persona posee una combinación única de inteligencias. Este test científico te ayudará a
//                           identificar tus fortalezas naturales y comprender mejor tu forma de aprender.
//                         </p>
//                       </div>

//                       {/* Las 8 Inteligencias */}
//                       <div className="row g-4 mb-5">
//                         {/* Fila 1 */}
//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//                               }}
//                             >
//                               <BookOpen size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Verbal</h6>
//                             <small className="text-muted">Lingüística</small>
//                           </div>
//                         </div>

//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//                               }}
//                             >
//                               <Brain size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Lógica</h6>
//                             <small className="text-muted">Matemática</small>
//                           </div>
//                         </div>

//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//                               }}
//                             >
//                               <Eye size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Visual</h6>
//                             <small className="text-muted">Espacial</small>
//                           </div>
//                         </div>

//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
//                               }}
//                             >
//                               <Music size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Musical</h6>
//                             <small className="text-muted">Rítmica</small>
//                           </div>
//                         </div>

//                         {/* Fila 2 */}
//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
//                               }}
//                             >
//                               <Zap size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Corporal</h6>
//                             <small className="text-muted">Kinestésica</small>
//                           </div>
//                         </div>

//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
//                               }}
//                             >
//                               <Leaf size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Naturalista</h6>
//                             <small className="text-muted">Ecológica</small>
//                           </div>
//                         </div>

//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
//                               }}
//                             >
//                               <Heart size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Intrapersonal</h6>
//                             <small className="text-muted">Autoconocimiento</small>
//                           </div>
//                         </div>

//                         <div className="col-6 col-md-3">
//                           <div className="text-center intelligence-icon">
//                             <div
//                               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
//                               style={{
//                                 width: "70px",
//                                 height: "70px",
//                                 background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
//                               }}
//                             >
//                               <Users size={32} className="text-white" />
//                             </div>
//                             <h6 className="fw-bold text-dark mb-1">Interpersonal</h6>
//                             <small className="text-muted">Social</small>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Características del Test */}
//                       <div className="row g-4 mb-5">
//                         <div className="col-md-4">
//                           <div
//                             className="card border-0 h-100 shadow-sm"
//                             style={{
//                               background:
//                                 "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)",
//                             }}
//                           >
//                             <div className="card-body text-center p-4">
//                               <div className="mb-3">
//                                 <span className="display-6">🎯</span>
//                               </div>
//                               <h5 className="fw-bold text-dark mb-2">Científicamente Validado</h5>
//                               <p className="small text-muted mb-0">
//                                 Basado en la teoría de Howard Gardner, reconocida mundialmente
//                               </p>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="col-md-4">
//                           <div
//                             className="card border-0 h-100 shadow-sm"
//                             style={{
//                               background:
//                                 "linear-gradient(135deg, rgba(67, 233, 123, 0.1) 0%, rgba(56, 249, 215, 0.1) 100%)",
//                             }}
//                           >
//                             <div className="card-body text-center p-4">
//                               <div className="mb-3">
//                                 <span className="display-6">⚡</span>
//                               </div>
//                               <h5 className="fw-bold text-dark mb-2">Rápido y Preciso</h5>
//                               <p className="small text-muted mb-0">
//                                 85 preguntas diseñadas para máxima precisión en mínimo tiempo
//                               </p>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="col-md-4">
//                           <div
//                             className="card border-0 h-100 shadow-sm"
//                             style={{
//                               background:
//                                 "linear-gradient(135deg, rgba(247, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.1) 100%)",
//                             }}
//                           >
//                             <div className="card-body text-center p-4">
//                               <div className="mb-3">
//                                 <span className="display-6">📊</span>
//                               </div>
//                               <h5 className="fw-bold text-dark mb-2">Resultados Detallados</h5>
//                               <p className="small text-muted mb-0">
//                                 Análisis completo con recomendaciones personalizadas
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Información del Test */}
//                       <div
//                         className="card border-0 mb-5 shadow-sm"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
//                         }}
//                       >
//                         <div className="card-body p-4">
//                           <h4 className="h5 fw-bold text-dark mb-4 text-center">🚀 ¿Cómo funciona este test?</h4>
//                           <div className="row g-3">
//                             <div className="col-md-4">
//                               <div className="d-flex align-items-start">
//                                 <div
//                                   className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold shadow"
//                                   style={{
//                                     width: "32px",
//                                     height: "32px",
//                                     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                                     fontSize: "14px",
//                                   }}
//                                 >
//                                   1
//                                 </div>
//                                 <div>
//                                   <h6 className="fw-semibold text-dark mb-1">Responde 85 Preguntas</h6>
//                                   <p className="small text-muted mb-0">
//                                     Sobre tus preferencias, habilidades y formas de pensar
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="col-md-4">
//                               <div className="d-flex align-items-start">
//                                 <div
//                                   className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold shadow"
//                                   style={{
//                                     width: "32px",
//                                     height: "32px",
//                                     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                                     fontSize: "14px",
//                                   }}
//                                 >
//                                   2
//                                 </div>
//                                 <div>
//                                   <h6 className="fw-semibold text-dark mb-1">Análisis Automático</h6>
//                                   <p className="small text-muted mb-0">
//                                     Cada respuesta contribuye al puntaje de las 8 inteligencias
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="col-md-4">
//                               <div className="d-flex align-items-start">
//                                 <div
//                                   className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold shadow"
//                                   style={{
//                                     width: "32px",
//                                     height: "32px",
//                                     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                                     fontSize: "14px",
//                                   }}
//                                 >
//                                   3
//                                 </div>
//                                 <div>
//                                   <h6 className="fw-semibold text-dark mb-1">Perfil Personalizado</h6>
//                                   <p className="small text-muted mb-0">
//                                     Inteligencia predominante y recomendaciones específicas
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Botón Principal */}
//                       <div className="text-center">
//                         <button
//                           onClick={() => setCurrentPage("introduccion")}
//                           className="btn btn-lg fw-bold px-5 py-4 rounded-4 shadow-lg position-relative overflow-hidden"
//                           style={{
//                             background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                             border: "none",
//                             color: "white",
//                             fontSize: "1.2rem",
//                             minWidth: "280px",
//                             transition: "all 0.3s ease",
//                           }}
//                           onMouseEnter={(e) => {
//                             e.target.style.transform = "translateY(-2px)"
//                             e.target.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.4)"
//                           }}
//                           onMouseLeave={(e) => {
//                             e.target.style.transform = "translateY(0)"
//                             e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"
//                           }}
//                         >
//                           🚀 Comenzar Test Ahora
//                         </button>

//                         <div className="mt-4">
//                           <div className="row justify-content-center">
//                             <div className="col-auto">
//                               <small className="text-muted d-flex align-items-center">
//                                 <span className="me-2">⏱️</span>
//                                 Duración: 10-15 minutos
//                               </small>
//                             </div>
//                             <div className="col-auto">
//                               <small className="text-muted d-flex align-items-center">
//                                 <span className="me-2">📝</span>
//                                 85 preguntas
//                               </small>
//                             </div>
//                             <div className="col-auto">
//                               <small className="text-muted d-flex align-items-center">
//                                 <span className="me-2">🎯</span>
//                                 100% Gratuito
//                               </small>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Footer Motivacional */}
//                   <div className="text-center">
//                     <div
//                       className="bg-white rounded-4 p-4 shadow-lg"
//                       style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.9)" }}
//                     >
//                       <p className="lead text-muted mb-2 fst-italic">
//                         "La inteligencia no es una cantidad fija, sino un potencial que puede desarrollarse"
//                       </p>
//                       <small className="text-muted fw-semibold">- Howard Gardner, Psicólogo de Harvard</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//     }
//   }

//   return renderPage()
// }

"use client"

import { useState, useEffect } from "react"
import { Brain, BookOpen, Eye, Music, Users, Heart, Leaf, Zap } from "lucide-react"
import IntroduccionPage from "./componentes/IntroduccionPage"
import ExplicacionPage from "./componentes/ExplicacionPage"
import TestPage from "./componentes/TestPage"
import ResultadosPage from "./componentes/ResultadosPage"
import { Lightbulb } from "lucide-react"

export default function App() {
  const [currentPage, setCurrentPage] = useState("inicio")
  const [testResults, setTestResults] = useState(null)

  // 🎯 SCROLL RESET: Reinicia el scroll cada vez que cambia la página
  useEffect(() => {
    // Scroll suave al inicio de la página
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

    // También reinicia el scroll del body por si acaso
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [currentPage]) // Se ejecuta cada vez que currentPage cambia

  // 🎯 Función helper para cambiar página con scroll reset
  const navigateToPage = (page) => {
    setCurrentPage(page)
    // Scroll inmediato (sin animación) para cambios rápidos
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "introduccion":
        return <IntroduccionPage onNext={() => navigateToPage("explicacion")} />
      case "explicacion":
        return <ExplicacionPage onNext={() => navigateToPage("test")} onBack={() => navigateToPage("introduccion")} />
      case "test":
        return (
          <TestPage
            onComplete={(results) => {
              setTestResults(results)
              navigateToPage("resultados")
            }}
            onBack={() => navigateToPage("explicacion")}
          />
        )
      case "resultados":
        return (
          <ResultadosPage
            results={testResults}
            onRestart={() => {
              navigateToPage("inicio")
              setTestResults(null)
            }}
          />
        )
      default:
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
                .card-hover {
                  transition: all 0.3s ease;
                }
                .card-hover:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
                }
                .intelligence-icon {
                  transition: all 0.3s ease;
                }
                .intelligence-icon:hover {
                  transform: scale(1.1);
                }
              `}
            </style>

            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-10">
                  {/* Header Principal */}
                  <div className="text-center mb-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 shadow-lg"
                      style={{
                        width: "120px",
                        height: "120px",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        animation: "pulse 2s infinite",
                      }}
                    >
                      <Brain size={60} className="text-white" />
                    </div>
<br />
                     <div style={{ position: "relative", display: "inline-block" }}>
   {/* Capa de sombra iluminada */}
  <h1
    className="display-3 fw-bold mb-4"
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
      pointerEvents: "none", // para que no interfiera con clics
    }}
  >
    Mentes Maestras
  </h1>

  {/* Capa principal con el degradado */}
  <h1
    className="display-3 fw-bold mb-4"
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
    Mentes Maestras
  </h1>
</div>

                    <div className="bg-white rounded-4 p-4 shadow-lg mb-4" style={{ backdropFilter: "blur(10px)" }}>
                       <h2 className="h3 fw-bold text-dark mb-3">🧠 Test de Inteligencias Múltiples 🧠</h2>
                       <p className="lead text-muted mb-0">
                         Descubre tu potencial único y conoce tus fortalezas naturales
                       </p>
                   </div>
                  </div>
                  {/* Card Principal */}
                  <div
                    className="card shadow-lg border-0 rounded-4 card-hover mb-5"
                    style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.95)" }}
                  >
                    <div className="card-body p-5">
                      <div className="text-center mb-5">
                        <h3 className="h2 fw-bold text-dark mb-4">✨ Explora las 8 Inteligencias Múltiples ✨</h3>
                        <p className="lead text-muted mb-4">
                          Cada persona posee una combinación única de inteligencias. Este test científico te ayudará a
                          identificar tus fortalezas naturales y comprender mejor tu forma de aprender.
                        </p>
                      </div>

                      {/* Las 8 Inteligencias */}
                      <div className="row g-4 mb-5">
                        {/* Fila 1 */}
                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                              }}
                            >
                              <BookOpen size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Verbal</h6>
                            <small className="text-muted">Lingüística</small>
                          </div>
                        </div>

                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                              }}
                            >
                              <Brain size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Lógica</h6>
                            <small className="text-muted">Matemática</small>
                          </div>
                        </div>

                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                              }}
                            >
                              <Eye size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Visual</h6>
                            <small className="text-muted">Espacial</small>
                          </div>
                        </div>

                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                              }}
                            >
                              <Music size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Musical</h6>
                            <small className="text-muted">Rítmica</small>
                          </div>
                        </div>

                        {/* Fila 2 */}
                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
                              }}
                            >
                              <Zap size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Corporal</h6>
                            <small className="text-muted">Kinestésica</small>
                          </div>
                        </div>

                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                              }}
                            >
                              <Leaf size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Naturalista</h6>
                            <small className="text-muted">Ecológica</small>
                          </div>
                        </div>

                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
                              }}
                            >
                              <Heart size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Intrapersonal</h6>
                            <small className="text-muted">Autoconocimiento</small>
                          </div>
                        </div>

                        <div className="col-6 col-md-3">
                          <div className="text-center intelligence-icon">
                            <div
                              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow"
                              style={{
                                width: "70px",
                                height: "70px",
                                background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                              }}
                            >
                              <Users size={32} className="text-white" />
                            </div>
                            <h6 className="fw-bold text-dark mb-1">Interpersonal</h6>
                            <small className="text-muted">Social</small>
                          </div>
                        </div>
                      </div>

                      {/* Características del Test */}
                      <div className="row g-4 mb-5">
                        <div className="col-md-4">
                          <div
                            className="card border-0 h-100 shadow-sm card-hover"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)",
                            }}
                          >
                            <div className="card-body text-center p-4">
                              <div className="mb-3 floating-elemtent" style={{ animationDelay: "0.2s" }}>
                                <span className="display-6">🎯</span>
                              </div>
                              <h5 className="fw-bold text-dark mb-2">Científicamente Validado</h5>
                              <p className="text-muted mb-0">
                                Basado en la teoría de Howard Gardner, reconocida mundialmente
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div
                            className="card border-0 h-100 shadow-sm card-hover"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(67, 233, 123, 0.1) 0%, rgba(56, 249, 215, 0.1) 100%)",
                            }}
                          >
                            <div className="card-body text-center p-4">
                              <div className="mb-3 floating-elemtent" style={{ animationDelay: "0.2s" }}>
                                <span className="display-6">⚡</span>
                              </div>
                              <h5 className="fw-bold text-dark mb-2">Rápido y Preciso</h5>
                              <p className=" text-muted mb-0">
                                85 preguntas diseñadas para máxima precisión en mínimo tiempo
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div
                            className="card border-0 h-100 shadow-sm card-hover"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(247, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.1) 100%)",
                            }}
                          >
                            <div className="card-body text-center p-4">
                              <div className="mb-3 floating-elemtent" style={{ animationDelay: "0.2s" }}>
                                <span className="display-6">📊</span>
                              </div>
                              <h5 className="fw-bold text-dark mb-2">Resultados Detallados</h5>
                              <p className=" text-muted mb-0">
                                Análisis completo con recomendaciones personalizadas
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Información del Test */}
                       <div
                        className="card border-0 mb-5 shadow-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                        }}
                      >
                        <div className="card-body p-4">
                          <h4 className="h4 fw-bold text-dark mb-4 text-center">🌟 ¿Por qué hacer este test? 🌟</h4>
                          <div className="row g-4">
                            <div className="col-md-4">
                              <div className="d-flex align-items-start">
                                <div
                                  className="d-flex align-items-center justify-content-center rounded-circle me-4 text-white fw-bold shadow floating-element"
                                  style={{
                                    width: "52px",
                                    height: "32px",
                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    fontSize: "14px",
                                  }}
                                >
                                  💡
                                </div>
                                <div>
                                  <h5 className="fw-bold text-dark mb-2">Autoconocimiento</h5>
                                  <p className=" text-muted mb-0">
                                    Descubre tus fortalezas naturales y cómo potenciarlas
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="d-flex align-items-start">
                                <div
                                  className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold shadow"
                                  style={{
                                    width: "52px",
                                    height: "32px",
                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    fontSize: "14px",
                                  }}
                                >
                                  🎯
                                </div>
                                <div>
                                  <h5 className="fw-bold text-dark mb-2">Orientación Vocacional</h5>
                                  <p className=" text-muted mb-0">
                                    Encuentra carreras y actividades que se alineen contigo
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="d-flex align-items-start">
                                <div
                                  className="d-flex align-items-center justify-content-center rounded-circle me-3 text-white fw-bold shadow"
                                  style={{
                                    width: "52px",
                                    height: "32px",
                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    fontSize: "14px",
                                  }}
                                >
                                  🚀
                                </div>
                                <div>
                                  <h5 className="fw-bold text-dark mb-2">Mejora tu Aprendizaje</h5>
                                  <p className=" text-muted mb-0">Adapta tu método de estudio a tu estilo único</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Botón Principal */}
                      <div className="text-center">
                        <button
                          onClick={() => navigateToPage("introduccion")}
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
                            e.target.style.transform = "translateY(-2px)"
                            e.target.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.4)"
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "translateY(0)"
                            e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"
                          }}
                        >
                          🚀 Comenzar Test Ahora
                        </button>

                        <div className="mt-4">
                          <div className="row justify-content-center">
                            <div className="col-auto">
                              <small className="text-muted d-flex align-items-center">
                                <span className="me-2">⏱️</span>
                                Duración: 10-15 minutos
                              </small>
                            </div>
                            <div className="col-auto">
                              <small className="text-muted d-flex align-items-center">
                                <span className="me-2">📝</span>
                                85 preguntas
                              </small>
                            </div>
                            <div className="col-auto">
                              <small className="text-muted d-flex align-items-center">
                                <span className="me-2">🎯</span>
                                100% Gratuito
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Motivacional */}
                  <div className="text-center">
                    <div
                      className="bg-white rounded-4 p-4 shadow-lg"
                      style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.9)" }}
                    >
                      <p className="lead text-muted mb-2 fst-italic">
                        "La inteligencia no es una cantidad fija, sino un potencial que puede desarrollarse"
                      </p>
                      <small className="text-muted fw-semibold">- Howard Gardner, Psicólogo de Harvard</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return renderPage()
}
