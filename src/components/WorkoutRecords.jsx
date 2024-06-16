import { useState } from "react";
import Form from './Form';
import List from './List';

function WorkoutRecords() {
    const [workoutsList, setWorkoutsList] = useState([]);
    const [changedObj, setChangedObj] = useState({});

    const addWorkout = (workout) => {
        setChangedObj({});
        if(workoutsList.some((item) => item.date === workout.date)) {
            setWorkoutsList((prev) => prev.map((obj) => {
                if(obj.date === workout.date) {
                    return {
                        id: workout.id,
                        date: workout.date,
                        distance: Number(workout.distance) + Number(obj.distance),
                    }
                }
                return obj;
            }));
        } else {
            setWorkoutsList(prev => [...prev, workout]);
        }
    };

    const deleteWorkout = (id) => {
        setWorkoutsList(workoutsList.filter(item => item.id !== id));
    };

    const correctWorkout = (id) => {
        const obj = workoutsList.find(item => item.id === id);
        if(!Object.keys(changedObj).length) {
            setChangedObj(obj);
            deleteWorkout(id);
        }
    };

    return(
    <>
        <Form addWorkout={addWorkout} changedObj={changedObj} />
        <List workoutsList={workoutsList} onCorrect={correctWorkout} onDelete={deleteWorkout} />
    </>
    );
}

export default WorkoutRecords