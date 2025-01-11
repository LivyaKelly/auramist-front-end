import React from 'react';

const Rodape = () => {
  return (
    <footer style={{ background: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div>
        <h3>AuraMist</h3>
        <p>
          Com o AuraMist, agendar serviços de beleza ficou mais simples e prático. Conectamos você diretamente aos melhores profissionais,
          valorizando seu tempo, sua confiança e a sua beleza.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div>
          <p>Início</p>
          <p>Sobre o AuraMist</p>
          <p>Login</p>
        </div>
        <div>
          <p>Serviços:</p>
          <ul>
            <li>Cabelos</li>
            <li>Manicure</li>
            <li>Maquiagem</li>
            <li>Barbearia</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
