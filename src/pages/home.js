import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Input, Card, Button, Carousel } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import SideBar from '@/components/sideBar';
import styles from '@/styles/servicos.module.css';

// const { Search } = Input;
// const { Meta } = Card;

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filtroAtivo, setFiltroAtivo] = useState('Recommended');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/protected', {
          credentials: 'include'
        });
        if (res.ok) {
          const data = await res.json();
          setUser({
            id: data.userId,
            role: data.userRole,
            name: data.userName || 'Usuário'
          });
          setLoading(false);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error(error);
        router.push('/login');
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p>Carregando...</p>;

  const servicos = [
    { id: 1, tipo: 'Recommended', titulo: 'Corte de Cabelo', duracao: '45 mins', preco: '$90', imagem: '/img/fotos/s-cabelo.svg' },
    { id: 2, tipo: 'Favoritos', titulo: 'Massagem', duracao: '60 mins', preco: '$60', imagem: '/img/fotos/s-massagem.svg' },
    { id: 3, tipo: 'Promocoes', titulo: 'Corte de Cabelo', duracao: '45 mins', preco: '$80', imagem: '/img/fotos/s-cabelo.svg' },
    { id: 4, tipo: 'Recommended', titulo: 'Massagem', duracao: '60 mins', preco: '$60', imagem: '/img/fotos/s-massagem.svg' },
    { id: 5, tipo: 'Favoritos', titulo: 'Corte de Cabelo', duracao: '45 mins', preco: '$90', imagem: '/img/fotos/s-cabelo.svg' },
  ];

  const servicosFiltrados = servicos.filter(servico => servico.tipo === filtroAtivo);

  return (
    <div className={styles.paginaContainer}>
      <SideBar />
      {/* <div className={styles.conteudoPrincipal}>
        <div className={styles.saudacaoCentralizada}>
          <p>Olá, <span className={styles.nomeDestaque}>{user.name}</span></p>
        </div>
        <div className={styles.cabecalho}>
          <Search
            placeholder="Pesquisar..."
            enterButton
            className={styles.barraPesquisa}
          />
        </div>

        <div className={styles.banners}>
          <Carousel
            dots={false}
            arrows
            slidesToShow={3}
            slidesToScroll={1}
            prevArrow={<IoIosArrowBack className={styles.seta} />}
            nextArrow={<IoIosArrowForward className={styles.seta} />}
          >
            <div>
              <Image
                src="/img/fotos/carrossel-1.svg"
                alt="Encontre o melhor cabeleireiro para você"
                width={300}
                height={150}
                className={styles.imagemBanner}
              />
            </div>
            <div>
              <Image
                src="/img/fotos/carrossel-2.svg"
                alt="Encontre os melhores produtos de beleza"
                width={300}
                height={150}
                className={styles.imagemBanner}
              />
            </div>
            <div>
              <Image
                src="/img/fotos/carrossel-1.svg"
                alt="Descubra serviços incríveis perto de você"
                width={300}
                height={150}
                className={styles.imagemBanner}
              />
            </div>
          </Carousel>
        </div>

        <div className={styles.filtros}>
          <Button className={styles.botaoFiltro} onClick={() => setFiltroAtivo('Recommended')}>Recomendados</Button>
          <Button className={styles.botaoFiltro} onClick={() => setFiltroAtivo('Professionals')}>Profissionais</Button>
          <Button className={styles.botaoFiltro} onClick={() => setFiltroAtivo('Favoritos')}>Favoritos</Button>
          <Button className={styles.botaoFiltro} onClick={() => setFiltroAtivo('Promocoes')}>Promoções</Button>
          <Button className={styles.botaoFiltro} onClick={() => setFiltroAtivo('Packages')}>Pacotes</Button>
        </div>

        <div className={styles.servicos}>
          <h2 className={styles.tituloServicos}>Serviços</h2>
          <div className={styles.listaServicos}>
            {servicosFiltrados.map(servico => (
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
                  title={servico.titulo}
                  description={
                    <>
                      <p>{servico.duracao}</p>
                      <p>{servico.preco}</p>
                    </>
                  }
                />
              </Card>
            ))}
          </div> */}
        {/* </div>
      </div> */}
    </div>
  );
}
