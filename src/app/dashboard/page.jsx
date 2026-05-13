"use client";

import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className={styles.container}>

      <aside className={styles.sidebar}>
        <h2>Dulguun</h2>

        <nav>
          <a href="#">🏠 Home</a>
          <a href="#">📊 Stats</a>
          <a href="#">💻 Projects</a>
          <a href="#">⚙️ Settings</a>
        </nav>

        <button
          className={styles.logout}
          onClick={() => {
            localStorage.removeItem("isLogin");
            router.push("/login");
          }}
        >
          🚪 Logout
        </button>
      </aside>

      <main className={styles.main}>
        <h1>Dashboard 🚀</h1>

        <div className={styles.cards}>

          <div className={styles.card}>
            <h3>Projects</h3>
            <p>5+</p>
          </div>

          <div className={styles.card}>
            <h3>Learning</h3>
            <p>2 years</p>
          </div>

          <div className={styles.card}>
            <h3>Progress</h3>
            <p>100%</p>
          </div>

        </div>

        <div className={styles.bigCard}>
          <h2>Welcome back 👋</h2>
          <p>Эндээс чи өөрийн project-ууд, хөгжүүлэлтээ удирдана.</p>
        </div>

      </main>
    </div>
  );
}