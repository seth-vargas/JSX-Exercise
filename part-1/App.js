const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Seth"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))