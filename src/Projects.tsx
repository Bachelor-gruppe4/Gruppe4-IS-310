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
