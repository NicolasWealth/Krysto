import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-brand">Krysto</span>
        <p className="footer-copy">© {new Date().getFullYear()} Krysto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
