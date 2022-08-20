import Todo from "./Todo";

function Main ({ data }) {
    return (
        <main className="content">
            <h1 className="content__title">TO DO</h1>
            <Todo data={data}/>
        </main>
    );
}

export default Main;