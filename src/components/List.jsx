import PropTypes from 'prop-types';
import Workout from "./Workout";

function List({workoutsList, onCorrect, onDelete}) {

  const sortByDate = (date1, date2) => {
    const a = date1.split('-');
    const b = date2.split('-');
    return b[0] - a[0] || b[1] - a[1] || b[2] - a[2];
  }

  return (
  <table className="table" cellSpacing={25}>
    <thead className="table-thead">
      <tr>
        <th>Дата (ГГГГ-ММ-ДД)</th>
        <th>Пройдено км</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody className="table-tbody">
      {workoutsList
        .sort((a, b) => sortByDate(a.date, b.date))
        .map((el) => <Workout key={el.id} workout={el} onCorrect={onCorrect} onDelete={onDelete} />)}
    </tbody>
  </table>
  );
}

List.propTypes = {
  workoutsList: PropTypes.array.isRequired,
  onCorrect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default List