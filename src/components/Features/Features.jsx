import useReveal from "../../hooks/useReveal"
import "./Features.css"

const features = [
  {
    icon: "🗓️",
    title: "AI Study Plans",
    description:
      "Set your exam date and subjects. Krysto breaks down everything into focused daily sessions you can actually follow.",
  },
  {
    icon: "⚡",
    title: "Smart Scheduling",
    description:
      "Adapts to your pace and availability. No rigid timetables — just a plan that fits your life.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description:
      "See your consistency at a glance. Build streaks, spot gaps, and stay accountable without the guilt.",
  },
]

function Features() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="features">
      <div className="features-container">

        <div className="features-header reveal" ref={headerRef}>
          <span className="features-label">How it works</span>
          <h2 className="features-title">
            Everything you need to<br />
            <em>actually study</em>
          </h2>
        </div>

        <div className="features-grid stagger reveal" ref={gridRef}>
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
