import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import styles from '@/styles/login.module.css';
import GoogleBtn from '@/components/buttons/GoogleBtn/GoogleBtn';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login com:', email, password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <Image
            src="/img/logos/Logo-vertical.svg"
            alt="Auramist Logo"
            width={150}
            height={150}
                />
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <div className={styles.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.togglePassword}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
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
          <GoogleBtn />
        </form>
      </div>
    </div>
  );
}
