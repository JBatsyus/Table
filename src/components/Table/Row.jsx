// import ButtonDelete from "../buttons/ButtonDelete";
// import ButtonEdit from "../buttons/ButtonEdit";
// import ButtonSave from "../buttons/ButtonSave";
import { useState } from "react";

const Row = props => {
  const [data, setData] = useState({
    id: props.id,
    surname: props.surname,
    name: props.name,
    patronymic: props.patronymic,
    hbty: props.hbty,
    history: props.history,
    philosophy: props.philosophy,
    informatics: props.informatics,
    economics: props.economics,
    physics: props.physics,
  });
  return (
    <tr key={props.id}>
      <td>
        <input className="input__id" type="number" name="id" value={data.id} />
      </td>
      <td>
        <input
          className="input__null"
          type="text"
          title="Фамилия"
          name="surname"
          value={data.surname}
          pattern="^[А-Яа-я]+$"
          placeholder="Фамилия"
          required
        />
      </td>
      <td>
        <input
          className="input__null"
          type="text"
          title="Имя"
          name="name"
          value={data.name}
          pattern="^[А-Яа-я]+$"
          placeholder="Имя"
          required
        />
      </td>
      <td>
        <input
          className="input__null"
          type="text"
          title="Отчество"
          name="patronymic"
          value={data.patronymic}
          pattern="^[А-Яа-я]+$"
          placeholder="Отчество"
          required
        />
      </td>
      <td>
        <input
          className="input__null"
          type="number"
          title="Дата рождения"
          name="hbty"
          value={data.hbty}
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="history"
          value={data.history}
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        {" "}
        <input
          className="input__number"
          type="number"
          name="philosophy"
          value={data.philosophy}
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="informatics"
          value={data.informatics}
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="economics"
          value={data.economics}
          min="1"
          max="5"
          required
        />
      </td>
      <td>
        <input
          className="input__number"
          type="number"
          name="physics"
          value={data.physics}
          min="1"
          max="5"
          required
        />
      </td>

      <td></td>
    </tr>
  );
};
export default Row;
