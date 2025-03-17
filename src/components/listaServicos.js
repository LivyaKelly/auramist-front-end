import { useEffect, useState } from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import styles from '@/styles/servicos.module.css';



const { Meta } = Card;


export default function ListaServicos() {
  const [servicos, setServicos] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fetchServicos = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/services');
        
        if (!res.ok) {
          throw new Error(`Erro ao buscar serviços: ${res.status} - ${res.statusText}`);
        }


        const data = await res.json();
        console.log(data);
        
        if (Array.isArray(data)) {
          setServicos(data);
        } else {
          throw new Error('Formato de dados inválido recebido da API');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServicos();
  }, []);


  if (loading) return <p>Carregando serviços...</p>;
  if (error) return <p>Erro: {error}</p>; 


  return (
    <div className={styles.servicosContainer}>
      <h2 className={styles.tituloServicos}>Serviços</h2>
      <div className={styles.listaServicos}>
        {servicos.length > 0 ? (
          servicos.map(servico => (
            <Card
              key={servico.id}
              hoverable
              className={styles.cartaoServico}
              cover={
                <Image
                  src={servico.imagem}
                  alt={servico.titulo}
                  width={150}
                  height={100}
                  className={styles.imagemCard}
                />
              }
            >
              <Meta
                title={servico.name}
                description={
                  <>
                    {/* <p>{servico.description}</p> */}
                    <p>{servico.duration} mins</p>
                    <p>$ {servico.price}</p>

                  </>
                }
              />
            </Card>
          ))
        ) : (
          <p>Nenhum serviço disponível.</p> 
        )}
      </div>
    </div>
  );
}
