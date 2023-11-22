import Image from "next/image";
import styles from "./page.module.css";
import Showcase from "@/components/showcase/showcase";
import AboutContent from "@/components/sections/AboutContent/AboutContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_section_container}>
        <AboutContent/>
      </div>
    </main>
  );
}
