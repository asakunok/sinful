"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const text = "Dulguun Erdene";
  const [displayText, setDisplayText] = useState("");
  const [dark, setDark] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState("about");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll((window.scrollY / total) * 100);

      ["about", "skills", "projects", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={`${styles.mainDiv} ${!dark ? styles.light : ""}`}>

      <div className={styles.scrollBar} style={{ width: scroll + "%" }} />

\      <div className={styles.cursorGlow} style={{ left: mouse.x, top: mouse.y }} />

      <div className={styles.matrix}></div>

      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Dulguun Erdene</h1>

        <div className={styles.navLinks}>
          <a className={active==="about"?styles.active:""} href="#about">Миний тухай</a>
          <a className={active==="skills"?styles.active:""} href="#skills">Чадвар</a>
          <a className={active==="projects"?styles.active:""} href="#projects">Төслүүд</a>
          <a className={active==="contact"?styles.active:""} href="#contact">Холбоо</a>

          <button
            className={styles.themeBtn}
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <Link href="/login" className={styles.loginBtn}>
            Нэвтрэх
          </Link>
        </div>
      </nav>

      <section className={styles.hero}>
        <h1 className={styles.name}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </h1>

        <p className={styles.subtitle}>
          Website хөгжүүлэгч | Сурагч | Волейбол
        </p>
      </section>

      <section id="about" className={styles.section}>
        <h2>Миний тухай</h2>
        <p>Би код бичих дуртай сурагч. React ашиглан сайт хийж сурч байгаа.</p>
      </section>

      <section id="skills" className={styles.section}>
        <h2>Чадвар</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
          <li>Python</li>
          <li>Волейбол тоглох</li>
        </ul>
      </section>

      <section id="projects" className={styles.section}>
        <h2>Төслүүд</h2>

        <div
          className={styles.card}
          onClick={() => window.open("https://github.com/asakunok", "_blank")}
        >
          <div className={styles.cardOverlay}>Төслийг үзэх</div>
          <h3>Website</h3>
          <p>React UI</p>
        </div>

        <div className={styles.card}>
          <h3>JavaScript</h3>
          <p>Python</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Миний үзүүлэлт</h2>

        <div className={styles.stats}>
          <div>
            <h3>2+</h3>
            <p>Төсөл</p>
          </div>

          <div>
            <h3>2+</h3>
            <p>Жил сурсан</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Хичээл зүтгэл</p>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Холбоо</h2>
        <input className={styles.input} placeholder="Email" />

        <button
          className={styles.button}
          onClick={() => alert("Амжилттай илгээгдлээ!")}
        >
          Send
        </button>
      </section>

      <button
        className={styles.topBtn}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2 className={styles.footerLogo}>Dulguun Erdene</h2>

          <p className={styles.footerText}>
            Website хөгжүүлэгч | Сурагч | Волейбол
          </p>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/dulguun.erdene.554136" target="_blank">Facebook</a>
            <a href="https://github.com/asakunok" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/akirawsss_/" target="_blank">Instagram</a>
          </div>

          <p className={styles.copy}>
            © {new Date().getFullYear()} Dulguun Erdene
          </p>
        </div>
      </footer>

    </div>
  );
}