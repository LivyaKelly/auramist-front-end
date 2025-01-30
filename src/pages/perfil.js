import React from "react";
import Sidebar from "@/components/sideBar";
import Image from 'next/image';
import { AiOutlineEdit, AiOutlineMessage, AiOutlineCalendar } from 'react-icons/ai';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import styles from "@/styles/perfil.module.css";

export default function Perfil() {
    return (
        <>
            <Sidebar />
            <div className={styles.profileContainer}>
                {/* Header Section */}
                <div className={styles.headerSection}>
                    {/* Profile Image */}
                    <div className={styles.profileImageWrapper}>
                        <Image
                            src="/img/fotos/unsplash_plsF6obTgms.png"
                            alt="Profile"
                            width={150}
                            height={150}
                            className={styles.profileImage}
                        />
                        <button className={styles.editButton}>
                            <AiOutlineEdit className={styles.editIcon} />
                        </button>
                    </div>

                    {/* Info Section */}
                    <div className={styles.infoSection}>
                        <h1 className={styles.profileName}>Anna Smith</h1>
                        <p className={styles.profileRole}>Nail Designer</p>

                        {/* Ratings and Message */}
                        <div className={styles.ratingsMessage}>
                        <p className={styles.avaliacao}>AVALIACAO</p>
                            <div className={styles.ratings}>
                                <span className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <span className={styles.ratingValue}>5.0</span>
                            </div>
                            <button className={styles.messageButton}>
                                <AiOutlineMessage className={styles.messageIcon} /> Mensagem
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appointment Details Section */}
                <div className={styles.appointmentDetails}>
                    <h2 className={styles.salonName}>The Gallery Salon</h2>
                    <ul className={styles.appointmentList}>
                        <li>with Anna Smith &bull; 5.0 Kms</li>
                        <li>19 Oct 2023 &bull; $150</li>
                    </ul>
                </div>

                {/* Tab Navigation */}
                <div className={styles.tabNavigation}>
                    <nav className={styles.tabs}>
                        <a href="#about" className={`${styles.tabLink} ${styles.active}`}>
                            <Image src="/img/icons/3171065 1.svg" alt="About Icon" width={23} height={20} className={styles.tabIcon} /> About
                        </a>
                    </nav>
                </div>

                {/* Contact Information */}
                <div id="about" className={styles.contactInfo}>
                    <h3 className={styles.contactTitle}>Informação de Contato</h3>
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem1}><FaPhoneAlt className={styles.contactIcon} /> +55 (89) 9 914289898</li>
                        <li className={styles.contactItem2}><FaMapMarkerAlt className={styles.contactIcon} /> Av Pedro Marques de Medeiros, Picos-PI</li>
                        <li className={styles.contactItem3}><FaEnvelope className={styles.contactIcon} /> dfasdfdsf@gmail.com</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
