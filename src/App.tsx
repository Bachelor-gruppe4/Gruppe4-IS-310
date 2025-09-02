import './App.css';
import { profiles } from './profiles';

function App() {
  return (
    <div>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        background: '#1976d2',
        color: 'white',
        padding: '1rem 0',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        zIndex: 1000
      }}>
        Gruppe 4
      </div>
      <div style={{ marginTop: '4.5rem' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto 2rem auto',
          textAlign: 'center',
          background: '#efefefff',
          padding: '1.5rem',
          borderRadius: '10px',
          color: '#333'
        }}>
          <h2>Om oss</h2>
          <p>
            Vi er en gruppe på 5 studenter som studerer Bachelor IT og informasjonssystemer på UiA. Gruppen vår har samarbeidet gjennom hele studiet og har lært hverandres styrker og svakheter, samt hvordan man best håndterer konflikter innad i gruppen. Vi jobber strukturert og samarbeider godt for å oppnå gode resultater.
          </p>
          <p>
            Vi har en god blanding av forskjellige ferdigheter, og dermed ønsker vi å jobbe med noe innenfor prosjektutvikling, som vi har erfaring med fra diverse prosjekter gjennom UiA i samarbeid med blant annet Kartverket og Digin, praksis hos Moment Analyse og arbeidsoppdrag fra Daltex Resindekke.
          </p>
        </div>
        <h1>Team Profiles</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          {profiles.map((profile, idx) => (
            <div key={idx} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '300px',
              textAlign: 'center',
              background: '#f9f9f9'
            }}>
              <img
                src={profile.image}
                alt={profile.name}
                style={{ width: '80px', borderRadius: '50%' }}
              />
              <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{profile.name}</h2>
              <p style={{ width: '90%', minHeight: '60px', marginTop: '0.5rem', color: '#555' }}>
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;