import './App.css';
import { profiles } from './utils/profiles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* Banner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
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

        {/* Link til Medlemmer */}
        <a
          href="#members"
          style={{
            position: 'absolute',
            top: '50%',
            right: '18rem',
            transform: 'translateY(-50%)',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#3d5229',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Medlemmer
        </a>

        {/* Link til Prosjekter */}
        <Link
          to="/projects"
          style={{
            position: 'absolute',
            top: '50%',
            right: '10rem',
            transform: 'translateY(-50%)',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#3d5229',
            textDecoration: 'none',
          }}
        >
          Prosjekter
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
            fontWeight: 'bold',
            color: '#3d5229',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Kontakt
        </a>
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
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link
            to="/projects"
            style={{
              display: 'inline-block',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              backgroundColor: '#719867',
              color: '#ffffffff',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            Se våre prosjekter her!
          </Link>
        </div>
        </div>

        {/* Gruppemedlemmer */}
        <div>
          <h1
            id="members" // 👈 Anker for "Medlemmer"-linken
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
