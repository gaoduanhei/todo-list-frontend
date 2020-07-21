import React from "react";
import "antd/dist/antd.css";
import { Input, Button } from "antd";
import { todoContainer } from "./todoContainer";

import TodoComponent from "./components/TodoComponent";
import { AddItemContainer } from "../request/addItemContainer";
import { EditItemContainer } from "../request/editItemContainer";
import { DeleteItemContainer } from "../request/deleteItemContainer";
export default function TodoList() {
  const {
    data,
    todo,
    itemId,
    setTodo,
    setData,
    setId,
    executeQuery,
  } = todoContainer.useContainer();
  const { addItem, variables } = AddItemContainer.useContainer();
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        marginTop: "10%",
      }}
    >
      <div>
        <Input
          placeholder={""}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          style={{
            width: "250px",
            marginRight: "10px",
            borderRadius: "5px",
            textAlign: "center",
            backgroundColor: "initial",
          }}
        ></Input>
        <Button
          type="primary"
          style={{ borderRadius: "3px" }}
          onClick={() => {
         
            addItem(variables);
            executeQuery();
          }}
        >
          add todo
        </Button>
      </div>
      <div style={{ marginTop: "10px", width: "350px" }}>
        {data.map((todo, index) => {
          return (
            <EditItemContainer.Provider key={index}>
              <DeleteItemContainer.Provider>
                <TodoComponent name={todo.item} id={todo.itemId} key={index} />
              </DeleteItemContainer.Provider>
            </EditItemContainer.Provider>
          );
        })}
      </div>
    </div>
  );
}
