import styles from '../styles/Carosel.module.css';
import { useState } from "react";

interface CaroselImageObject{
    src:string;
    alt:string;
}

interface CaroselProps{
    images: Array<CaroselImageObject>;
    isEnableFinalButtons:boolean;
}

function Carosel({ images, isEnableFinalButtons }:CaroselProps){
    
    const [ imageNumber, setImageNumber ] = useState(0);


    function next(){
        if(imageNumber < images.length - 1){
            setImageNumber(imageNumber + 1);
        }   
        else{
            setImageNumber(0);
        }
    }

    function previous(){
        if(imageNumber != 0){
            setImageNumber(imageNumber - 1);
        }   
        else{
            setImageNumber(images.length - 1);
        }
    }


    let trans = `translateX(${imageNumber*-100}%)`;

    let imagesList = images.map((image) => {
        return(
            <img style={{transform: trans}} src={image.src} alt=""/>
        )}
    )
    

    return(
        <div className={ styles.caroselContainer } >
            <div className={ styles.imagesFlex } >
                {imagesList}
            </div>

            <div className={styles.controlls}>
                {( isEnableFinalButtons || imageNumber !== 0) &&
                <button style={{}}onClick = {previous} className={styles.previousBtn}>
                    <i className="fa fa-chevron-left"></i>
                </button>
                }
                <div></div>
                {(isEnableFinalButtons || imageNumber !== images.length - 1) &&
                <button onClick = {next} className={styles.nextBtn}>
                    <i className="fa fa-chevron-right"></i>
                </button>
                }
            </div>
        </div>
    );
};

export { Carosel };