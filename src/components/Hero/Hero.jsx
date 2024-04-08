import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"; 

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Lyam</h1>
            <p className={styles.description}>
                I'm a full time undergraduate of computer science major in HKUST.
                Reach out if you'd like to learn more!
            </p>
            <a href="cytangav@connect.ust.hk" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};