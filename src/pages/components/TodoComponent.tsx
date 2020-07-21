import React, { useState, useEffect } from "react";
import { List, Button, Input } from "antd";
import { todoContainer } from "../todoContainer";
import { EditItemContainer } from "../../request/editItemContainer";
import { DeleteItemContainer } from "../../request/deleteItemContainer";


interface TodoComponentProps {
  name: string;
  id: string;
}

const TodoComponent = (props: TodoComponentProps) => {

  const [open, setOpen] = useState<boolean>(false);
  const {
    setEditItem,
    setEditItemId,
    editItem,
    editVariables,
  } = EditItemContainer.useContainer();
  const {
    setDeleteItemId,
    deleteItem,
    deleteVariables,
  } = DeleteItemContainer.useContainer();
  const { executeQuery } = todoContainer.useContainer();
  useEffect(() => {
    setEditItemId(props.id);
    setDeleteItemId(props.id);
  }, [props.id]);
  return (
    <div
      className="123"
      style={{ display: "flex", alignItems: "center", width: "100%" }}
    >
      <li
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        {props.name}
        <div>
          <Button
            style={{ marginRight: "5px", padding: "4px 8px 4px 8px" }}
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            edit
          </Button>
          <Button
            style={{ padding: "4px 8px 4px 8px" }}
            type="primary"
            onClick={() => {
              deleteItem(deleteVariables);
              executeQuery();
              console.log(props.name);
            }}
          >
            delete
          </Button>
          <dialog open={open} style={{ zIndex: 1, border: "0px" }}>
            <Input
              placeholder={""}
              onChange={(event) => {
                setEditItem(event.target.value);
              }}
              style={{
                width: "270px",
                marginRight: "10px",
                borderRadius: "5px",
                textAlign: "center",
                backgroundColor: "initial",
              }}
            ></Input>
            <Button
              style={{ padding: "4px 8px 4px 8px" }}
              type="primary"
              onClick={() => {
                setOpen(false);
                editItem(editVariables);
              }}
            >
              submit
            </Button>
          </dialog>
        </div>
      </li>
    </div>
  );
};

export default TodoComponent;
