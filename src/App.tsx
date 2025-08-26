import React, { useState } from 'react';
import './App.css';
import { profiles } from "./profiles.1";

function App() {
  const [descriptions, setDescriptions] = useState(
    profiles.map(profile => profile.description)
  );

  const handleChange = (idx: number, value: string) => {
    const newDescriptions = [...descriptions];
    newDescriptions[idx] = value;
    setDescriptions(newDescriptions);
  };

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