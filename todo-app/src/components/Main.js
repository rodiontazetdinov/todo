import Todo from "./Todo";

function Main (props) {
    return (
        <main className="content">
            <h1 className="content__title">TO DO</h1>
            <Todo tasks={props.tasks}/>
        </main>
    );
}

export default Main;