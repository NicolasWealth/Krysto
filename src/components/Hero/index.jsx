import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <h1 className="hero-title">
          Krysto
        </h1>

        <p className="hero-subtitle">
          AI study planner that turns your goals into daily tasks.
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

      </div>
    </section>
  )
}

export default Hero