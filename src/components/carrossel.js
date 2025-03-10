import { Carousel } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import styles from '@/styles/carrossel.module.css';



export default function Carrossel() {
  return (
    <div className={styles.containerCarrossel}>
      <Carousel dots={false} arrows slidesToShow={3} slidesToScroll={1} prevArrow={<IoIosArrowBack />} nextArrow={<IoIosArrowForward />}>
        <div>
          <Image src="/img/fotos/carrossel-1.svg" alt="Encontre o melhor cabeleireiro para você" width={300} height={150} className={styles.imagemBanner} />
        </div>
        <div>
          <Image src="/img/fotos/carrossel-2.svg" alt="Encontre os melhores produtos de beleza" width={300} height={150} className={styles.imagemBanner} />
        </div>
        <div>
          <Image src="/img/fotos/carrossel-1.svg" alt="Descubra serviços incríveis perto de você" width={300} height={150} className={styles.imagemBanner} />
        </div>
      </Carousel>
    </div>
  );
}
