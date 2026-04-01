import { useState } from "react"
import useReveal from "../../hooks/useReveal"
import "./Waitlist.css"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase"

function Waitlist() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const ref = useReveal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    setLoading(true)

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        created_at: serverTimestamp(),
        source: "landing-page",
        status: "pending",
      })
      setSuccess(true)
      e.target.reset()
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  return (
    <section className="waitlist">
      <div className="waitlist-container reveal" ref={ref}>

        <span className="waitlist-label">Early access</span>

        <h2 className="waitlist-title">
          Be first in line
        </h2>

        <p className="waitlist-text">
          Krysto is launching soon. Join the waitlist and get
          priority access when we open the doors.
        </p>

        <form className="waitlist-form" onSubmit={handleSubmit}>
          <input
            className="waitlist-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button className="waitlist-button" type="submit" disabled={loading}>
            {loading ? "Joining..." : "Get Early Access"}
          </button>
        </form>

        {success && (
          <p className="waitlist-success">
            ✦ You're on the list — we'll be in touch soon.
          </p>
        )}

        <div className="waitlist-divider" />

        <p className="waitlist-footer">
          Built with care · No spam, ever ·{" "}
          <a href="mailto:hello@krysto.app">hello@krysto.app</a>
        </p>

      </div>
    </section>
  )
}

export default Waitlist
