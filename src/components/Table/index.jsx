import "./table.scss";
// import TableWords from "../table/TableWords";

import TableData from "..//Table/TableData.jsx";
import SortButton from "..//SortButton/index.jsx";

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>
              № <SortButton />
            </th>

            <th>
              Фамилия <SortButton />
            </th>
            <th>
              Имя <SortButton />
            </th>
            <th>
              Отчество <SortButton />
            </th>
            <th>
              Дата рождения <SortButton />
            </th>
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
