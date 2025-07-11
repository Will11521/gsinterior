import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi! I would like to get a quote for home renovation.', '_blank');
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "GS Interior completely transformed our kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Property Owner",
      text: "Professional, reliable, and incredibly skilled. They turned our basement into a beautiful living space that we absolutely love.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Design Client",
      text: "The team at GS Interior has an amazing eye for design. They created a space that perfectly reflects our family's style and needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Renovation Client",
      text: "From start to finish, GS Interior delivered excellence. Our home renovation was completed on time and within budget.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Premium Gold-Accent Icons
  const HomeRenovationIcon = () => (
    <svg className="w-12 h-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  );

  const InteriorDesignIcon = () => (
    <svg className="w-12 h-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4M9 7h8a2 2 0 012 2v8a2 2 0 01-2 2h-8M9 7V5a2 2 0 012-2h6a2 2 0 012 2v2M9 7v8a2 2 0 002 2h6a2 2 0 002-2V9"/>
    </svg>
  );

  const ConstructionIcon = () => (
    <svg className="w-12 h-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  );

  const ExperienceIcon = () => (
    <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );

  const MaterialIcon = () => (
    <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
    </svg>
  );

  const ConsultationIcon = () => (
    <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
    </svg>
  );

  return (
    <div className="App">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-glass' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-accent-600">GS Interior</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white/90 hover:text-accent-300 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-accent-300 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-white/90 hover:text-accent-300 transition-colors font-medium">Why Choose Us</button>
              <button onClick={() => scrollToSection('gallery')} className="text-white/90 hover:text-accent-300 transition-colors font-medium">Gallery</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white/90 hover:text-accent-300 transition-colors font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/90 hover:text-accent-300 transition-colors font-medium">Contact</button>
            </div>
            <div className="flex space-x-4">
              <button onClick={() => scrollToSection('contact')} className="btn-primary bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1698864551603-0f7aefaebeb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzV8MHwxfHNlYXJjaHwxfHxkYXJrJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzUyMjU1Mjc5fDA&ixlib=rb-4.1.0&q=85"
            alt="Elegant dark interior design with moody lighting providing perfect contrast for text by GS Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/60 via-neutral-900/40 to-neutral-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${visibleSections.has('home') ? 'animate-fadeIn' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight py-8 hero-title">
              Transform Your Home Into a 
              <span className="text-accent-300 block gradient-text-hero">Luxury Haven</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert renovation and interior design services that bring your dream home to life with premium craftsmanship and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => scrollToSection('contact')} className="btn-primary bg-accent-500 hover:bg-accent-600 text-white px-10 py-5 rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-warm">
                Get Free Quote
              </button>
              <button onClick={openWhatsApp} className="whatsapp-button bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-section ${visibleSections.has('services') ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4 section-title">Our Premium Services</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From concept to completion, we deliver exceptional results that exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Renovation",
                description: "Complete home makeovers with modern design and premium finishes that transform your living space.",
                image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxob21lJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NTIyNTA3MDR8MA&ixlib=rb-4.1.0&q=85",
                icon: <HomeRenovationIcon />
              },
              {
                title: "Interior Design",
                description: "Sophisticated interior design services that create beautiful, functional spaces tailored to your lifestyle.",
                image: "https://images.unsplash.com/photo-1708704974484-3ca56db9384f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxsaXZpbmclMjByb29tJTIwcmVub3ZhdGlvbnxlbnwwfHx8d2hpdGV8MTc1MjI0NTkyNnww&ixlib=rb-4.1.0&q=85",
                icon: <InteriorDesignIcon />
              },
              {
                title: "Basement Finishing",
                description: "Transform your basement into a luxurious living space with professional finishing and design.",
                image: "https://images.unsplash.com/photo-1646592491963-07ff7e7c31f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxmaW5pc2hlZCUyMGJhc2VtZW50fGVufDB8fHx8MTc1MjI1MDcxMXww&ixlib=rb-4.1.0&q=85",
                icon: <ConstructionIcon />
              }
            ].map((service, index) => (
              <div key={index} className={`glass-card rounded-2xl overflow-hidden hover-lift fade-in-section ${
                visibleSections.has('services') ? 'is-visible' : ''
              }`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - ${service.title === 'Home Renovation' ? 'Active home renovation work in progress' : service.title === 'Interior Design' ? 'Elegant interior design services' : 'Beautiful polished finished basement'} by GS Interior`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-section ${visibleSections.has('why-choose') ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4 section-title">Why Choose GS Interior?</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We bring years of expertise, premium materials, and unwavering commitment to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Licensed & Insured",
                description: "Full licensing and comprehensive insurance coverage for your peace of mind.",
                icon: <ShieldIcon />
              },
              {
                title: "15+ Years Experience",
                description: "Over a decade of successful renovations and satisfied customers.",
                icon: <ExperienceIcon />
              },
              {
                title: "Premium Materials",
                description: "Only the finest materials and finishes for lasting beauty and durability.",
                icon: <MaterialIcon />
              },
              {
                title: "Free Consultations",
                description: "Complimentary design consultations to bring your vision to life.",
                icon: <ConsultationIcon />
              }
            ].map((feature, index) => (
              <div key={index} className={`glass-card rounded-2xl p-6 text-center hover-lift fade-in-section ${
                visibleSections.has('why-choose') ? 'is-visible' : ''
              }`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - CORRECTED BEFORE/AFTER IMAGES */}
      <section id="gallery" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-section ${visibleSections.has('gallery') ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4 section-title">Before & After Gallery</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              See the incredible transformations we've created for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                before: "https://images.unsplash.com/photo-1554585371-9ed98c579632?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxkYW1hZ2VkJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTIyNDkwMjl8MA&ixlib=rb-4.1.0&q=85",
                after: "https://images.unsplash.com/photo-1556595101-15dc5f6431e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NTIyNDkwMjN8MA&ixlib=rb-4.1.0&q=85",
                title: "Kitchen Renovation",
                beforeAlt: "Outdated kitchen with old brown cabinets before renovation by GS Interior",
                afterAlt: "Modern bright kitchen with white cabinets and bar seating after renovation by GS Interior"
              },
              {
                before: "https://images.unsplash.com/photo-1657213077302-79e89564a042?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxkYW1hZ2VkJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTIyNDkwMjl8MA&ixlib=rb-4.1.0&q=85",
                after: "https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NTIyNDkwMjN8MA&ixlib=rb-4.1.0&q=85",
                title: "Home Renovation",
                beforeAlt: "Severely damaged room with peeling walls and deteriorated conditions before renovation by GS Interior",
                afterAlt: "Luxury modern kitchen with wine storage and bright lighting after renovation by GS Interior"
              },
              {
                before: "https://images.unsplash.com/photo-1600331574095-4a20d3d8dd77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxkYW1hZ2VkJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTIyNDkwMjl8MA&ixlib=rb-4.1.0&q=85",
                after: "https://images.unsplash.com/photo-1611066415941-3262d8033fa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NTIyNDkwMjN8MA&ixlib=rb-4.1.0&q=85",
                title: "Interior Design",
                beforeAlt: "Abandoned kitchen with extensive peeling paint and damaged walls before renovation by GS Interior",
                afterAlt: "Elegant modern kitchen with stainless steel countertops after renovation by GS Interior"
              }
            ].map((item, index) => (
              <div key={index} className={`glass-card rounded-2xl overflow-hidden hover-lift fade-in-section ${
                visibleSections.has('gallery') ? 'is-visible' : ''
              }`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <div className="grid grid-cols-2 h-48">
                    <div className="relative overflow-hidden">
                      <img src={item.before} alt={item.beforeAlt} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img src={item.after} alt={item.afterAlt} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{item.title}</h3>
                    <p className="text-neutral-600 text-sm">Professional transformation by GS Interior</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-section ${visibleSections.has('testimonials') ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4 section-title">What Our Clients Say</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Hear from satisfied homeowners who trusted us with their dream renovations.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`glass-card rounded-2xl p-8 text-center fade-in-section ${
                      visibleSections.has('testimonials') ? 'is-visible' : ''
                    }`}>
                      <div className="flex justify-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} - Satisfied GS Interior renovation client`}
                          className="w-20 h-20 rounded-full"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <p className="text-lg text-neutral-700 italic mb-6">"{testimonial.text}"</p>
                      <div>
                        <h4 className="text-xl font-semibold text-neutral-800">{testimonial.name}</h4>
                        <p className="text-neutral-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="glass-card p-3 rounded-full hover:bg-accent-100 transition-colors"
              >
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-accent-500' : 'bg-neutral-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="glass-card p-3 rounded-full hover:bg-accent-100 transition-colors"
              >
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-section ${visibleSections.has('contact') ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4 section-title">Ready to Transform Your Home?</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Get in touch with us today for a free consultation and quote.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`fade-in-section ${visibleSections.has('contact') ? 'is-visible' : ''}`}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">Get Your Free Quote</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-base"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-base"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-base"
                  />
                  <select className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-base">
                    <option>Select Service</option>
                    <option>Home Renovation</option>
                    <option>Interior Design</option>
                    <option>Basement Finishing</option>
                    <option>Kitchen Renovation</option>
                    <option>Bathroom Renovation</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows="4"
                    className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-base"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full btn-primary bg-accent-500 hover:bg-accent-600 text-white px-8 py-5 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all shadow-warm"
                  >
                    Get Free Quote
                  </button>
                </form>
              </div>
            </div>
            
            <div className={`fade-in-section ${visibleSections.has('contact') ? 'is-visible' : ''}`}>
              <div className="space-y-8">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <span className="text-neutral-700">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span className="text-neutral-700">info@gsinterior.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span className="text-neutral-700">123 Renovation Ave, Design City, DC 12345</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Monday - Friday</span>
                      <span className="text-neutral-700">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Saturday</span>
                      <span className="text-neutral-700">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Sunday</span>
                      <span className="text-neutral-700">Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Why Choose GS Interior?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-neutral-700">Licensed & Insured</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-neutral-700">15+ Years Experience</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-neutral-700">Free Estimates</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-neutral-700">Quality Guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-200 text-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-accent-600 mb-4">GS Interior</h3>
              <p className="text-neutral-600 mb-4">
                Transforming homes with premium renovation and interior design services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-500 hover:text-accent-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-500 hover:text-accent-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-500 hover:text-accent-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Home Renovation</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Interior Design</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Basement Finishing</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Kitchen Renovation</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Bathroom Renovation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">About Us</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Our Team</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-neutral-600">123 Renovation Ave</p>
                <p className="text-neutral-600">Design City, DC 12345</p>
                <p className="text-neutral-600">(555) 123-4567</p>
                <p className="text-neutral-600">info@gsinterior.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-400 mt-12 pt-8 text-center">
            <p className="text-neutral-600">&copy; 2024 GS Interior Renovation & Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-float z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
        </svg>
      </button>
    </div>
  );
};

export default App;