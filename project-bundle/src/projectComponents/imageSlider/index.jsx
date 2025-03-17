import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./style.css"

export const ImageSlider = ({ url, limit = 5 }) => {

    const [image, setImage] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    

    async function fetchImage(getUrl) {
        try {

            setLoading(true)

            const response = await fetch(`${getUrl}limit=${limit}`);
            const data = await response.json()

            if (data) {
                setImage(data)
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImage(url)
    }, [url])

    if (loading) {
        return <div>Please Wait the data is loading</div>
    }

    if (errorMsg !== null) {
        return <div>Error message : {errorMsg}</div>
    }

    console.log(image);

    function handlePrevious() {
        setCurrentImage(currentImage === 0 ? image.length - 1 : currentImage - 1)

    }
    function handleNext() {
        setCurrentImage(currentImage === image.length - 1 ? 0 : currentImage + 1)
    }


    return <div className="container">
        <BsArrowLeftCircleFill
            onClick={handlePrevious}
            className="arrow arrow-left" />
        {
            image && image.length ?
                image.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.url}
                        alt=""
                        className={currentImage === index ? 'current-image' : 'current-image hide-current-image'}
                    />
                ))
                : null
        }
        <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow arrow-right" />
        <span className="circle-indicator">
            {
                image && image.length ?
                    image.map((_, index) => <button
                        key={index}
                        className={
                            currentImage === index ? "current-indicator" : "current-indicator inactive-indicator "
                        }
                        onClick={() => setCurrentImage(index)}
                    ></button>)
                    : null
            }
        </span>
    </div>
}