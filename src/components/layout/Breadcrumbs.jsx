import {useMatches } from "react-router-dom";

const Breadcrumbs = () => {
    const matches = useMatches();
    const crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));

    console.log(matches);
    // console.log("----", crumbs);
    
    return (
        <div className="breadcrumbs">
            <div className="container mx-auto px-5 mt-6 mb-10">
                <ol>
                    {crumbs.map((crumb, index) => (
                        <li key={index}>{crumb}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default Breadcrumbs
