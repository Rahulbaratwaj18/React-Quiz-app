export default function Progress({index,maxNoofQuestions,points,totalPoints}){
    return (
        <header className="progress">
            <progress max={maxNoofQuestions} value={index} />
            <p>Questions <strong>{index +1}</strong>/{maxNoofQuestions}</p>
            <p>Points <strong>{points}</strong>/{totalPoints}</p>
        </header>
    )
}