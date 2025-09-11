export default function Projects() {
  return (
    <div>
      {/* Banner */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: '#ffffff',
          color: '#3d5229',
          padding: '3rem 0',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        VÅRE PROSJEKTER
      </div>

      {/* Placeholder content */}
      <div style={{ marginTop: '8rem', padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: '#3d5229', fontSize: '1.2rem' }}>
          Prosjektene våre vil bli lagt til her snart.
        </p>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '4rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#3d5229',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textAlign: 'center',
            }}
          >
            Kontakt oss
          </h2>
          <p style={{ textAlign: 'center', color: '#3d5229' }}>
            📧 <a href="mailto:svelethea@gmail.com">svelethea@gmail.com</a>
            <br />
            📞 <a href="tel:+4790874373">+47 908 74 373</a>
          </p>
        </div>
      </footer>
    </div>
  );
}