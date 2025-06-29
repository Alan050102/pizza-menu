/*
* componente card debe tener
 * 1. imagen
 * 2. una parte con texto donde va a ir su nombre
 * 3. 2 links, uno a github y uno a linkedin.
 * 4. un objeto por elemento a darle estilos  
*/

export default function Card({ image, name, github, linkedin }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '200px',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#fff',
    margin: '20px auto'
  };

  const imageStyle = {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1px',
  };

  const nameStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: "#050505",
    marginBottom: '10px',
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  };

  const linkStyle = {
    textDecoration: 'none', 
    color: '#0077b6',
    fontWeight: '500',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <p style={nameStyle}>{name}</p>
      <div style={linksStyle}>
        <a href={github} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
