import Notas from "./pages/Notas";

export default function Root(props) {
    return (
        <div style={{padding: '2rem'}}>
            <Notas/>
            <section>{props.name} is mounted!</section>
        </div>
    );
}
