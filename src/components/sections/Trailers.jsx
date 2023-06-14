import VideoPlayer from "@/components/UI/VideoPlayer.jsx";

const Trailers = ({trailers}) => {
    const videoSrc = {type: "video", sources: [{src: "yWtFb9LJs3o", provider: "youtube"},]};
    
    return (
        <>
            <h3 className="section-title">Trailers:</h3>

            <div className="grid-video">
                <div className="grid-video__col grid-video__col--player">
                    <VideoPlayer source={videoSrc}/>
                </div>

                <div className="grid-video__col grid-video__col--list">
                    <ul className="video-list">
                        {trailers.map(trailer => (
                            <li className="video-list__item" key={trailer.id}>{trailer.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Trailers
