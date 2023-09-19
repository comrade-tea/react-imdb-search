import Select from "react-select";

const AutocompleteInput = ({query, setQuery, options = [], onUpdate, ...props}) => {
    // const [selectedOption, setSelectedOption] = useState(null);
    // console.log("----", selectedOption);

    return (
        <Select
            className={"text-zinc-950"}
            isMulti
            theme={(theme) => ({
                ...theme,
                borderRadius: "0.25rem",
            })}
            defaultValue={query}
            onInputChange={setQuery}
            onChange={onUpdate}
            options={options}
            {...props}
        />
    );
}
export default AutocompleteInput;
