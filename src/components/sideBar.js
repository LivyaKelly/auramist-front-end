import styles from "@/styles/sideBar.module.css";
import { FiFolder, FiBriefcase, FiHeart, FiUser, FiLogOut } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from 'next/router';


export default function BarraLateral() {
    const router = useRouter();

    const handleLogout = ( ) => {
        router.push('/');
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


            <nav className={styles.navegacao}>
                <ul>
                    <li className={`${styles.menuItem} ${router.pathname === "/reservas" ? styles.active : ""}`}
                        onClick={() => router.push('/reservas')}>
                        <FiFolder className={styles.icone} /> Reservas
                    </li>
                    <li className={`${styles.menuItem} ${router.pathname === "/agendamento" ? styles.active : ""}`}
                        onClick={() => router.push('/agendamento')}>
                        <FaCalendarAlt className={styles.icone} /> Agendamento
                    </li>
                    <li className={`${styles.menuItem} ${router.pathname === "/dashboard" ? styles.active : ""}`}
                        onClick={() => router.push('/dashboard')}>
                        <FiBriefcase className={styles.icone} /> Serviços
                    </li>
                    <li className={`${styles.menuItem} ${router.pathname === "/favoritos" ? styles.active : ""}`}
                        onClick={() => router.push('/favoritos')}>
                        <FiHeart className={styles.icone} /> Favoritos
                    </li>
                    <li className={`${styles.menuItem} ${router.pathname === "/perfil" ? styles.active : ""}`}
                        onClick={() => router.push('/perfil')}>
                        <FiUser className={styles.icone} /> Perfil
                    </li>
                </ul>
            </nav>


            <div className={styles.sair} onClick={handleLogout}>
                <FiLogOut className={styles.icone} />
                <span>Sair</span>
            </div>
        </div>
    );

}
