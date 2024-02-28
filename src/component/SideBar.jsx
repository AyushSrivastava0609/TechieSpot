import React from 'react'
import styles from './SideBar.module.css';
export default function SideBar() {
  return (
    <div className={styles.sidenav}>
     <ul className={styles.sidemenu}>
        <li className={styles.courseitems}>HTML</li>
        <li className={styles.courseitems}>CSS</li>
        <li className={styles.courseitems}>JavaScript</li>
        <li className={styles.courseitems}>ReactJS</li>
        <li className={styles.courseitems}>Redux.js</li>
        <li className={styles.courseitems}>Java</li>
        <li className={styles.courseitems}>Data Structures</li>
        <li className={styles.courseitems}>Algorithms</li>
        <li className={styles.courseitems}>GitHub</li>
        <li className={styles.courseitems}>Version Control Systems</li>
        
     </ul>
      </div>
  )
}
