import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import dataList from "./dataList.json";

const patternCyrillic = /^[а-яё 0-9]+$/i;

// вертикаль
const cellStyle = () => {
  return {
    textAlign: "center",
    borderRight: `1px solid rgba(224, 224, 224, 1)`,
  };
};

const Table = () => {
  // состояние таблицы
  const [data, setData] = useState(dataList);

  // колонки и валидация строк
  const [columns] = useState([
    {
      title: "№",
      field: "id",
      editable: false,
      cellStyle,
    },
    {
      title: "Фамилия",
      field: "surname",
      validate: rowData => {
        if (rowData.surname === undefined || rowData.surname === "") {
          return "Пустое поле";
        } else if (rowData.surname.length < 2) {
          return "Неверная фамилия";
        } else if (!patternCyrillic.test(rowData.surname)) {
          return "Только кириллица";
        }
        return true;
      },
      cellStyle,
    },
    {
      title: "Имя",
      field: "name",
      validate: rowData => {
        if (rowData.name === undefined || rowData.name === "") {
          return "Пустое поле";
        } else if (rowData.name.length < 2) {
          return "Неверное имя";
        } else if (!patternCyrillic.test(rowData.surname)) {
          return "Только кириллица";
        }
        return true;
      },

      cellStyle,
    },
    {
      title: "Отчество",
      field: "patronymic",
      validate: rowData => {
        if (rowData.patronymic === undefined || rowData.patronymic === "") {
          return "Пустое поле";
        } else if (rowData.patronymic.length < 5) {
          return "Неверное отчество";
        } else if (!patternCyrillic.test(rowData.patronymic)) {
          return "Только кириллица";
        }

        return true;
      },
      cellStyle,
    },
    {
      title: "Дата рождения",
      field: "hbty",
      type: "date",
      validate: rowData => {
        if (rowData.hbty === undefined || rowData.hbty === "") {
          return "01.02.1900";
        }
        return true;
      },
      cellStyle,
    },
    {
      title: "История",
      field: "history",
      type: "numeric",
      validate: rowData => {
        if (rowData.history === undefined || rowData.history === "") {
          return "Поставьте оценку";
        } else if (rowData.history.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
      cellStyle,
    },
    {
      title: "Философия",
      field: "philosophy",
      type: "numeric",
      validate: rowData => {
        if (rowData.philosophy === undefined || rowData.philosophy === "") {
          return "Поставьте оценку";
        } else if (rowData.philosophy.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
      cellStyle,
    },
    {
      title: "Информатика",
      field: "informatics",
      type: "numeric",
      validate: rowData => {
        if (rowData.informatics === undefined || rowData.informatics === "") {
          return "Поставьте оценку";
        } else if (rowData.informatics.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
      cellStyle,
    },
    {
      title: "Экономика",
      field: "economics",
      type: "numeric",
      validate: rowData => {
        if (rowData.economics === undefined || rowData.economics === "") {
          return "Поставьте оценку";
        } else if (rowData.economics.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
      cellStyle,
    },
    {
      title: "Физика",
      field: "physics",
      type: "numeric",
      validate: rowData => {
        if (rowData.physics === undefined || rowData.physics === "") {
          return "Поставьте оценку";
        } else if (rowData.physics.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
      cellStyle,
    },
  ]);
  // сохрание  LS, проверяет, есть ли что-то в LS
  useEffect(() => {
    const dataListMas = JSON.parse(localStorage.getItem("dataList"));
    if (dataListMas) {
      setData(dataListMas);
    }
  }, []);

  // сработал LS, data изменена => переписывает массив dataList
  useEffect(() => {
    if (data) {
      localStorage.setItem("dataList", JSON.stringify(data));
    }
  }, [data]);
  return (
    <div className="box">
      <MaterialTable
        title="Таблица для обработки и хранения данных учащихся"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setData([...data, { ...newData, id: data.length + 1 }]);
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              resolve();
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              resolve();
            }),
        }}
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
