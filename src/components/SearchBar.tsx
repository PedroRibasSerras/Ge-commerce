import styles from '../styles/SearchBar.module.css';

function SearchBar(props){
    return(
        <form className={styles.searchBarContainer}>
            <button>
                <i className="fa fa-caret-down" />
            </button>
            <input placeholder="Pesquisar" />
            <button>
                <i className="fa fa-search" />
            </button>
        </form>
    )
}

export { SearchBar };