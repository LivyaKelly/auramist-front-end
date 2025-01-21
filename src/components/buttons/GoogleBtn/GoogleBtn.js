"use client";
import Image from "next/image";
import styles from '@/components/buttons/GoogleBtn/GoogleBtn.module.css';


export default function GoogleBtn() {
    return (
        <button
            onClick={() => signIn("google", { callbackUrl: "/questionario" })}
            className={styles['botao-google']}
            >
            <div className={styles['imagem-botao']}>
                <Image src="/img/icons/Google-Icon.svg" alt="Google" width={20} height={20} />
                Login com Google
            </div>
        </button>
    );
}