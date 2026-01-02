import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

function App() {
  const { t, currentLanguage } = useLanguage();
  const [showCopied, setShowCopied] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentToolIndex, setCurrentToolIndex] = useState(0);
  const [currentExpIndex, setCurrentExpIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const carouselRef = useRef(null);
  const toolsCarouselRef = useRef(null);
  const expCarouselRef = useRef(null);
  const email = 'davidcigaran@gmail.com';

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar al cargar
    checkIfMobile();
    
    // Verificar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const certifications = [
    { id: 1, title: 'eJPT', image: '/img/ejpt.png', expedition: '2026' },
    { id: 2, title: 'Cibersecurity Profile Recon', image: '/img/f3.png', expedition: '2025' },
    { id: 3, title: 'Burp Suite Certified', image: '/img/portswigger.png', expedition: '2026' },
    { id: 4, title: 'AWS', image: '/img/aws.png', expedition: '2022' }
  ];

  // Educación con traducciones
  const educationHistory = [
    { 
      id: 1, 
      title: t('education.0.title', { defaultValue: 'Educación Secundaria Obligatoria (E.S.O)' }), 
      date: '2019', 
      institution: 'Ntra.Sra del Rosario Dominicas Barakaldo' 
    },
    { 
      id: 2, 
      title: t('education.1.title', { defaultValue: 'Grado Medio Hostelería y Turismo' }), 
      date: '2019-2021', 
      institution: 'UPV/EHU Leioa' 
    },
    { 
      id: 3, 
      title: t('education.2.title', { defaultValue: 'Aprendizaje de metodologías similares a S.M.R (Sistemas Microinformáticos en Redes)' }), 
      date: '2021-2022', 
      institution: 'Campus Training Bilbao' 
    },
    { 
      id: 4, 
      title: t('education.3.title', { defaultValue: 'Administración de Sistemas Informáticos en Redes (A.S.I.R)' }), 
      date: '2023-2025', 
      institution: 'Centro de Estudios ALMI (Deusto)' 
    },
    { 
      id: 5, 
      title: t('education.4.title', { defaultValue: 'Bootcamp de Ciberseguridad' }), 
      date: '2025-2026', 
      institution: 'The Bridge' 
    }
  ];

  // Experiencia con traducciones
  const experienceSliderData = [
    {
      id: 1,
      type: 'professional',
      title: t('experience.professional.title', { defaultValue: 'Centro de Estudios ALMI' }),
      subtitle: t('experience.professional.subtitle', { defaultValue: 'Prácticas Profesionales' }),
      period: t('experience.professional.period', { defaultValue: 'Febrero 2025 – Mayo 2025' }),
      icon: '💼',
      intro: t('experience.professional.intro', { defaultValue: 'Durante mis prácticas profesionales en el Centro de Estudios ALMI, participé en el desarrollo y adaptación de la página web del Centro de Día de Basurto, ajustándola a los requisitos funcionales y técnicos solicitados.' }),
      responsibilities: [
        { icon: '📤', text: t('experience.professional.responsibility1', { defaultValue: 'Importación y exportación completa del sitio web, gestionando contenido y estructura.' }) },
        { icon: '🗄', text: t('experience.professional.responsibility2', { defaultValue: 'Creación, configuración y mantenimiento de bases de datos.' }) },
        { icon: '🔌', text: t('experience.professional.responsibility3', { defaultValue: 'Gestión y optimización de plugins para el correcto uso del personal y usuarios.' }) },
        { icon: '📝', text: t('experience.professional.responsibility4', { defaultValue: 'Elaboración de documentación técnica y registro de cambios realizados.' }) }
      ],
      technologies: ['WordPress', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      type: 'academic',
      title: t('experience.academic.title', { defaultValue: 'Proyectos Académicos' }),
      subtitle: t('experience.academic.subtitle', { defaultValue: 'The Bridge & Formación ASIR' }),
      period: t('experience.academic.period', { defaultValue: '2023 – 2026' }),
      icon: '🎓',
      intro: t('experience.academic.intro', { defaultValue: 'Desarrollo de proyectos prácticos enfocados en ciberseguridad y administración de sistemas.' }),
      projects: [
        {
          title: t('experience.academic.project1.title', { defaultValue: 'Laboratorios de Pentesting' }),
          items: [
            t('experience.academic.project1.item1', { defaultValue: 'Configuración de entornos de red seguros' }),
            t('experience.academic.project1.item2', { defaultValue: 'Análisis de vulnerabilidades' }),
            t('experience.academic.project1.item3', { defaultValue: 'Pruebas de penetración controladas' })
          ]
        },
        {
          title: t('experience.academic.project2.title', { defaultValue: 'Administración de Sistemas' }),
          items: [
            t('experience.academic.project2.item1', { defaultValue: 'Gestión de servidores Windows y Linux' }),
            t('experience.academic.project2.item2', { defaultValue: 'Configuración de servicios de red' }),
            t('experience.academic.project2.item3', { defaultValue: 'Aplicación de políticas de seguridad' })
          ]
        }
      ],
      technologies: ['Kali Linux', 'VirtualBox', 'DVWA', 'Metasploitable', 'Windows Server', 'Ubuntu Server', 'Active Directory', 'Docker']
    }
  ];

  // Herramientas con traducciones
  const toolsCategories = [
    {
      title: t('tools.categories.0.title', { defaultValue: 'Sistemas Operativos' }),
      items: [
        t('tools.categories.0.items.0', { defaultValue: 'Kali' }),
        t('tools.categories.0.items.1', { defaultValue: 'Parrot' }),
        t('tools.categories.0.items.2', { defaultValue: 'Ubuntu && Ubuntu Server' }),
        t('tools.categories.0.items.3', { defaultValue: 'Win 7' }),
        t('tools.categories.0.items.4', { defaultValue: 'Win 10' }),
        t('tools.categories.0.items.5', { defaultValue: 'Win Server' }),
        t('tools.categories.0.items.6', { defaultValue: 'Zorin' }),
        t('tools.categories.0.items.7', { defaultValue: 'Tails' })
      ]
    },
    {
      title: t('tools.categories.1.title', { defaultValue: 'OSINT' }),
      items: [
        t('tools.categories.1.items.0', { defaultValue: 'Google Dorks' }),
        t('tools.categories.1.items.1', { defaultValue: 'Censys' }),
        t('tools.categories.1.items.2', { defaultValue: 'Shodan' }),
        t('tools.categories.1.items.3', { defaultValue: 'SpiderFoot' }),
        t('tools.categories.1.items.4', { defaultValue: 'FOCA' }),
        t('tools.categories.1.items.5', { defaultValue: 'Maltego' }),
        t('tools.categories.1.items.6', { defaultValue: 'HTTrack' }),
        t('tools.categories.1.items.7', { defaultValue: 'ExifTool' })
      ]
    },
    {
      title: t('tools.categories.2.title', { defaultValue: 'Escaneo Web y Fuzzing' }),
      items: [
        t('tools.categories.2.items.0', { defaultValue: 'Nikto' }),
        t('tools.categories.2.items.1', { defaultValue: 'Dirb' }),
        t('tools.categories.2.items.2', { defaultValue: 'DirBuster' }),
        t('tools.categories.2.items.3', { defaultValue: 'DirSearch' }),
        t('tools.categories.2.items.4', { defaultValue: 'GoBuster' }),
        t('tools.categories.2.items.5', { defaultValue: 'Burp Suite' }),
        t('tools.categories.2.items.6', { defaultValue: 'SQLMap' })
      ]
    },
    {
      title: t('tools.categories.3.title', { defaultValue: 'Análisis de Red' }),
      items: [
        t('tools.categories.3.items.0', { defaultValue: 'Nmap' }),
        t('tools.categories.3.items.1', { defaultValue: 'ARP-Scan' }),
        t('tools.categories.3.items.2', { defaultValue: 'Ping' }),
        t('tools.categories.3.items.3', { defaultValue: 'cURL' }),
        t('tools.categories.3.items.4', { defaultValue: 'Netcat' }),
        t('tools.categories.3.items.5', { defaultValue: 'Wireshark' }),
        t('tools.categories.3.items.6', { defaultValue: 'OpenSSL' })
      ]
    },
    {
      title: t('tools.categories.4.title', { defaultValue: 'Escaneo y Virtualización' }),
      items: [
        t('tools.categories.4.items.0', { defaultValue: 'Nessus' }),
        t('tools.categories.4.items.1', { defaultValue: 'Greenbone' }),
        t('tools.categories.4.items.2', { defaultValue: 'DVWA' }),
        t('tools.categories.4.items.3', { defaultValue: 'AWS' }),
        t('tools.categories.4.items.4', { defaultValue: 'VirtualBox' })
      ]
    },
    {
      title: t('tools.categories.5.title', { defaultValue: 'Control y Explotación' }),
      items: [
        t('tools.categories.5.items.0', { defaultValue: 'Hydra' }),
        t('tools.categories.5.items.1', { defaultValue: 'John' }),
        t('tools.categories.5.items.2', { defaultValue: 'Hash-Identifier' }),
        t('tools.categories.5.items.3', { defaultValue: 'Decode' }),
        t('tools.categories.5.items.4', { defaultValue: 'Metasploit' }),
        t('tools.categories.5.items.5', { defaultValue: 'Bash' }),
        t('tools.categories.5.items.6', { defaultValue: 'MySQL' })
      ]
    }
  ];

  const renderHTML = (text) => {
    return { __html: text };
  };

  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  const nextCertSlide = () => {
    setCurrentCertIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertSlide = () => {
    setCurrentCertIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const nextToolSlide = () => {
    setCurrentToolIndex((prevIndex) => 
      prevIndex === 5 ? 0 : prevIndex + 1
    );
  };

  const prevToolSlide = () => {
    setCurrentToolIndex((prevIndex) => 
      prevIndex === 0 ? 5 : prevIndex - 1
    );
  };

  // Funciones para el slider de experiencia
  const nextExpSlide = () => {
    setCurrentExpIndex((prevIndex) => 
      prevIndex === experienceSliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevExpSlide = () => {
    setCurrentExpIndex((prevIndex) => 
      prevIndex === 0 ? experienceSliderData.length - 1 : prevIndex - 1
    );
  };

  // Manejar clic en el carrusel de herramientas
  const handleCarouselClick = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    if (clickX < containerWidth / 2) {
      prevToolSlide();
    } else {
      nextToolSlide();
    }
  };

  // Manejar clic en el slider de experiencia
  const handleExpCarouselClick = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    if (clickX < containerWidth / 2) {
      prevExpSlide();
    } else {
      nextExpSlide();
    }
  };

  // Función para expandir/contraer la sección "¿Quién Soy?"
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Auto-rotate carousels
  useEffect(() => {
    const certInterval = setInterval(() => {
      nextCertSlide();
    }, 5000);

    const expInterval = setInterval(() => {
      nextExpSlide();
    }, 7000);

    return () => {
      clearInterval(certInterval);
      clearInterval(expInterval);
    };
  }, [currentCertIndex, currentExpIndex]);

  return (
    <div className="App">
      {/* Header simple para móviles (solo logo y selector de idioma) */}
      <header className="header">
        <div className="language-selector-top-left">
          <LanguageSelector />
        </div>

        <nav className="nav">
          <a href="/" className="logo">{t('nav.logo', { defaultValue: 'Krater' })}</a>

          {/* Menú de navegación completo SOLO en desktop */}
          {!isMobile && (
            <>
              <div className="nav-links">
                <a href="#about">{t('nav.about', { defaultValue: 'Sobre mí' })}</a>
                <a href="#certifications">{t('nav.certifications', { defaultValue: 'Certificaciones' })}</a>
                <a href="#experience">{t('nav.experience', { defaultValue: 'Experiencia' })}</a>
                <a href="#a_history">{t('nav.education', { defaultValue: 'Educación' })}</a>
                <a href="#habilidades">{t('nav.tools', { defaultValue: 'Herramientas' })}</a>
                <div className="contact-item">
                  <a href="#contact" className="contact-link">
                    {t('nav.contact', { defaultValue: 'Contacto' })}
                  </a>
                  <div className="phone-tooltip">
                    <span className="phone-number">688 84 65 27</span>
                    <div className="phone-tooltip-arrow"></div>
                  </div>
                </div>
              </div>

              <div className="nav-right">
                <div className="header-buttons">
                  <a 
                    href="https://www.youtube.com/@TodMacgover-v7h" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    {t('nav.projects', { defaultValue: 'Proyectos' })}
                  </a>
                  <div className="social">
                    <a 
                      href="https://www.linkedin.com/in/david-cigaran-53b765205/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t('hero.linkedin', { defaultValue: 'LinkedIn' })}
                    </a>
                    <a 
                      href="https://github.com/daviovenator" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t('hero.github', { defaultValue: 'GitHub' })}
                    </a>
                  </div>
                </div>
                <div className="language-selector">
                  <LanguageSelector />
                </div>
              </div>
            </>
          )}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div 
            className="hero-image" 
            onClick={() => setShowImageModal(true)}
            title={t('modals.click_to_enlarge', { defaultValue: 'Click para ampliar' })}
          >
            <img 
              src="/img/dav.jpg" 
              alt="Profile" 
              className="profile-img" 
            />
          </div>
          <div className="hero-text">
            <h1 dangerouslySetInnerHTML={renderHTML(t('hero.title', { defaultValue: 'Hola, soy David<br>' }))} />
            <p className="tagline">{t('hero.tagline', { defaultValue: 'Apasionado en pentest y hacking ético' })}</p>
            <p className="description" dangerouslySetInnerHTML={renderHTML(t('hero.description', { defaultValue: 'Especializado en pruebas de penetración, análisis de vulnerabilidades y seguridad ofensiva. Constantemente aprendiendo y mejorando mis habilidades en el mundo de la ciberseguridad.' }))} />
            <div className="hero-buttons">
              <a 
                href="https://www.linkedin.com/in/david-cigaran-53b765205/" 
                className="btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('hero.linkedin', { defaultValue: 'LinkedIn' })}
              </a>
              <a 
                href="https://www.youtube.com/@TodMacgover-v7h" 
                className="btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('hero.projects', { defaultValue: 'Proyectos' })}
              </a>
              <a 
                href="mailto:davidcigaran@gmail.com" 
                className="btn email-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyEmail();
                }}
              >
                {t('hero.email', { defaultValue: 'Email' })}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2>{t('about.title', { defaultValue: '¿Quién Soy?' })}</h2>
            <p className="about-subtitle">{t('about.subtitle', { defaultValue: 'Aprendiz junior' })}</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                {t('about.description1', { defaultValue: 'Mi nombre es David Cigarán Flores, tengo 23 años y recientemente he finalizado mis estudios de Administración de Sistemas Informáticos en Red (ASIR) y el bootcamp de Ciberseguridad en The Bridge, donde descubrí mi gusto por la seguridad ofensiva y el análisis de vulnerabilidades, más específicamente en el ámbito del Red Team.' })}
                {!isExpanded && (
                  <>
                    {' '}
                    <button 
                      className="read-more-btn"
                      onClick={toggleReadMore}
                    >
                      {t('about.readMore', { defaultValue: '... Leer más' })}
                    </button>
                  </>
                )}
              </p>
              
              {isExpanded && (
                <>
                  <p className="about-description">
                    {t('about.description2', { defaultValue: 'Durante mi formación he desarrollado una base sólida en redes, sistemas y metodologías de pentesting, y sigo ampliando mis conocimientos por interés propio. Me considero una persona responsable, con muchas ganas de aprender y con la capacidad de adaptarme rápidamente a nuevos entornos. Disfruto trabajando en equipo, compartiendo ideas y enfrentando retos técnicos que me permitan crecer.' })}
                  </p>
                  
                  <p className="about-description">
                    {t('about.description3', { defaultValue: 'Busco una oportunidad para iniciar mi carrera en un entorno donde pueda aprender de expertos, enfrentar desafíos reales y aportar desde el primer día. Mi objetivo es seguir mejorando poco a poco, reforzar mis habilidades y llegar a ser un buen profesional en el mundo de la ciberseguridad ofensiva.' })}
                  </p>
                  
                  <button 
                    className="read-less-btn"
                    onClick={toggleReadMore}
                  >
                    {t('about.readLess', { defaultValue: 'Leer menos' })}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section certifications-section">
        <div className="container">
          <h2 className="section-title">{t('sections.certifications', { defaultValue: 'Certificaciones e Insignias' })}</h2>
          
          <div className="certifications-carousel" ref={carouselRef}>
            <div className="carousel-wrapper">
              <div className="carousel-track" style={{ transform: `translateX(-${currentCertIndex * 100}%)` }}>
                {[...certifications, ...certifications, ...certifications].map((cert, index) => (
                  <div key={`${cert.id}-${index}`} className="carousel-slide">
                    <div className="cert-card">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="cert-image"
                      />
                      <div className="cert-content">
                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-expedition">{t('certifications.expedition', { defaultValue: 'Expedición' })}: {cert.expedition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="carousel-btn prev-btn" onClick={prevCertSlide}>
              {t('buttons.prev', { defaultValue: '‹' })}
            </button>
            <button className="carousel-btn next-btn" onClick={nextCertSlide}>
              {t('buttons.next', { defaultValue: '›' })}
            </button>
            
            <div className="carousel-indicators">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentCertIndex % certifications.length ? 'active' : ''}`}
                  onClick={() => setCurrentCertIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br />
      
      {/* SECCIÓN EXPERIENCIA CON SLIDER */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">{t('sections.experience', { defaultValue: 'Experiencia Profesional' })}</h2>
          
          <div className="experience-slider-instruction">
            {t('experience.instruction', { defaultValue: '(Haz clic en los lados de la tarjeta o usa los controles para navegar)' })}
          </div>

          <div className="experience-slider-container" ref={expCarouselRef} onClick={handleExpCarouselClick}>
            <div 
              className="experience-slider-track" 
              style={{ 
                transform: `translateX(-${currentExpIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {experienceSliderData.map((exp, index) => (
                <div key={exp.id} className="experience-slide">
                  <div className={`experience-card ${exp.type === 'professional' ? 'highlight' : ''}`}>
                    <div className="experience-header">
                      <div className="experience-icon">{exp.icon}</div>
                      <div>
                        <h3 className="experience-card-title">{exp.title}</h3>
                        <p className="experience-subtitle">{exp.subtitle}</p>
                        <span className="experience-period">{exp.period}</span>
                      </div>
                    </div>

                    <div className="experience-body">
                      <p className="experience-intro">
                        {exp.intro}
                      </p>

                      {exp.type === 'professional' ? (
                        <>
                          <h4 className="experience-section-subtitle">
                            {t('experience.responsibilities', { defaultValue: 'Principales responsabilidades' })}
                          </h4>
                          <ul className="experience-tasks">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i}>
                                <span>{item.icon}</span>
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <>
                          <div className="academic-projects">
                            {exp.projects.map((project, i) => (
                              <div key={i} className="project-column">
                                <h4>{project.title}</h4>
                                <ul>
                                  {project.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      <h4 className="experience-section-subtitle">
                        {t('experience.technologies', { defaultValue: 'Tecnologías utilizadas' })}
                      </h4>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-slider-controls">
            <button className="exp-slider-btn prev-btn" onClick={prevExpSlide}>
              {t('buttons.prev', { defaultValue: '‹' })}
            </button>
            
            <div className="exp-slider-indicators">
              {experienceSliderData.map((_, index) => (
                <button
                  key={index}
                  className={`exp-indicator ${index === currentExpIndex ? 'active' : ''}`}
                  onClick={() => setCurrentExpIndex(index)}
                />
              ))}
            </div>
            
            <button className="exp-slider-btn next-btn" onClick={nextExpSlide}>
              {t('buttons.next', { defaultValue: '›' })}
            </button>
          </div>
        </div>
      </section>
      <br /><br />

      <section id="a_history" className="section education-section">
        <div className="container">
          <h2 className="section-title education-title">
            {t('sections.education', { defaultValue: 'Historial Académico' })}
          </h2>
          
          <div className="timeline">
            {educationHistory.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-date">{item.date}</div>
                  <p className="timeline-institution">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN HABILIDADES - CARRUSEL */}
      <section id="habilidades" className="section">
        <div className="container">
          <h2 className="section-title">{t('sections.tools', { defaultValue: 'Experiencia en:' })}</h2>     
          
          <div className="carrusel-instruccion">
            {t('tools.instruction', { defaultValue: '(Haz clic en los lados de la tarjeta para deslizar)' })}
          </div>
          
          <div 
            id="habilidades-carousel-container"
            onClick={handleCarouselClick}
            ref={toolsCarouselRef}
          >
            <div 
              id="habilidades-carousel" 
              style={{ 
                transform: `translateX(-${currentToolIndex * 100}%)`,
                transition: 'transform 0.5s ease'
              }}
            >
              {toolsCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  className="habilidades-carousel-item" 
                  style={{ opacity: currentToolIndex === categoryIndex ? '1' : '0' }}
                >
                  <h3>{category.title}</h3>
                  <div className="skill-items">
                    {category.items.map((item, itemIndex) => {
                      // Mapear imágenes basadas en el índice
                      const imageMap = [
                        ['/img/kali.png', '/img/parrot.png', '/img/ubu.png', '/img/w7.jpeg', '/img/w10.png', '/img/w_server.png', '/img/zorin.png', '/img/tails.png'],
                        ['/img/Dorks.webp', '/img/cen.png', '/img/shodan.jpeg', '/img/spiderfoot.png', '/img/FOCA.png', '/img/maltego.png', '/img/httrack.png', '/img/exiftool.png'],
                        ['/img/nikto.jpeg', '/img/dirb.png', '/img/dirbuster.png', '/img/dirsearch.png', '/img/gobuster.png', '/img/Burp_suite.png', '/img/sqlmap.png'],
                        ['/img/nmap.jpeg', '/img/arp.png', '/img/ping.jpeg', '/img/curl.png', '/img/netcat.png', '/img/wireshark.jpeg', '/img/OpenSSL.jpg'],
                        ['/img/nessus.png', '/img/greenbone.png', '/img/dvwa.jpeg', '/img/aws.png', '/img/vbox.png'],
                        ['/img/hidra.png', '/img/john.png', '/img/hash.jpeg', '/img/decode.png', '/img/meta.png', '/img/bash.png', '/img/mysql.png']
                      ];
                      
                      const imageSrc = imageMap[categoryIndex]?.[itemIndex] || '/img/default.png';
                      const altText = item.split(' ')[0]; // Primera palabra como alt
                      
                      return (
                        <div key={itemIndex} className="item">
                          <img src={imageSrc} alt={altText}/>
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-indicators">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentToolIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentToolIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {showImageModal && (
        <div className="modal-overlay" onClick={() => setShowImageModal(false)}>
          <img 
            src="/img/kali.png" 
            alt="Profile ampliada" 
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="modal-close-btn"
            onClick={() => setShowImageModal(false)}
            aria-label={t('modals.close_image', { defaultValue: 'Cerrar imagen' })}
          >
            ✕
          </button>
        </div>
      )}

      {showCopied && (
        <div className="copy-toast">
          {t('modals.email_copied', { defaultValue: '📋 Email copiado al portapapeles' })}
        </div>
      )}

      <footer className="footer">
        {t('footer.copyright', { defaultValue: '© [YEAR] David Cigarán. Todos los derechos reservados.' })
          .replace('[YEAR]', currentYear)}
      </footer>
      <div className="background-effect"></div>
    </div>
  );
}

export default App;
