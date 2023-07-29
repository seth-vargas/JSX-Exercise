const App = () => {
    return (
        <div>
            <Tweet username="takedowngrain24" name="Seth" date={getDate()} message="This is tweet 1" />
            <Tweet username="purpleocelot33" name="Nick" date={getDate()} message="This is tweet 2" />
            <Tweet username="tankyrhino190" name="Josh" date={getDate()} message="This is tweet 3" />
        </div>
    )
}

function getDate() {
    const today = new Date();
    return today.toLocaleString();
}

ReactDOM.render(<App />, document.getElementById("root"))