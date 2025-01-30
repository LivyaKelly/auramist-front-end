import styles from "@/styles/sideBar.module.css";
import {
    FiFolder,
    FiBriefcase,
    FiHeart,
    FiUser,
    FiSettings,
    FiHelpCircle,
    FiLogOut,
    FiSearch,
} from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function BarraLateral() {
    const router = useRouter();

    const navigateToPerfil = () => {
        router.push('/perfil');
    };
    const navigateToServicos = () => {
        router.push('/home');
    };
    return (
        <div className={styles.barraLateral}>
            <div className={styles.logo}>
                <Image
                    src="/img/logos/AURAMIST-Logo.svg"
                    alt="Logo do Auramist"
                    width={100}
                    height={170}
                    className={styles.logoFooter}
                />
            </div>
            <div className={styles.pesquisa}>
                <input type="text" placeholder="Pesquisar..." />
            </div>
            <nav className={styles.navegacao}>
                <ul>
                    <li>
                        <FiFolder className={styles.icone} /> Reservas
                    </li>
                    <li>
                        <FaCalendarAlt className={styles.icone} /> Agendamento
                    </li>
                    <li onClick={navigateToServicos} className={styles.icone}>
                        <FiUser className={styles.icone} /> Serviços
                    </li>
                    <li>
                        <FiHeart className={styles.icone} /> Favoritos
                    </li>
                    <li onClick={navigateToPerfil} className={styles.icone}>
                        <FiUser className={styles.icone} /> Perfil
                    </li>
                    <li>
                        <FiSettings className={styles.icone} /> Configurações
                    </li>
                    <li>
                        <FiHelpCircle className={styles.icone} /> Ajuda
                    </li>
                </ul>
            </nav>
            <div className={styles.sair}>
                <FiLogOut className={styles.icone} />
                <span>Sair</span>
            </div>
        </div>
    );
}
