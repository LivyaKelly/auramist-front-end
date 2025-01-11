import React from 'react';

const BemVindo = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ background: '#E6F4FA', padding: '50px', borderRadius: '10px' }}>
        <img 
          src="/logo.png" 
          alt="Logo AuraMist" 
          style={{ marginBottom: '20px' }}
        />
        <h1>Bem-vindo ao AuraMist!</h1>
        <p>Siga os passos para agendar seu próximo serviço de beleza</p>
        <div style={{ marginTop: '30px' }}>
          <button style={{ margin: '0 10px', padding: '10px 20px' }}>Entrar como Profissional</button>
          <button style={{ margin: '0 10px', padding: '10px 20px' }}>Entrar como Cliente</button>
        </div>
      </div>
    </div>
  );
};

export default BemVindo;
