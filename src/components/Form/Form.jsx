import React, { useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [country, Setcountry] = useState("");
  const [street, Setstreet] = useState("");
  const [subject, Setsubject] = useState("physical");

  const onChangeCountry = (e) => {
    Setcountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    Setstreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    Setsubject(e.target.value);
  };
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({ text: "Отправить данные" });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  });

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Страна"}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Улица"}
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSubject} className={"select"}>
        <option value={"physical"}>Физ. Лицо</option>
        <option value={"legal"}>Юр. Лицо</option>
      </select>
    </div>
  );
};

export default Form;
