import { useMutation } from "urql";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { todoContainer } from "../pages/todoContainer";

const UpdateTodo = `
  mutation ($item: String) {
    createList (item: $item) {
      item
      itemId
    }
  }
`;

function useAddItem() {
  const { todo } = todoContainer.useContainer();
  const [addItemResule, addItem] = useMutation(UpdateTodo);
  const variables = { item: todo };
  const [postStatus, setPost] = useState<string>("");
  useEffect(() => {
    addItemResule.data && console.log(addItemResule.data.createList);
    addItemResule.data && setPost("success");
    addItemResule.data && alert("成功");

    addItemResule.error && setPost("failed");
  }, [addItemResule.data]);
  return { addItem, addItemResule, variables };
}
export const AddItemContainer = createContainer(useAddItem);
