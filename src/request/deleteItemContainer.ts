import { useMutation } from "urql";
import { useState } from "react";
import { createContainer } from "unstated-next";

const DeleteItem = `
mutation ($itemId:String) {
    deleteList(itemId:$itemId)
    {
        item
    }
}
`;

function useDeleteItem() {
  const [deleteItemResule, deleteItem] = useMutation(DeleteItem);
  const [deleteItemId, setDeleteItemId] = useState<string>("");

  const deleteVariables = { itemId: deleteItemId };
  return { deleteItem, deleteItemResule, deleteVariables, setDeleteItemId };
}
export const DeleteItemContainer = createContainer(useDeleteItem);
