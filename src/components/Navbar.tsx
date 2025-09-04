export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop: '5rem',
        marginBottom: '2rem',
      }}
    >
      <a href="#" style={{ color: '#3d5229', fontWeight: 'bold' }}>Home</a>
      <a href="#" style={{ color: '#3d5229', fontWeight: 'bold' }}>About</a>
      <a href="#" style={{ color: '#3d5229', fontWeight: 'bold' }}>Profiles</a>
    </nav>
  );
}
