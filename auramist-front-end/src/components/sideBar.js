import styles from "@/styles/sideBar.module.css";
import { FiFolder, FiBriefcase, FiHeart, FiUser, FiSettings, FiHelpCircle, FiLogOut, FiSearch } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

export default function BarraLateral() {
    return (
        <div className={styles.barraLateral}>
            <div className={styles.logo}>
                <img src="/img/AURAMIST-Logo.svg" alt="Logo Auramist" />
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
                    <li>
                        <FiBriefcase className={styles.icone} /> Serviços
                    </li>
                    <li>
                        <FiHeart className={styles.icone} /> Favoritos
                    </li>
                    <li>
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
};
