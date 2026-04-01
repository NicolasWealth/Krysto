import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Now accepting early access
        </div>

        <h1 className="hero-title">
          Study smarter,<br />
          <span className="hero-title-italic">not harder</span>
        </h1>

        <p className="hero-subtitle">
          Krysto turns your exam goals into structured daily tasks —
          powered by AI, built for students.
        </p>

        <div className="hero-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="hero-input"
          />
          <button className="hero-button">
            Join Waitlist
          </button>
        </div>

        <p className="hero-meta">No spam. Unsubscribe anytime.</p>

      </div>
    </section>
  )
}

export default Hero
