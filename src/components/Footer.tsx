export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '3rem',
        padding: '1rem',
        background: '#719867ff',
        color: 'white',
        textAlign: 'center',
      }}
    >
      © {new Date().getFullYear()} Gruppe 4 – All rights reserved.
    </footer>
  );
}
