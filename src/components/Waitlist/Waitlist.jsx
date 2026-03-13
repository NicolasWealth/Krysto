import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase"

function Waitlist() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value

    setLoading(true)

    try {

      await addDoc(collection(db, "waitlist"), {
        email: email,
        createdAt: serverTimestamp(),
        source: "landing-page",
        status: "pending"
      })

      setSuccess(true)
      e.target.reset()

    } catch (error) {
      console.error(error)
      alert("Something went wrong")

    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <button type="submit">
        {loading ? "Joining..." : "Join Waitlist"}
      </button>

      {success && <p>You are on the waitlist.</p>}

    </form>
  )
}

export default Waitlist