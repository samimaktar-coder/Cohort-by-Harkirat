import axios from "axios";
import { useEffect, useState } from "react";

function useTodos(id) {
    const [todo, setTodo] = useState([]);


    useEffect(() => {
        axios
            .get("https://sum-server.100xdevs.com/todo?id=" + id)
            .then((res) => setTodo(res.data.todo));
    }, [id]);

    return todo;
}

export default useTodos;