import "./Footer.css"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "mailto:hello@krysto.app" },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <span className="footer-brand">Krysto</span>
          <p className="footer-copy">© {new Date().getFullYear()} Krysto. All rights reserved.</p>
        </div>

        <nav className="footer-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  )
}

export default Footer
