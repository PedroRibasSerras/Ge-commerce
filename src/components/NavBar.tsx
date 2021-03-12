import styles from '../styles/NavBar.module.css';
import { SearchBar } from './SearchBar';
import { HorizontalNavegation } from './HorizontalNavegation';



function NavBar(props){
    return(
        <header className={styles.navBarContainer}>
            <div className={styles.corners}>
                <button>
                    <i className="fa fa-bars" />
                </button>
                <a href="#">
                    <img src="logoLg.png" alt="logo" />
                    <img src="logoSm.png" alt="logo" />
                </a>
            </div>
            <SearchBar />
            <div className={styles.corners}>
                <HorizontalNavegation/>
            </div>
        </header>
    )
}

export { NavBar };