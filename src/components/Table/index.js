import React, { useState } from "react";
import MaterialTable from "material-table";
import { dataList } from "./dataList";

const Table = () => {
  const [data, setData] = useState(dataList);

  const columns = [
    {
      title: "№",
      field: "id",
      editable: false,
    },
    {
      title: "Фамилия",
      field: "surname",
    },
    {
      title: "Имя",
      field: "name",
    },
    {
      title: "Отчество",
      field: "patronymic",
    },
    {
      title: "Дата рождения",
      field: "hbty",
      size: "8",
    },
    {
      title: "История",
      field: "history",
    },
    {
      title: "Философия",
      field: "philosophy",
    },
    {
      title: "Информатика",
      field: "informatics",
    },
    {
      title: "Экономика",
      field: "economics",
    },
    {
      title: "Физика",
      field: "physics",
    },
  ];
  return (
    <div className="box">
      <MaterialTable
        title="Таблица для обработки и хранения данных учащиххся"
        data={data}
        columns={columns}
        options={{
          // сдвигаю колонки, строку добавления пользователяя выношу наверх
          actionsColumnIndex: -1,
          addRowPosition: "first",
          searchFieldStyle: { borderBottom: "1px solid #56776c" },
          rowStyle: {
            backgroundColor: "#b5c18b3f",
            color: "#464f41",
            fontSize: 20,
          },
          headerStyle: {
            fontSize: 20,
            backgroundColor: "#56776c",
            color: "#FFF",
          },
        }}
        localization={{
          body: {
            addTooltip: "Добавить учащегося",
            deleteTooltip: "Удалить",
            editTooltip: "Изменить",
            editRow: {
              deleteText: "Вы хотите удалить эту строку?",
              cancelTooltip: "Закрыть",
              saveTooltip: "Сохранить",
            },
          },
          header: {
            actions: "Действия",
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} из {count}",
            labelRowsSelect: "Строк",
            labelRowsPerPage: "Строк на странице:",
            firstAriaLabel: "Первая страница",
            firstTooltip: "Первая страница",
            previousAriaLabel: "Предыдущая страница",
            previousTooltip: "Предыдущая страница",
            nextAriaLabel: "Следующая страница",
            nextTooltip: "Следующая страница",
            lastAriaLabel: "Последняя страница",
            lastTooltip: "Последняя страница",
          },
          toolbar: {
            searchTooltip: "Введите, пожалуйста, что хотите найти",
            searchPlaceholder: "Поиск",
          },
        }}
      />
    </div>
  );
};
export default Table;
