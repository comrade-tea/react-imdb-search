import {useMatches} from "react-router-dom";

const Breadcrumbs = () => {
    const matches = useMatches();
    const crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => match.handle.crumb(match.data));

    // console.log("----", matches)
    
    return (
        <div className="breadcrumbs">
            <div className="container mx-auto px-5">
                {crumbs.length > 1 && <ul className="breadcrumbs__list">
                    {crumbs.map((crumb, index) => (
                        <li className="breadcrumbs__item" key={index}>{crumb}</li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}
export default Breadcrumbs
