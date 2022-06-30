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
                       <h1>siffert.io<span></span></h1>
                   </div>

                   <div className={styles.role}>
                       <div className={styles.block}></div>
                       <p>A Work In Progress</p>
                   </div>

               </div>
               </NavLink>
           </div>

           <a href="https://youtu.be/7d2XsPSjjjI" target="_blank"><footer>
               <div className={styles.texto}>
        <span>
            <i className="fab fa-youtube"></i>
             find me on github</span>
               </div>
           </footer>
           </a>
       </div>
    );
}
