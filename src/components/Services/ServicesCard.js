import React from "react";
import styles from './Services.module.scss';

export default function ServiceCard({children, image}) {
    return (
        <div className={styles.card}>
            <div className={styles["card-overlay"]} style={{backgroundImage: `url(${image})`}}></div>
            <div className={styles["card-body"]}>
                <h3 className={styles["card-title"]}>
                    {children}
                </h3>
            </div>
        </div>
    )
}
