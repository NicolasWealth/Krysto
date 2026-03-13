import "./Waitlist.css"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"

function Waitlist() {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const emailValue = e.target.email.value

    console.log("FORM SUBMITTED")
    console.log("Email:", emailValue)

    try {
      await addDoc(collection(db, "waitlist"), {
        email: emailValue,
        createdAt: new Date()
      })

      console.log("Saved to Firebase")

      alert("You joined the waitlist!")

      e.target.reset()

    } catch (error) {
      console.error("Firebase error:", error)
    }
  }

  return (
    <section className="waitlist">
      <div className="waitlist-container">

        <h2 className="waitlist-title">
          Join the Krysto Waitlist
        </h2>

        <p className="waitlist-text">
          Get early access when the AI study planner launches.
        </p>

        <form className="waitlist-form" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            className="waitlist-input"
            name="email"
            required
          />

          <button type="submit" className="waitlist-button">
            Join Waitlist
          </button>

        </form>

      </div>
    </section>
  )
}

export default Waitlist