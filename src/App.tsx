import './App.css';
import { profiles } from './utils/profiles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function App() {
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
        GRUPPE 4
      </div>



      {/* Content */}
      <div style={{ marginTop: '8rem' }}>
        {/* Om oss */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            textAlign: 'center',
            background: '#ffffffff',
            padding: '2rem',
            borderRadius: '12px',
            color: '#2f2f2f',
          }}
        >
          <h2 style={{ color: '#3d5229' }}>OM OSS</h2>
          <p>
            Vi er en gruppe på 5 studenter som studerer Bachelor IT og informasjonssystemer på UiA.
            Gruppen vår har samarbeidet gjennom hele studiet og har lært hverandres styrker og
            svakheter, samt hvordan man best håndterer konflikter innad i gruppen. Vi jobber strukturert
            og samarbeider godt for å oppnå gode resultater.
          </p>
          <p>
            Vi har en god blanding av forskjellige ferdigheter, og dermed ønsker vi å jobbe med noe
            innenfor prosjektutvikling, som vi har erfaring med fra diverse prosjekter gjennom UiA i
            samarbeid med blant annet Kartverket og Digin, praksis hos Moment Analyse og arbeidsoppdrag
            fra Daltex Resindekke.
          </p>
        </div>

        {/* Gruppemedlemmer */}
        <div>
          <h1
            style={{
              textAlign: 'center',
              color: '#719867ff',
              marginBottom: '2rem',
            }}
          >
            GRUPPEMEDLEMMER
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              justifyItems: 'center',
              margin: '0 auto 3rem auto',
              maxWidth: '1500px',
            }}
          >
            {profiles.map((profile, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  border: '1px solid #c2bda9',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  width: '100%',
                  maxWidth: '1000px',
                  margin: '0 auto',
                  background: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                {/* LEFT COLUMN: image + social icons */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src={profile.image}
                    alt={profile.name}
                    style={{
                      width: '220px',
                      height: '220px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #719867ff',
                    }}
                  />

                  <h3
                    style={{
                      fontSize: '1rem',
                      margin: '0 0 0.5rem 0',
                      color: '#666',
                      fontWeight: 'normal',
                    }}
                  >
                    {profile.role}
                  </h3>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={24} color="#333" />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24} color="#0A66C2" />
                    </a>
                  </div>
                </div>

                {/* RIGHT COLUMN: name + description */}
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h2
                    style={{
                      fontSize: '1.2rem',
                      margin: '0 0 0.5rem 0',
                      color: '#3d5229',
                    }}
                  >
                    {profile.name}
                  </h2>

                  {/* Description with spacing at \n */}
                  {profile.description.split('\n').map((line, idx) => (
                    <p key={idx} style={{ margin: '0 0 2rem 0', lineHeight: 1.5 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

