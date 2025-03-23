import { useState } from 'react';
import { useRouter } from 'next/router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/login.module.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); 

    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erro no login");
      } else {
        router.push("/cliente/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao efetuar login");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        {/* Exibe a logo */}
        <Image
          src="/img/logos/Logo-vertical.svg"
          alt="Auramist Logo"
          width={150}
          height={150}
        />
        {/* Formulário de login */}
        <form onSubmit={handleLogin}>
          <input 
             name="email"
             type="email"
             placeholder="Digite o seu email"
             className={styles.input}
             value={email}
             onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.passwordField}>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </form>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}
