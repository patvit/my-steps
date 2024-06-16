import { useState } from "react";
import PropTypes from 'prop-types';

function Form({addWorkout, changedObj}) {
    const [form, setForm] = useState({date: '', distance: ''});

    if(Object.keys(changedObj).length && form.id !== changedObj.id) {
        setForm({
            id: changedObj.id,
            date: changedObj.date,
            distance: changedObj.distance,
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let workout;
        if(!Object.keys(changedObj).length) {
            workout = {
                id: String(Date.now() + 7),
                date: form.date,
                distance: form.distance,
            }
        } else {
            workout = {
                id: changedObj.id,
                date: form.date,
                distance: form.distance,
            }
        }
        addWorkout(workout);
        setForm({date: '', distance: ''});
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    return (
    <form className="form" onSubmit={onSubmit}>
        <div className="form-item">
            <label htmlFor="date" className="form-label">Дата (ДД.ММ.ГГГГ)</label>
            <input className="form-input" id="date" type="date" onChange={onChange} name="date" value={form.date} required/>
        </div>
        <div className="form-item">
            <label htmlFor="distance" className="form-label">Пройдено, км</label>
            <input className="form-input" id="distance" type="number" onChange={onChange} name="distance" value={form.distance} required/>
        </div>
        <div className="form-item">
            <button className="btn">Ok</button>  
        </div>
    </form>
    );
}

Form.propTypes = {
    addWorkout: PropTypes.func.isRequired,
    changedObj: PropTypes.object.isRequired
}

export default Form