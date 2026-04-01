import useReveal from "../../hooks/useReveal"
import "./SocialProof.css"

const stats = [
  { number: "200+", label: "students joined" },
  { number: "3 min", label: "to set up your plan" },
  { number: "100%", label: "free during beta" },
]

function SocialProof() {
  const ref = useReveal()

  return (
    <div className="social-proof">
      <div className="social-proof-container reveal" ref={ref}>
        {stats.map((stat, i) => (
          <div key={stat.label} style={{ display: "contents" }}>
            <div className="social-proof-stat">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {i < stats.length - 1 && (
              <div className="social-proof-divider" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialProof
