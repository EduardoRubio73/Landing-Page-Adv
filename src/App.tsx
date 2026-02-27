import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Scale, 
  FileText, 
  Building2, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  CheckCircle2
} from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const areasRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const whatsappNumber = '15998034648'
  const whatsappMessage = 'Olá, gostaria de uma consultoria jurídica.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  const emailLink = 'mailto:zragencyia@gmail.com'

  useEffect(() => {
    // Hero entrance animation
    const heroTl = gsap.timeline({ delay: 0.3 })
    
    heroTl.fromTo('.hero-bg', 
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
    )
    .fromTo('.hero-overlay',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=1'
    )
    .fromTo('.logo',
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.nav-item',
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-headline span',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.04, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo('.hero-subheadline',
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.hero-cta',
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-microcopy',
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    )

    // Scroll animations for sections
    const sections = document.querySelectorAll('.animate-section')
    sections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Area cards stagger animation
    gsap.fromTo('.area-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: areasRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Team cards animation
    gsap.fromTo('.team-card',
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const practiceAreas = [
    {
      icon: Scale,
      title: 'Direito do Trabalho',
      description: 'Revisão de rescisões, ações de insalubridade, assédio, horas extras e defesa em auditorias trabalhistas.',
      image: '/images/img_trabalho.jpg'
    },
    {
      icon: FileText,
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, indenizações, direito de família e sucessões com segurança jurídica.',
      image: '/images/img_civil.jpg'
    },
    {
      icon: Building2,
      title: 'Direito Empresarial',
      description: 'Sociedades, contratos societários, recuperação judicial, due diligence e compliance preventivo.',
      image: '/images/img_empresarial.jpg'
    },
    {
      icon: Shield,
      title: 'Direito do Consumidor',
      description: 'Cancelamentos indevidos, negativação, cobranças abusivas e defeitos em produtos e serviços.',
      image: '/images/img_consumidor.jpg'
    }
  ]

  return (
    <div className="relative">
      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-gold/90 text-navy py-2 px-4 text-center text-sm font-medium">
          <div className="flex items-center justify-center gap-2">
            <span>PÁGINA DE DEMONSTRAÇÃO JURÍDICA</span>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="ml-4 hover:opacity-70 transition-opacity"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-${showDisclaimer ? '8' : '0'} left-0 right-0 z-50 transition-all duration-300 bg-navy/90 backdrop-blur-md border-b border-white/10`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="logo cursor-pointer" onClick={() => scrollToSection(heroRef)}>
              <span className="text-white font-display font-bold text-lg lg:text-xl tracking-tight">
                Alves <span className="text-gold">&</span> Souza
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {['Início', 'Áreas', 'Sobre', 'Contato'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const refs = [heroRef, areasRef, aboutRef, contactRef]
                    scrollToSection(refs[index])
                  }}
                  className="nav-item text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {['Início', 'Áreas', 'Sobre', 'Contato'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const refs = [heroRef, areasRef, aboutRef, contactRef]
                    scrollToSection(refs[index])
                  }}
                  className="block w-full text-left text-white/80 hover:text-gold text-lg uppercase tracking-widest transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="hero-bg absolute inset-0">
          <img
            src="/images/hero_office.jpg"
            alt="Modern Law Office"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="hero-headline font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none mb-6">
              {'Defesa Jurídica Estratégica'.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-3">{word}</span>
              ))}
            </h1>
            
            <p className="hero-subheadline text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-4">
              Mais de 10 anos defendendo direitos com técnica, clareza e proximidade.
            </p>
            
            <p className="hero-microcopy text-sm sm:text-base text-gold/90 mb-10">
              Atendimento humanizado presencial ou via teleconferência.
            </p>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center gap-3 btn-primary text-base sm:text-lg animate-pulse-gold"
            >
              <MessageCircle size={20} />
              Falar com Especialista agora
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce">
          <ChevronRight className="rotate-90" size={24} />
        </div>
      </section>

      {/* Practice Areas Section */}
      <section 
        ref={areasRef}
        className="section-light py-20 lg:py-32"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-section">
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold">Áreas de Atuação</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mt-4 uppercase">
                Especialidades Jurídicas
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {practiceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="area-card group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-gold transition-all duration-500 border border-navy/10"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 h-48 lg:h-auto overflow-hidden">
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                          <area.icon className="text-gold" size={24} />
                        </div>
                        <h3 className="font-display font-bold text-xl text-navy">{area.title}</h3>
                      </div>
                      <p className="text-navy/70 text-sm leading-relaxed mb-4">
                        {area.description}
                      </p>
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Saiba mais <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="section-light py-20 lg:py-32 border-t border-navy/10"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-section">
                <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold">Sobre Nós</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mt-4 uppercase">
                  Alves <span className="text-gold">&</span> Souza
                </h2>
                <div className="w-24 h-1 bg-gold mt-6 mb-8" />
                <p className="text-navy/80 text-lg leading-relaxed mb-6">
                  Somos um escritório dedicado a resolver com clareza, estratégia e respeito pelo tempo dos nossos clientes. Nossa atuação é pautada pela excelência técnica e pelo relacionamento próximo.
                </p>
                <p className="text-navy/70 leading-relaxed mb-8">
                  Com mais de uma década de experiência, combinamos conhecimento jurídico sólido com uma abordagem humanizada, garantindo que cada cliente receba atenção personalizada e soluções eficazes.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-navy/80">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span className="text-sm">Atendimento Personalizado</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy/80">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span className="text-sm">+10 Anos de Experiência</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy/80">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span className="text-sm">Resposta em 24h</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Dr. Kelvin Alves */}
                <div className="team-card bg-white p-6 rounded-sm shadow-lg border border-navy/10 flex items-center gap-6">
                  <img 
                    src="/images/team_kelvin.jpg" 
                    alt="Dr. Kelvin Alves"
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full border-2 border-gold"
                  />
                  <div>
                    <h3 className="font-display font-bold text-xl text-navy">Dr. Kelvin Alves</h3>
                    <p className="text-gold text-sm font-semibold mb-2">OAB/SP 425.817</p>
                    <p className="text-navy/70 text-sm leading-relaxed">
                      Especialista em Direito Trabalhista e Empresarial. Mestrado em Gestão Jurídica pela USP.
                    </p>
                  </div>
                </div>

                {/* Dra. Khloe Souza */}
                <div className="team-card bg-white p-6 rounded-sm shadow-lg border border-navy/10 flex items-center gap-6">
                  <img 
                    src="/images/team_khloe.jpg" 
                    alt="Dra. Khloe Souza"
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full border-2 border-gold"
                  />
                  <div>
                    <h3 className="font-display font-bold text-xl text-navy">Dra. Khloe Souza</h3>
                    <p className="text-gold text-sm font-semibold mb-2">OAB/SP 438.192</p>
                    <p className="text-navy/70 text-sm leading-relaxed">
                      Especialista em Direito Civil e do Consumidor. Pós-graduada em Mediação e Arbitragem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className="section-dark py-20 lg:py-32 relative"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Info */}
              <div className="animate-section">
                <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold">Contato</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 uppercase">
                  Fale com um Especialista
                </h2>
                <div className="w-24 h-1 bg-gold mt-6 mb-8" />
                <p className="text-white/70 text-lg leading-relaxed mb-10">
                  Resposta em até 24 horas. Atendimento personalizado para entender suas necessidades e oferecer a melhor solução jurídica.
                </p>

                <div className="space-y-6">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Phone className="text-gold group-hover:text-navy transition-colors" size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">WhatsApp</p>
                      <p className="text-white font-semibold">(15) 99803-4648</p>
                    </div>
                  </a>

                  <a 
                    href={emailLink}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Mail className="text-gold group-hover:text-navy transition-colors" size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">E-mail</p>
                      <p className="text-white font-semibold">zragencyia@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-gold" size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Atendimento</p>
                      <p className="text-white font-semibold">Presencial ou Teleconferência</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 btn-outline mt-10"
                >
                  <MessageCircle size={20} />
                  WhatsApp Rápido
                </a>
              </div>

              {/* Right Column - Form */}
              <div className="animate-section">
                <form className="bg-white/5 backdrop-blur-sm p-8 lg:p-10 rounded-sm border border-white/10">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Nome completo</label>
                      <input 
                        type="text" 
                        placeholder="Seu nome"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/70 text-sm mb-2">E-mail</label>
                        <input 
                          type="email" 
                          placeholder="seu@email.com"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm mb-2">Telefone</label>
                        <input 
                          type="tel" 
                          placeholder="(00) 00000-0000"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Assunto</label>
                      <select className="w-full">
                        <option value="">Selecione uma área</option>
                        <option value="trabalho">Direito do Trabalho</option>
                        <option value="civil">Direito Civil</option>
                        <option value="empresarial">Direito Empresarial</option>
                        <option value="consumidor">Direito do Consumidor</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Mensagem</label>
                      <textarea 
                        rows={4}
                        placeholder="Descreva sua situação..."
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full btn-primary"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(whatsappLink, '_blank')
                      }}
                    >
                      Enviar mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-white/10 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {/* Brand */}
              <div>
                <span className="text-white font-display font-bold text-xl tracking-tight">
                  Alves <span className="text-gold">&</span> Souza
                </span>
                <p className="text-white/50 text-sm mt-4 leading-relaxed">
                  Advocacia técnica e próxima. Mais de 10 anos defendendo direitos com excelência.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2">
                  {['Início', 'Áreas de Atuação', 'Sobre Nós', 'Contato'].map((item, index) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          const refs = [heroRef, areasRef, aboutRef, contactRef]
                          scrollToSection(refs[index])
                        }}
                        className="text-white/50 hover:text-gold text-sm transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-white font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-white/50 text-sm">
                  <li>WhatsApp: (15) 99803-4648</li>
                  <li>Email: zragencyia@gmail.com</li>
                  <li>Atendimento: 24 horas</li>
                </ul>
              </div>
            </div>

            {/* Promotional Box */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/30 rounded-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-gold font-display font-bold text-lg">Tenha uma Landing Page como esta</h4>
                  <p className="text-white/70 text-sm">Por apenas <span className="text-gold font-bold">R$ 500,00</span> + Parceria Hostinger</p>
                </div>
                <a
                  href="https://www.hostinger.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-sm hover:bg-gold-light transition-colors"
                >
                  Saiba mais <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm">
                © 2026 Alves & Souza Advogados. Todos os direitos reservados.
              </p>
              <p className="text-white/40 text-sm flex items-center gap-2">
                Desenvolvido por 
                <a 
                  href="https://www.hostinger.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  ZR Agency AI Developer
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-gold"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white" size={28} />
      </a>
    </div>
  )
}

export default App
