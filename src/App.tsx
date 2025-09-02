import './App.css';
import { profiles } from './profiles';

function App() {
  return (
    <div style={{ background: '#f5f3ef', minHeight: '100vh' }}>
      {/* Banner */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        background: '#719867ff', // olivengrønn
        color: 'white',
        padding: '2.5rem 0 2rem 0',
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}>
        <span style={{
          background: 'rgba(255,255,255,0.15)',
          padding: '0.5rem 2.5rem',
          borderRadius: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}>
          Gruppe 4
        </span>
      </div>

      {/* Content */}
      <div style={{ marginTop: '8rem' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto 3rem auto',
          textAlign: 'center',
          background: '#e8e4d9', // lys jordtone
          padding: '2rem',
          borderRadius: '12px',
          color: '#2f2f2f',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#3d5229' }}>Om oss</h2>
          <p>
            Vi er en gruppe på 5 studenter som studerer Bachelor IT og informasjonssystemer på UiA. Gruppen vår har samarbeidet gjennom hele studiet og har lært hverandres styrker og svakheter, samt hvordan man best håndterer konflikter innad i gruppen. Vi jobber strukturert og samarbeider godt for å oppnå gode resultater.
          </p>
          <p>
            Vi har en god blanding av forskjellige ferdigheter, og dermed ønsker vi å jobbe med noe innenfor prosjektutvikling, som vi har erfaring med fra diverse prosjekter gjennom UiA i samarbeid med blant annet Kartverket og Digin, praksis hos Moment Analyse og arbeidsoppdrag fra Daltex Resindekke.
          </p>
        </div>
        
            <div>
            <h1 style={{ textAlign: 'center', color: '#719867ff', marginBottom: '2rem' }}>Team Profiles</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
              {profiles.map((profile, idx) => (
                <div key={idx} style={{
                  border: '1px solid #c2bda9',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  width: '300px',
                  textAlign: 'center',
                  background: '#fff',       // hvite kort for kontrast mot beige
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src={profile.image}
                    alt={profile.name}
                    style={{ width: '90px', borderRadius: '50%', marginBottom: '3rem', border: '2px solid #719867ff' }}
                  />
                  <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0', color: '#3d5229' }}>{profile.name}</h2>
                  <p style={{ width: '90%', minHeight: '60px', marginTop: '0.5rem', color: '#444' }}>
                    {profile.description}
                  </p>
                </div>
              ))}
            </div>
          </div>


      </div>
    </div>
  );
}

export default App;
