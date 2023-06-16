import App from "@/App.jsx";

const Root = () => {
    return (
        <App/>
    )
}

export default Root

export function rootLoader() {
    return <div>loading..</div>
}

