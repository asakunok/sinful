"use client";

import styles from "./page.module.css";
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
        <div>
          <h2 className={styles.logo}>🔥 Dulguun Erdene</h2>

          <nav className={styles.nav}>
            <a href="#">🏠 Нүүр</a>
            <a href="#">📊 Статистик</a>
            <a href="#">💻 Төслүүд</a>
            <a href="#">📁 Файлууд</a>
            <a href="#">🧠 Ур чадвар</a>
            <a href="#">⚙️ Тохиргоо</a>
          </nav>
        </div>

        <button
          className={styles.logout}
          onClick={() => {
            localStorage.removeItem("isLogin");
            router.push("/login");
          }}
        >
          🚪 Гарах
        </button>
      </aside>

      <main className={styles.main}>

        <div className={styles.topbar}>
          <div>
            <h1>Хяналтын Самбар 🚀</h1>
            <p>Тавтай морил, Dulguun 👋</p>
          </div>

          <img
            className={styles.avatar}
            src="/profile.jpg"
            alt="profile"
          />
        </div>

        <div className={styles.cards}>

          <div className={styles.card}>
            <h3>📁 Төсөл</h3>
            <p>12+</p>
            <span>Идэвхтэй хөгжүүлэлт</span>
          </div>

          <div className={styles.card}>
            <h3>📚 Туршлага</h3>
            <p>2 Жил</p>
            <span>React & Next.js</span>
          </div>

          <div className={styles.card}>
            <h3>⚡ Ахиц</h3>
            <p>100%</p>
            <span>Өдөр бүр хөгжиж байна</span>
          </div>

          <div className={styles.card}>
            <h3>🔥 Rank</h3>
            <p>Pro</p>
            <span>Frontend Developer</span>
          </div>

        </div>

     <div className={styles.bigCard}>
          <h2>Тавтай морил 👋</h2>

          <p>
            Эндээс чи өөрийн төслүүдээ удирдаж,
            хөгжүүлэлтийн явцаа хянаж,
            шинэ санаануудаа хэрэгжүүлэх боломжтой.
          </p>

          <button className={styles.startBtn}>
            🚀 Шинэ Төсөл Эхлэх
          </button>
        </div>

        <div className={styles.section}>
          <h2>🕒 Сүүлд хийсэн ажлууд</h2>

          <div className={styles.projects}>

            <div className={styles.projectCard}>
              <h3>Portfolio Website</h3>
              <p>Next.js ашиглан хувийн website хийж байна.</p>
            </div>

            <div className={styles.projectCard}>
              <h3>Login System</h3>
              <p>Authentication болон dashboard хөгжүүлэлт.</p>
            </div>

            <div className={styles.projectCard}>
              <h3>Anime UI Design</h3>
              <p>Орчин үеийн dark mode дизайн туршиж байна.</p>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}