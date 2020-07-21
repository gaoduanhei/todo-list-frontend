import { createContainer } from "unstated-next";
import { useState, useEffect } from "react";
import { useQuery } from "urql";

interface TodoList {
  itemId: string;
  item: string;
}

function useTodo() {
  const [todo, setTodo] = useState<string>("");
  const [data, setData] = useState<Array<TodoList>>([]);
  const [itemId, setId] = useState<number>(0);
  // const increment = () => setId(itemId + 1);

  const [res, executeQuery] = useQuery({
    query: `query{
            lists {
                item
                itemId
            }
        }`,
    requestPolicy: "network-only",
    pause: true,
  });

  useEffect(() => {
    executeQuery();
  }, []);

  useEffect(() => {
    if (res.data && res.data.lists) {
      setData(res.data.lists);
    }
  }, [res]);


  return {
    todo,
    data,
    setTodo,
    setData,
    itemId,
    setId,
    res,
    executeQuery,
  };
}

export const todoContainer = createContainer(useTodo);
