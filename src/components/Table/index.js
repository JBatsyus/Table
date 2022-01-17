import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./table.scss";
import dataList from "./dataList.json";

const patternNum = /^[0-9]+$/;
const patternCyrillic = /^[а-яё 0-9]+$/i;

const Table = () => {
  const [data, setData] = useState(dataList);

  const [columns] = useState([
    {
      title: "№",
      field: "id",
      editable: false,
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
    },
    {
      title: "Имя",
      field: "name",
      validate: rowData => {
        if (rowData.name === undefined || rowData.name === "") {
          return "Пустое поле";
        } else if (rowData.name.length < 2) {
          return "Неверное имя";
        } else if (!patternCyrillic.test(rowData.name)) {
          return "Только кириллица";
        }
        return true;
      },
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
    },
    {
      title: "Дата рождения",
      field: "hbty",
      editComponent: props => (
        <input
          type="date"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      ),
      validate: rowData => {
        if (rowData.hbty === undefined || rowData.hbty === "") {
          return "01.02.1900";
        }

        return true;
      },
    },
    {
      title: "История",
      field: "history",
      type: "numeric",
      validate: rowData => {
        if (
          rowData.history === undefined ||
          rowData.history === "" ||
          !patternNum.test(rowData.history)
        ) {
          return "Поставьте оценку";
        } else if (rowData.history.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
    },
    {
      title: "Философия",
      field: "philosophy",
      type: "numeric",
      validate: rowData => {
        if (
          rowData.philosophy === undefined ||
          rowData.philosophy === "" ||
          !patternNum.test(rowData.philosophy)
        ) {
          return "Поставьте оценку";
        } else if (rowData.philosophy.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
    },
    {
      title: "Информатика",
      field: "informatics",
      type: "numeric",
      validate: rowData => {
        if (
          rowData.informatics === undefined ||
          rowData.informatics === "" ||
          !patternNum.test(rowData.informatics)
        ) {
          return "Поставьте оценку";
        } else if (rowData.informatics.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
    },
    {
      title: "Экономика",
      field: "economics",
      type: "numeric",
      validate: rowData => {
        if (
          rowData.economics === undefined ||
          rowData.economics === "" ||
          !patternNum.test(rowData.economics)
        ) {
          return "Поставьте оценку";
        } else if (rowData.economics.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
    },
    {
      title: "Физика",
      field: "physics",
      type: "numeric",
      validate: rowData => {
        if (
          rowData.physics === undefined ||
          rowData.physics === "" ||
          !patternNum.test(rowData.physics)
        ) {
          return "Поставьте оценку";
        } else if (rowData.physics.length < 1) {
          return "Поставьте оценку";
        }
        return true;
      },
    },
  ]);
  // сохрание  LS, проверяет, есть ли что-то в LS
  useEffect(() => {
    const dataListMas = JSON.parse(localStorage.getItem("dataList"));
    if (dataListMas) {
      setData(dataListMas);
    }
  }, []);

  // сработал US, data изменена => переписывает массив dataList
  useEffect(() => {
    if (data) {
      localStorage.setItem("dataList", JSON.stringify(data));
    }
  }, [data]);
  return (
    <div className="box">
      <MaterialTable
        title="Таблица для обработки и хранения данных учащиххся"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                setData([...data, { ...newData, id: data.length + 1 }]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
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
