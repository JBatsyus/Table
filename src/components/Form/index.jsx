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
        className="input__null indent"
        type="date"
        title="Дата рождения"
        name="hbty"
        pattern="^[А-Яа-я]+$"
        required
      />
      <label className="label">
        История
        <input
          className="input__number"
          type="number"
          name="history"
          min="1"
          max="5"
          required
        />
      </label>
      <label className="label">
        Философия
        <input
          className="input__number"
          type="number"
          name="philosophy"
          min="1"
          max="5"
          required
        />
      </label>
      <label className="label">
        Информатика
        <input
          className="input__number"
          type="number"
          name="informatics"
          min="1"
          max="5"
          required
        />
      </label>
      <label className="label">
        Экономика
        <input
          className="input__number"
          type="number"
          name="economics"
          min="1"
          max="5"
          required
        />
      </label>
      <label className="label">
        Физика
        <input
          className="input__number"
          type="number"
          name="physics"
          min="1"
          max="5"
          required
        />
      </label>
    </div>
  );
};

export default Form;
