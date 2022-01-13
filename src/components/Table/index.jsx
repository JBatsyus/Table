import "./table.scss";
// import TableWords from "../table/TableWords";

import TableData from "..//Table/TableData.jsx";

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table__title">
            <th>№</th>
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
          <TableData />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
