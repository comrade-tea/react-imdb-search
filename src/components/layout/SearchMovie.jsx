import {Input} from "@/components/UI/Form/Input.jsx"
import Select from "@/components/UI/Form/Select.jsx";

const SearchMovie = () => {
    return <div>
        <div>Search:</div>

        <form>
            <Input attributes={{placeholder: "search.."}}/>

            <ul>
                <li>
                    <Select/>
                </li>
                <li>
                    <div>Release year:</div>
                    <Input attributes={{placeholder: "release year.."}}/>
                </li>
            </ul>
        </form>
    </div>
}

export default SearchMovie
