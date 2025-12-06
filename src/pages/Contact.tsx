import { useState, useEffect, useRef } from 'react'
import { EnvelopeIcon, UserIcon, PhoneIcon, CubeIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, PencilSquareIcon, CheckCircleIcon, IdentificationIcon, ClockIcon, BuildingOffice2Icon, MapPinIcon, CalendarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const fadeElements = pageRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    if (formData.phone && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      productType: '',
      message: ''
    })

    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div ref={pageRef}>
      <div className="page-header-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1><EnvelopeIcon className="heroicon header-icon" /> Nous Contacter</h1>
          <p>Prenez contact avec nos équipes pour vos projets</p>
        </div>
      </div>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container fade-in">
              <h3><PencilSquareIcon className="heroicon" /> Demande de devis</h3>
              
              {submitSuccess && (
                <div className="success-message">
                  <CheckCircleIcon className="heroicon" /> Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name"><UserIcon className="heroicon" /> Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Votre nom complet"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email"><EnvelopeIcon className="heroicon" /> Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="votre@email.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone"><PhoneIcon className="heroicon" /> Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="+229 XX XX XX XX"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="productType"><CubeIcon className="heroicon" /> Type de produit</label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez un type de produit</option>
                    <option value="poissons">Poissons nobles</option>
                    <option value="crustaces">Crustacés & Coquillages</option>
                    <option value="equipements">Équipements aquacoles</option>
                    <option value="services">Services logistiques</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message"><ChatBubbleLeftRightIcon className="heroicon" /> Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Décrivez votre projet ou vos besoins..."
                    rows={5}
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  <PaperAirplaneIcon className="heroicon" /> {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>
              </form>
            </div>

            <div className="contact-info-container">
              <div className="contact-info-card fade-in">
                <h4><IdentificationIcon className="heroicon" /> Coordonnées</h4>
                <div className="contact-info-item">
                  <span className="contact-icon">
                    <PhoneIcon className="heroicon" />
                  </span>
                  <div>
                    <p><strong>Téléphone</strong></p>
                    <p>+229 XX XX XX XX (Cotonou)</p>
                    <p>+225 XX XX XX XX (Abidjan)</p>
                    <p>+228 XX XX XX XX (Lomé)</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon">
                    <EnvelopeIcon className="heroicon" />
                  </span>
                  <div>
                    <p><strong>Email</strong></p>
                    <p>contact@comatra-fm.com</p>
                    <p>commercial@comatra-fm.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon">
                    <i className='bx bxl-whatsapp'></i>
                  </span>
                  <div>
                    <p><strong>WhatsApp</strong></p>
                    <p>+229 XX XX XX XX</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-card fade-in">
                <h4><ClockIcon className="heroicon" /> Horaires d'ouverture</h4>
                <ul className="hours-list">
                  <li>
                    <span><CalendarDaysIcon className="heroicon" /> Lundi - Vendredi</span>
                    <span>7h00 - 18h00</span>
                  </li>
                  <li>
                    <span><CalendarDaysIcon className="heroicon" /> Samedi</span>
                    <span>7h00 - 13h00</span>
                  </li>
                  <li>
                    <span><CalendarIcon className="heroicon" /> Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>

              <div className="contact-info-card fade-in">
                <h4><BuildingOffice2Icon className="heroicon" /> Adresse principale</h4>
                <div className="contact-info-item">
                  <span className="contact-icon">
                    <MapPinIcon className="heroicon" />
                  </span>
                  <div>
                    <p><strong>Siège Bénin</strong></p>
                    <p>Zone Portuaire de Cotonou</p>
                    <p>Avenue Jean-Paul II</p>
                    <p>Cotonou, Bénin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
