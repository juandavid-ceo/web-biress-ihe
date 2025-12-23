import React, { useEffect, useRef } from 'react';

// --- ICONOS SVG ---
const Icons = {
  Preventive: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-9h-2M6 12H3m12-3.464l-1.06-1.06M18.364 6.636l-1.06-1.06M6.636 18.364l-1.06-1.06M18.364 18.364l-1.06-1.06M12 12a5 5 0 100-10 5 5 0 000 10z" /></svg>
  ),
  Corrective: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
  ),
  Electric: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  )
};

// --- SUBCOMPONENTES ---

const Header: React.FC = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <a href="#" className="font-teko text-3xl font-bold text-blue-900 uppercase">BIRESS IHE</a>
      <a href="#contact" className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">Contáctenos</a>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20 text-center">
    <div className="container mx-auto px-6">
      <h1 className="font-teko text-5xl md:text-7xl font-bold uppercase leading-tight tracking-wide">
        Más de 20 Años de Experiencia al Servicio de la <span className="text-orange-500">Confiabilidad</span>
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Expertos que mantienen sus sistemas vitales en óptimo funcionamiento.</p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a href="#services" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-all">Ver Servicios</a>
        <a href="#contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-900 transition-all">Solicitar Cotización</a>
      </div>
    </div>
  </section>
);

const AboutUs: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('is-visible') });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-teko text-5xl font-bold text-blue-900 uppercase animate-on-scroll">Quiénes Somos</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 mb-12 animate-on-scroll"></div>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 animate-on-scroll">
          <p>Somos <strong>Biress IHE</strong>, una empresa familiar que une la excelencia técnica con una administración moderna. Dirigida por <strong>Néstor Rolando Parada Villamil</strong> (20+ años de experiencia) y gestionada por <strong>Juan David Parada Palma</strong>.</p>
          <p className="font-bold text-orange-500 italic">Cuidamos los sistemas vitales de su edificio como si fueran propios.</p>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const services = [
    { title: "Mantenimiento Preventivo", desc: ["Ajuste de electrobombas y tableros.", "Calibración de sistemas de nivel.", "Medición de parámetros eléctricos."], ben: "Reduce fallas y optimiza consumo.", icon: <Icons.Preventive /> },
    { title: "Mantenimiento Correctivo", desc: ["Cambio de rodamientos y sellos.", "Bobinado profesional de motores.", "Diagnósticos técnicos honestos."], ben: "Equipos restaurados por expertos.", icon: <Icons.Corrective /> },
    { title: "Plantas Eléctricas", desc: ["Inspección de fluidos y filtros.", "Pruebas de transferencia (ATS).", "Verificación de baterías."], ben: "Energía constante siempre.", icon: <Icons.Electric /> }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-teko text-5xl font-bold text-blue-900 uppercase">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-all border-b-4 border-orange-500">
              <div className="text-orange-500 mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{s.title}</h3>
              <ul className="text-gray-600 mb-6 space-y-1 list-disc list-inside">
                {s.desc.map((d, j) => <li key={j} className="text-sm">{d}</li>)}
              </ul>
              <p className="text-sm font-bold text-blue-800 bg-orange-50 p-2 rounded">Beneficio: {s.ben}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-blue-900 text-white text-center">
    <div className="container mx-auto px-6">
      <h2 className="font-teko text-5xl font-bold uppercase">Contáctenos</h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white text-blue-900 p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Juan David Parada</h3>
          <p className="flex justify-center items-center text-xl font-bold mb-2"><Icons.Phone /> <a href="tel:3243178095">324 317 8095</a></p>
          <p className="flex justify-center items-center text-sm text-gray-500"><Icons.Mail /> juandavid.ceo@gmail.com</p>
        </div>
        <div className="bg-white text-blue-900 p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Néstor Rolando Parada</h3>
          <p className="flex justify-center items-center text-xl font-bold mb-2"><Icons.Phone /> <a href="tel:3123854376">312 385 4376</a></p>
          <p className="flex justify-center items-center text-sm text-gray-500"><Icons.Mail /> nerolan65@hotmail.com</p>
        </div>
      </div>
    </div>
  </section>
);

// --- APP ---
const App: React.FC = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <AboutUs />
    <Services />
    <Contact />
    <footer className="bg-gray-900 text-gray-500 py-10 text-center">
      <p className="font-bold text-white tracking-widest">BIRESS IHE</p>
      <p className="text-xs mt-2">© {new Date().getFullYear()} Todos los derechos reservados.</p>
    </footer>
  </div>
);

export default App;