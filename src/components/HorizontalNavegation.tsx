import styles from '../styles/HorizontalNavegation.module.css';
import UtilButtons from '../configJsons/UtilButtons.json';

function importanceClass(degree){
    switch(degree){
        case(1):
            return styles.importance1;
        case(2):
            return styles.importance2;
        case(3):
            return styles.importance3;
        case(4):
            return styles.importance4;
        case(5):
            return styles.importance5;
    }
}

function HorizontalNavegation(){

    let itemsBar = UtilButtons.map((utilButton) => {
        return(
            <li className={importanceClass(utilButton.importance)} key = {utilButton.text}>
                <a href = "#">
                    <i className ={ utilButton.icon}></i>
                    <span>{utilButton.text}</span>
                </a>
            </li>
        )
    })
   

    return(
        <nav className={styles.userNavagationContainer}>
            <ul>
                {itemsBar}
            </ul>
        </nav>
    )
}

export { HorizontalNavegation };