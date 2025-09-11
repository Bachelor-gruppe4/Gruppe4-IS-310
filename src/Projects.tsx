// src/Projects.tsx
export default function Projects() {
  // Midlertidig hardkodede prosjekter – kan flyttes til utils/projects.ts senere
  const projects = [
    {
      title: "Praksis: Moment Analyse",
      logo: "/logos/moment.png", // legg et bilde i public/logos/
      link: "https://odalopheim.github.io/Praksis/index.html",
      description: `Praksisen involverer å utvikle en digital plattform som skal gjøre det enkelt
      for bedriften å registrere og holde oversikt over sine CO₂-utslipp. Målet er å forenkle
      prosessen med å samle inn og strukturere miljødata, slik at det blir raskere og mer
      oversiktlig å sende inn nødvendig dokumentasjon for å oppnå miljøsertifisering.`,
      status: "Pågående",
    },
    {
      title: "Daltex Resindekke",
      logo: "/logos/daltex.png",
      description: "Beskrivelse av oppgave kommer her.",
      status: "Pågående",
    },
    {
      title: "Digin (IS-112)",
      logo: "/logos/digin.png",
      description: `Utvikling av en digital samarbeidsplattform for SMB-er i IT-klyngen Digin.
      Plattformen skal gjøre det enklere å synliggjøre tjenester, dele kompetanse og finne
      samarbeidspartnere.`,
      status: "Fullført",
    },
    {
      title: "Kartverket (3. semester)",
      logo: "/logos/kartverket.png",
      description: `Utvikling av nytt feilmeldingssystem for kartdata. Gjør det enklere for publikum
      å melde inn feil og for saksbehandlere å behandle og følge opp meldinger.`,
      status: "Fullført",
    },
    {
      title: "Disaster Alert (IS-217)",
      logo: "/logos/disaster.png",
      description: `Forbedring av nettsiden Disaster Alert med fokus på universell utforming og
      tilgjengelighet. Brukertesting og redesign resulterte i en mer intuitiv og inkluderende
      prototype.`,
      status: "Fullført",
    },
  ];

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

      {/* Prosjektboksene */}
      <div style={{ marginTop: '10rem', padding: '2rem' }}>
        {/* Pågående prosjekter */}
        <h2 style={{ color: '#719867ff', marginBottom: '1.5rem' }}>Pågående</h2>
        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          {projects
            .filter((p) => p.status === "Pågående")
            .map((p, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  border: '1px solid #c2bda9',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  background: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <img
                  src={p.logo}
                  alt={p.title}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    border: '1px solid #719867ff',
                    background: '#fff',
                  }}
                />
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h3 style={{ color: '#3d5229', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ lineHeight: 1.5 }}>{p.description}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#0A66C2' }}
                    >
                      Se prosjekt
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Fullførte prosjekter */}
        <h2 style={{ color: '#719867ff', margin: '3rem 0 1.5rem' }}>Fullførte</h2>
        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          {projects
            .filter((p) => p.status === "Fullført")
            .map((p, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  border: '1px solid #c2bda9',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  background: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <img
                  src={p.logo}
                  alt={p.title}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    border: '1px solid #719867ff',
                    background: '#fff',
                  }}
                />
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h3 style={{ color: '#3d5229', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ lineHeight: 1.5 }}>{p.description}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#0A66C2' }}
                    >
                      Se prosjekt
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="contact"> {/* 👈 Anker for "Kontakt"-linken */}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              color: '#3d5229',
              fontSize: '1rem',
              marginBottom: '2rem',
            }}
          >
            {/* E-post */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" fill="none" stroke="#3d5229" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#3d5229" />
                <path d="M3 5l9 7 9-7" stroke="#3d5229" />
              </svg>
              <a href="mailto:svelethea@gmail.com" style={{ color: '#3d5229', textDecoration: 'underline' }}>
                svelethea@gmail.com
              </a>
            </div>
            {/* Telefon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" fill="none" stroke="#3d5229" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c1.08.35 2.19.59 3.32.72a2 2 0 011.72 2z" stroke="#3d5229" />
              </svg>
              <a href="tel:+4790874373" style={{ color: '#3d5229', textDecoration: 'underline' }}>
                +47 908 74 373
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
