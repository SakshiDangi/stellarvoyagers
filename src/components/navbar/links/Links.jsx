"use client"

import { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.scss";


    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Join",
            path: "/join",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Workshop",
            path: "/workshop",
        },
        {
            title: "About",
            path: "/about",
        },
    ];


const Links = () => {
    const [open, setOpen] = useState(false);   
    return (
        <div className={styles.container}>
          <div className={styles.links}>
            {links.map((link=>(
              <NavLink item={link} key={link.title}/>
            )))}
          
          </div>
      </div>
    )
}

export default Links;