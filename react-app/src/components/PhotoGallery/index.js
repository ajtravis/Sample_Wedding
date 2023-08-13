import './PhotoGallery.css'

export default function PhotoGallery({photos}) {
    return(
        <div>{
            photos?.map(pic => {
                return <div>pic</div>
            })}
        </div>
    )
}

// todo: add pics
