import './PhotoGallery.css'
import { imageList } from './photoData'

export default function PhotoGallery() {
    return(
        <div id='gallery-container'>{
            imageList?.map(pic => {
              return <img className={"gallery-img"} src={pic}/>
            })}
        </div>
    )
}

// todo: add pics
