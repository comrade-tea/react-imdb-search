import VideoPlayer from "@/components/UI/VideoPlayer.jsx";
import {useCallback, useMemo, useRef, useState} from "react";
import {If} from "@/utils/utils.js";

const Trailers = ({trailers}) => {
    const playerRef = useRef()
    const videoSrc = useMemo(() => (
        trailers?.map(trailer => (
            {
                type: "video",
                sources: [{
                    src: trailer.key,
                    provider: trailer.site?.toLowerCase()
                }
]            }
        ))
    ), [])
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    const onButtonClick = useCallback((trailerIndex) => {
        setActiveIndex(trailerIndex);
    }, []);

    return (
        <>
            <div className="grid-video mt-20">
                <div className="grid-video__col grid-video__col--player">
                    {videoSrc.length > 0 && <VideoPlayer source={videoSrc[activeIndex]} ref={playerRef}/>}
                </div>

                <div className="grid-video__col grid-video__col--list">
                    <h3 className="section-title">Trailers:</h3>
                    
                    <ul className="video-list">
                        {trailers.map((trailer, index) => (
                            <li className="video-list__item" key={trailer.id}>
                                <button className={`btn btn--small ${If(index === activeIndex, "btn--active")}`} 
                                        onClick={() => onButtonClick(index)}>
                                    {trailer.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Trailers
