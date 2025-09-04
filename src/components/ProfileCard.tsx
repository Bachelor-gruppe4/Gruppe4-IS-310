interface ProfileCardProps {
  name: string;
  image: string;
  description: string;
}

export default function ProfileCard({ name, image, description }: ProfileCardProps) {
  return (
    <div
      style={{
        border: '1px solid #c2bda9',
        borderRadius: '10px',
        padding: '1.5rem',
        width: '300px',
        textAlign: 'center',
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '90px',
          borderRadius: '50%',
          marginBottom: '1rem',
          border: '2px solid #719867ff',
        }}
      />
      <h2 style={{ fontSize: '1.2rem', margin: '0.5rem 0', color: '#3d5229' }}>{name}</h2>
      <p style={{ width: '90%', minHeight: '60px', marginTop: '0.5rem', color: '#444' }}>
        {description}
      </p>
    </div>
  );
}
