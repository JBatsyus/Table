import "./form.scss";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

const Form = () => {
  return (
    <div className="box">
      <input
        className="input__null"
        type="text"
        title="Фамилия"
        name="surname"
        pattern="^[А-Яа-я]+$"
        placeholder="Фамилия"
        required
      />
      <input
        className="input__null"
        type="text"
        title="Имя"
        name="name"
        pattern="^[А-Яа-я]+$"
        placeholder="Имя"
        required
      />
      <input
        className="input__null"
        type="text"
        title="Отчество"
        name="patronymic"
        pattern="^[А-Яа-я]+$"
        placeholder="Отчество"
        required
      />
      <input
        className="input__null"
        type="date"
        title="Дата рождения"
        name="hbty"
        pattern="^[А-Яа-я]+$"
        required
      />
    </div>
  );
};

export default Form;
