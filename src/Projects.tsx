// src/Projects.tsx
import MomentAnalyseLogo from './assets/images/MomentAnalyse.webp';
import DaltexLogo from './assets/images/DaltexResindekke.jpg';
import DiginLogo from './assets/images/Digin.png';
import KartverketLogo from './assets/images/Kartverket.png';
import DisasterLogo from './assets/images/DisasterAlert.png';
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Praksis: Moment Analyse",
      logo: MomentAnalyseLogo,
      link: "https://odalopheim.github.io/Praksis/index.html",
      description: `Praksisen involverer å utvikle en digital plattform som skal gjøre det enkelt
      for bedriften å registrere og holde oversikt over sine CO₂-utslipp. Målet er å forenkle
      prosessen med å samle inn og strukturere miljødata, slik at det blir både raskere og mer
      oversiktlig å sende inn nødvendig dokumentasjon for å oppnå miljøsertifisering i tråd med
      kravene til Miljøfyrtårnet. Løsningen skal bidra til å redusere manuelt arbeid, øke
      nøyaktigheten i rapporteringen og gi selskapet bedre innsikt i sitt eget klimafotavtrykk.`,
      status: "Pågående",
    },
    {
      title: "Daltex Resindekke",
      logo: DaltexLogo,
      description: `Beskrivelse av oppgave: Arbeidsoppdrag for Daltex Resindekke.`,
      status: "Pågående",
    },
    {
      title: "Digin (IS-112)",
      logo: DiginLogo,
      description: `Gruppen utviklet et forslag til en digital samarbeidsplattform for små og mellomstore bedrifter (SMB-er) i IT-klyngen Digin. Plattformen skal gjøre det enklere for medlemsbedrifter å synliggjøre tjenester, dele kompetanse og finne relevante samarbeidspartnere lokalt.
      Gjennom tjenestedesign kartla gruppen utfordringer som manglende strukturert samarbeid, lav synlighet og lite utnyttelse av ressurser på tvers. Prototypen ble laget i Figma og testet med bedrifter og Digin-representanter, og ble vurdert som ønskelig, gjennomførbar og bærekraftig.`,
      link: "https://www.figma.com/proto/xhUb0Z5p1SOfQEz1e98avZ/Digin-prototype?node-id=4-2&starting-point-node-id=4%3A2",
      status: "Fullført",
    },
    {
      title: "Kartverket (3. semester)",
      logo: KartverketLogo,
      description: `Utvikling av et nytt feilmeldingssystem for Kartverket som gjør det enklere og mer brukervennlig å melde inn feil i kartdata, samtidig som saksbehandlingen internt effektiviseres.
      Løsningen ble utviklet som en nettbasert plattform med brukerkontoer, feilmeldinger i kartet, og et grensesnitt for saksbehandlere. Prosjektet ble gjennomført med Scrum og fokus på brukervennlighet, tilgjengelighet, sikkerhet og skalerbarhet.`,
      link: "https://github.com/Kartverket-gruppe4/Kartverket.MVC.4",
      extraLinks: [
        { label: "YouTube demo", url: "https://youtu.be/ivGk9-J2QOk" }
      ],
      status: "Fullført",
    },
    {
      title: "Disaster Alert (IS-217)",
      logo: DisasterLogo,
      description: `Prosjektet tok for seg en helhetlig vurdering og forbedring av nettsiden Disaster Alert, med fokus på universell utforming og brukervennlighet. Gjennom brukertesting, scenariotesting og heuristisk evaluering ble det laget en forbedret prototype som er mer intuitiv og inkluderende.`,
      link: "https://www.figma.com/proto/9TGrFwXk0C4O0lrZXCeP0O/Disaster-Alert?node-id=2-273&starting-point-node-id=2%3A273&t=qDI0ZjDrsvRW7myW-1",
      extraLinks: [
        { label: "Original nettside", url: "https://disasteralert.pdc.org/disasteralert/" }
      ],
      status: "Fullført",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          background: '#ffffff',
          color: '#3d5229',
          padding: '3rem 0',
          textAlign: 'left',
          paddingLeft: '3rem',
          fontSize: '2rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
          zIndex: 1000,
          borderBottom: '2px solid #719867ff',
        }}
      >
        GRUPPE 4

        {/* Link til Hjem */}
          <Link
            to="/"
            style={{
              position: 'absolute',
              top: '50%',
              right: '14rem',
              transform: 'translateY(-50%)',
              fontSize: '1rem',
              fontWeight: 'bold',
              paddingRight: '3rem',
              color: '#3d5229',
              textDecoration: 'none',
            }}
          >
            Hjem
          </Link>

        {/* Link til Kontakt */}
          <a
            href="#contact"
            style={{
              position: 'absolute',
              top: '50%',
              right: '4rem',
              transform: 'translateY(-50%)',
              fontSize: '1rem',
              paddingRight: '3rem',
              fontWeight: 'bold',
              color: '#3d5229',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Kontakt oss
          </a>
      </div>

      {/* Hovedoverskrift for prosjekter */}
        <h2
          style={{
            color: '#3d5229',
            marginTop: '10rem',   // lager luft så den ikke kolliderer med banneret
            marginBottom: '1rem',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          VÅRE PROSJEKTER
        </h2>

      {/* Divider */}
        <div
          style={{
            width: '60%',
            height: '2px',
            backgroundColor: '#719867',
            marginTop: '3rem', // sentrert og med litt luft rundt
            marginBottom: '0.5rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        ></div>

      {/* Prosjektboksene */}
      <div style={{ marginTop: '0rem', padding: '1rem' }}>

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
                  alignItems: 'center',
                  gap: '1.5rem',
                  border: '1px solid #c2bda9',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  background: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    width: '140px',
                    height: '140px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #719867ff',
                    borderRadius: '8px',
                    background: '#fff',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h3 style={{ color: '#3d5229', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ lineHeight: 1.5 }}>{p.description}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        backgroundColor: '#719867',
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        marginRight: '1rem',
                      }}
                    >
                      Se prosjekt
                    </a>
                  )}
                  {p.extraLinks && p.extraLinks.map((el, i) => (
                    <a
                      key={i}
                      href={el.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        backgroundColor: '#719867',
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        marginRight: '1rem',
                      }}
                    >
                      {el.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '60%',
            height: '2px',
            backgroundColor: '#719867',
            margin: '3rem auto', // sentrert og med litt luft rundt
          }}
        ></div>

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
                  alignItems: 'center',
                  gap: '1.5rem',
                  border: '1px solid #c2bda9',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  background: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    width: '140px',
                    height: '140px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #719867ff',
                    borderRadius: '8px',
                    background: '#fff',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h3 style={{ color: '#3d5229', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ lineHeight: 1.5 }}>{p.description}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        backgroundColor: '#719867',
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        marginRight: '1rem',
                      }}
                    >
                      Se prosjekt
                    </a>
                  )}
                  {p.extraLinks && p.extraLinks.map((el, i) => (
                    <a
                      key={i}
                      href={el.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        backgroundColor: '#719867',
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        marginRight: '1rem',
                      }}
                    >
                      {el.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Divider */}
        <div
          style={{
            width: '60%',
            height: '2px',
            backgroundColor: '#719867',
            margin: '3rem auto', // sentrert og med litt luft rundt
          }}
        ></div>


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
