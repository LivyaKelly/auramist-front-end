import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import SideBar from '@/components/sideBar';
import Carrossel from '@/components/carrossel';  
import ListaServicos from '@/components/listaServicos';  
import styles from '@/styles/servicos.module.css';



export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/protected', { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          setUser({ id: data.userId, name: data.userName || 'Usuário' });
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error(error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [router]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className={styles.paginaContainer}>
      <SideBar />
      <div className={styles.conteudoPrincipal}>
        <div className={styles.saudacaoCentralizada}>
          <p>Olá, <span className={styles.nomeDestaque}>{user ? user.name : 'Usuário'}</span></p>
        </div>
        <div className={styles.cabecalho}>
          <Input placeholder="Pesquisar..." className={styles.barraPesquisa} />
        </div>

        <Carrossel />
        <ListaServicos />
      </div>
    </div>
  );
}
