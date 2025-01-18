import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Sobre from "@/components/sobre";
import Rodape from "@/components/rodape";

export default function Home() {
  return (
    <>
      <div className={styles.logo}>
        <Image
          src="/img/AURAMIST-Logo.svg"
          alt="Auramist Logo"
          width={400}
          height={200}
        />
      </div>
      <div className={styles.mulher}>
        <Image
          className={styles.mulherMeditando}
          src="/img/Mulher_meditando.svg"
          alt="Mulher meditando"
          width={400}
          height={200}
        />
        <Image
          className={styles.elemento}
          src="/img/Elemento-azul.svg"
          alt="Elemento azul"
          width={400}
          height={200}
        />
      </div>
      <div>
        <h1 className={styles.boasVindas}>Bem-vindo ao Auramist!</h1>
      </div>
      <div>
        <h3 className={styles.aviso}>Siga os passos para agendar seu próximo serviço de beleza</h3>
      </div>
      <div className={styles.botoes}>
        <button className={styles.botaoP}>Entrar como Profissional</button>
        <button className={styles.botaoC}>Entrar como<br /> Cliente</button>
      </div>
      <Sobre />
      <Rodape />
    </>
  );
}
