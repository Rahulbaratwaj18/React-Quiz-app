export default function StartScreen({questions,dispatch}){
    return (
        <div className="start">
            <h2>Welcome to React Mastery Quiz</h2>
            <h3>Test your react knowledge with {questions} questions</h3>
            <button className="btn btn-ui" onClick={() => dispatch({type:"start"})}>Let's Start</button>
        </div>
    )
}