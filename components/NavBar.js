import styles from '../styles/navbar.module.css'

function NavBar(){
    return(
        <div className={styles.container}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar