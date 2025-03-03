import styles from "./Header.module.css";
import logo from "./assets/Canyon.png";

function Header(props) {
    return (<header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.navh}><a href="#"><img src={logo} alt={"Canyon Logo"} height="60px" /></a></h1>
                <input type="text" placeholder="Filter" onChange={props.handleFilter}/>
            </nav>
        </header>
    );
}

export default Header