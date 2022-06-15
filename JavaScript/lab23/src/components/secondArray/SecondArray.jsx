import React from "react";
import PriceOfAllItems from "../PriceOfAllItems/PriceOfAllItems";

const SecondArray = ({ arrayList, deleteItem, ...props }) => {
  return (
    <>
      <table>
        <tr>
          <td>Назва</td>
          <td>Ціна</td>
          <td>Кількість</td>
          <td>Ціна за всі товари</td>
          <td>Видалення </td>
        </tr>
        {arrayList.map((i) => {
          return (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.price}</td>
              <td>{i.count}</td>
              <td>{i.price * i.count}</td>
              <td
                onClick={() => {
                  deleteItem(i.id);
                }}
              >
                Видалити
              </td>
            </tr>
          );
        })}
      </table>
      <form
        onSubmit={(event) => {
          props.handleChange(event);
        }}
        className={"form"}
      >
        <input
          className="input__item"
          type={"text"}
          name={"name"}
          placeholder={"Назва"}
          onChange={(event) => {
            props.setSecondArrayName(event.target.value);
          }}
        ></input>
        <input
          className="input__item"
          type={"text"}
          name={"price"}
          placeholder={"Ціна"}
          onChange={(event) => {
            props.setSecondArrayPrice(event.target.value);
          }}
        ></input>
        <input
          className="input__item"
          type={"text"}
          name={"count"}
          placeholder={"Кількість"}
          onChange={(event) => {
            props.setSecondArrayCount(event.target.value);
          }}
        ></input>

        <button> ADD </button>
      </form>

      <div className="item">
        <PriceOfAllItems arrayList={arrayList} />
      </div>
    </>
  );
};

export default SecondArray;
