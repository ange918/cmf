import { useState, useEffect, useRef } from 'react'

interface Stat {
  endValue: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { endValue: 15, suffix: '+', label: 'Partenaires scientifiques' },
  { endValue: 50, suffix: '+', label: 'Clients professionnels' },
  { endValue: 4, suffix: '', label: 'Sites aquacoles' },
  { endValue: 100, suffix: '%', label: 'Qualité garantie' },
]

function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const frameDuration = 1000 / 60
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCounts(stats.map(stat => Math.round(stat.endValue * easeOut)))

      if (frame === totalFrames) {
        clearInterval(timer)
        setCounts(stats.map(stat => stat.endValue))
      }
    }, frameDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section className="animated-stats-section section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Chiffres Clés</h2>
        <div className="animated-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`animated-stat-item ${isVisible ? 'visible' : ''}`}>
              <div className="stat-number">
                {counts[index]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
