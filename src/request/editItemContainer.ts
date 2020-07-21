import { createClient, useMutation } from "urql";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";


const UpdateItem = `
mutation ($item:String,$itemId:String) {
    updateList(item:$item,itemId:$itemId){
      item
    }
  }
`;

function useEditItem() {
  const [editItemResule, editItem] = useMutation(UpdateItem);
  const [editNewItem, setEditItem] = useState<string>("123");
  const [editItemId, setEditItemId] = useState<string>("");

  const editVariables = { item: editNewItem, itemId: editItemId };
  const [postStatus, setPost] = useState<string>("");
  useEffect(() => {
    editItemResule.data && console.log(editItemResule.data.createList);
    editItemResule.data && setPost("success");
    editItemResule.data && alert("成功");

    editItemResule.error && setPost("failed");
  }, [editItemResule.data]);
  return {
    editItem,
    editItemResule,
    editVariables,
    setEditItem,
    setEditItemId,
  };
}
export const EditItemContainer = createContainer(useEditItem);
