import styles from "./FadeInAttractScreen.module.scss";
import {NavLink} from "react-router-dom";

export default function FadeInAttractScreen() {
    return (
       <div className={styles.FadeInAttractScreen}>
           <div className={styles.container}>
               <NavLink to={"/biography"} key={"Biography"}>
               <div className={styles.box}>

                   <div className={styles.title}>
                       <span className={styles.block}></span>
                       <h1>siffert&nbsp;<div className={styles.bouncingDot}/></h1><h1>io</h1>
                   </div>

                   <div className={styles.role}>
                       <div className={styles.block}></div>
                       <p>A Work In Progress</p>
                   </div>

               </div>
               </NavLink>
           </div>
           <a href="" target="_blank">
               <footer>
                   <div className="texto">
        <span>
            <i className="fab fa-youtube"></i>
             watch on youtube</span>
                   </div>
               </footer>
           </a>
       </div>
    );
}
