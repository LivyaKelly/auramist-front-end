import { useState } from 'react';
import { useRouter } from 'next/router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { signIn } from "next-auth/react";
import Link from 'next/link';
import Image from "next/image";
import styles from '@/styles/login.module.css';
import GoogleBtn from '@/components/buttons/GoogleBtn/googleBtn'

export default async function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

//   const handleLogin  = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//   };

//   const result = await signIn("credentials", {
//     redirect: false,
//     email,
//     password,
//     callbackUrl: "/home", // Redirecionar após login
//   });

//   if (result.error) {
//     setError(result.error);
//   } else {
//     router.push(result.url);
// };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <Image
            src="/img/logos/Logo-vertical.svg"
            alt="Auramist Logo"
            width={150}
            height={150}
                />
        {/* <form onSubmit={handleLogin}>
          <input
             name="email"
             type="text"
             placeholder="Digite o seu email"
             className={styles.input}
          />
          <div className={styles.passwordField}>
            <input
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              className={styles.input}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.eyeButton}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
          <div className={styles.links}>
            <Link href="/recuperar-senha">Esqueceu a senha?</Link>
          </div>
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
          <p className={styles.singinLink}>
            Não tem conta? <Link href="/cadastro">Criar uma conta</Link>
          </p>
          <p className={styles.singinLink}>
            ou
          </p>
          </form> */}
        {error && <p className={styles.errorMessage}>{error}</p>}
          <GoogleBtn />
      </div>
    </div>
  );
}
