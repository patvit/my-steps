import PropTypes from 'prop-types';

function Workout({workout, onCorrect, onDelete}) {

    return (
        <tr>
            <td>{workout.date}</td>
            <td>{workout.distance}</td>
            <td> 
                <a className="correct-btn" href="#" onClick={() => {onCorrect(workout.id)}}>&#9998;</a>
                <a className="delete-btn" href="#" onClick={() => {onDelete(workout.id)}}>&#10008;</a>
            </td>
        </tr>
    );
}

Workout.propTypes = {
    workout: PropTypes.object.isRequired,
    onCorrect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Workout