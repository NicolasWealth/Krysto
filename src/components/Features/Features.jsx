import "./Features.css"

function Features() {
  return (
    <section className="features">
      <div className="features-container">

        <h2 className="features-title">
          How Krysto Helps You Study
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>AI Study Plans</h3>
            <p>
              Turn exam goals into structured daily study tasks.
            </p>
          </div>

          <div className="feature-card">
            <h3>Smart Scheduling</h3>
            <p>
              Organize subjects and deadlines with intelligent planning.
            </p>
          </div>

          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>
              Monitor your study consistency and stay accountable.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Features