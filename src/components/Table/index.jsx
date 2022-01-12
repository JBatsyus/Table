import "./table.scss";
// import TableWords from "../table/TableWords";

import Row from "..//Table/Row.jsx";

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table__title">
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Дата рождения</th>
            <th>История</th>
            <th>Философия</th>
            <th>Математика</th>
            <th>Экономика</th>
            <th>Физика</th>
            <th>Редактирование</th>
          </tr>
        </thead>

        <tbody>
          <Row />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
