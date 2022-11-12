import React from 'react'
import styles from "./Header.module.css"

import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg"

export const Header = () => {
  return (
    
        <header className={styles.header}>
          <div className={styles.logoContainer}>
          <Logo className={styles.logo}>pp</Logo>
            <span>Stock</span>
            </div>
          <div className={styles.userContainer}>
            <div className={styles.user}>E</div>
            <span >Emmanuel</span>
          </div>
          </header>
  
  )
}
