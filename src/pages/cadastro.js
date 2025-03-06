import { useState } from 'react';
import { useRouter } from 'next/router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/cadastro.module.css';

export default function Cadastro() {
  // Estados para armazenar os dados do formulário e gerenciar a visibilidade da senha
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCadastro = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        // Envia os dados do formulário (definindo role como CLIENT pois ainda nao foi implementado a logica de profissionais)
        body: JSON.stringify({ name, email, phone, password, role: "CLIENT" })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.message || "Erro no cadastro");
      } else {
        router.push("/home");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao efetuar cadastro");
    }
  };

  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.formContainer}>
        <Image
          src="/img/logos/Logo-vertical.svg"
          alt="Auramist Logo"
          width={150}
          height={150}
        />
        <form onSubmit={handleCadastro}>
          <input 
            name="name"
            type="text"
            placeholder="Digite seu nome"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            name="email"
            type="email"
            placeholder="Digite seu email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            name="phone"
            type="text"
            placeholder="Digite seu telefone"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className={styles.passwordField}>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
          <button type="submit" className={styles.cadastroButton}>
            Cadastrar
          </button>
          <p className={styles.loginLink}>
            Já tem uma conta? <Link href="/login">Faça login</Link>
          </p>
        </form>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}
