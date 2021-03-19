import styles from '../styles/Carosel.module.css';
import { useState } from "react";

interface CaroselImageObject{
    src:string;
    alt:string;
}

interface CaroselProps{
    images: Array<CaroselImageObject>;
    heightSize: string;
}

function Carosel({ images, heightSize }:CaroselProps){
    const [ imageNumber, setImageNumber ] = useState(0);
    const [ newImageNumber, setNewImageNumber ] = useState(0);
    const [ isInTransition, setIsInTransition ] = useState(true);


    function next(){
        if(imageNumber < images.length - 1)
            setNewImageNumber(imageNumber + 1);
        else
            setNewImageNumber (0);
    }

    function previous(){
        if(imageNumber != 0)
            setNewImageNumber (imageNumber - 1);
        else
            setNewImageNumber(images.length - 1);
    }


    let mainImage = images[imageNumber];
    let newImage = images[newImageNumber];
    return(
        <div style={{ height: heightSize }}className={styles.caroselConteiner}>
            <section>d</section>
            {/* <button onClick={previous}></button> */}
            
                {(isInTransition) &&
                    <img className={styles.newImage} src={newImage.src} alt={newImage.alt}/>
                }
                {/* <img className={styles.mainImage}src={mainImage.src} alt={mainImage.alt}/> */}
            
            {/* <button onClick={next}></button> */}
            <section></section>
        </div>
    );
};

export { Carosel };