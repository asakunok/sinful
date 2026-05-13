"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "1" && password === "1") {
      router.push("/dashboard");
    } else {
      alert("Нэр эсвэл нууц үг буруу!");
    }
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.bgGlow}></div>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Нэвтрэх</h1>

        <div className={styles.inputBox}>
          <input
            className={styles.input}
            placeholder="хэрэглэгчийн нэр"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className={styles.icon}>👤</span>
        </div>

        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="нууц үг"
            placeholder="нууц үг"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={styles.icon}>🔒</span>
        </div>

        <div className={styles.row}>
          <label>
            <input type="checkbox" /> Намайг санах
          </label>
          <a href="#">Нууц үгээ мартсан?</a>
        </div>

        <button className={styles.btn} onClick={handleLogin}>
          Нэвтрэх
        </button>

        <p className={styles.link}>
          Бүртгэлгүй юу? <a href="#">Бүртгүүлэх</a>
        </p>
      </div>
    </div>
  );
}