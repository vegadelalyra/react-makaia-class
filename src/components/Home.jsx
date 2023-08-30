import Counter from "./Counter"
import Person from "./Person"

function Home() {
    return (
        <>
            <h1>Home, sweet Home!</h1>
            <p>asjidjiaosfjioasf</p>
            <Counter />
            <Counter />

            <Person name="Juancito" age="17" />
            <Person name="Pedrito" age="15" />
            <Person name="Carlitos" age="18" />
        </>
    )
}

export default Home