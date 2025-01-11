import React from 'react';

const Sobre = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Sobre o AuraMist</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <p>
            Nosso objetivo é tornar o processo de agendamento mais simples e prático, eliminando a
            necessidade de ligações ou trocas demoradas de mensagens. O AuraMist foi criado para atender todas as pessoas que procuram
            serviços de beleza e estética, como cortes de cabelo, barbearia, manicure, pedicure, maquiagem e entre outros.
          </p>
          <p>
            Com uma interface fácil de usar e funcionalidades modernas, conecta clientes e prestadores de serviços, valorizando o cuidado, a
            confiança e a qualidade em cada atendimento.
          </p>
        </div>
        <img 
          src="/salon.jpg" 
          alt="Salão de beleza" 
          style={{ width: '50%', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};

export default Sobre;
