import React from 'react';
import Footer from './Footer';

const BrandDetails = () => {
  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          padding: '20px',
          maxWidth: '90%',
          margin: '0 auto',
          alignItems: 'center',
        }}
      >
        <img src="/Pictures/Tesla.png" alt="Tesla" style={imageStyle} />
        <img src="/Pictures/Newbalance.png" alt="New Balance" style={imageStyle} />
        <img src="/Pictures/Macdonald.png" alt="Macdonald" style={imageStyle} />
        <img src="/Pictures/Adidas.png" alt="Adidas" style={imageStyle} />
        <img src="/Pictures/Channel.png" alt="Channel" style={imageStyle} />
        <img src="/Pictures/Levis.png" alt="Levis" style={imageStyle} />
        <img src="/Pictures/lacoste.png" alt="Lacoste" style={imageStyle} />
        <img src="/Pictures/Disney.png" alt="Disney" style={imageStyle} />
        <img src="/Pictures/Vesace.png" alt="Versace" style={imageStyle} />
        <img src="/Pictures/Gucci.png" alt="Gucci" style={imageStyle} />
        <img src="/Pictures/Supreme.png" alt="Supreme" style={imageStyle} />
        <img src="/Pictures/PEP.png" alt="PEP" style={imageStyle} />
      </div>

      <Footer />
    </div>
  );
};

export default BrandDetails;
