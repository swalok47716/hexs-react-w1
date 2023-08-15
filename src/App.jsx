import { useState } from "react";

const data = [
    {
        id: 1,
        name: "珍珠奶茶",
        description: "香濃奶茶搭配QQ珍珠",
        price: 50,
        stock: 20
    },
    {
        id: 2,
        name: "冬瓜檸檬",
        description: "清新冬瓜配上新鮮檸檬",
        price: 45,
        stock: 18
    },
    {
        id: 3,
        name: "翡翠檸檬",
        description: "綠茶與檸檬的完美結合",
        price: 55,
        stock: 34
    },
    {
        id: 4,
        name: "四季春茶",
        description: "香醇四季春茶，回甘無比",
        price: 45,
        stock: 10
    },
    {
        id: 5,
        name: "阿薩姆奶茶",
        description: "阿薩姆紅茶搭配香醇鮮奶",
        price: 50,
        stock: 25
    },
    {
        id: 6,
        name: "檸檬冰茶",
        description: "檸檬與冰茶的清新組合",
        price: 45,
        stock: 20
    },
    {
        id: 7,
        name: "芒果綠茶",
        description: "芒果與綠茶的獨特風味",
        price: 50,
        stock: 18
    },
    {
        id: 8,
        name: "抹茶拿鐵",
        description: "抹茶與鮮奶的絕配",
        price: 60,
        stock: 20
    }
];

function App() {
    const [newData, setNewData] = useState(data);
    const [toggleInput, setToggleInput] = useState(false);
    return (<div>
        <table>
            <thead>
                <tr>
                    <th scope="col">品項</th>
                    <th scope="col">描述</th>
                    <th scope="col">價格</th>
                    <th scope="col"></th>
                    <th scope="col">庫存</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    newData.map((item) => {
                        return (<tr key={item.id}>
                            {/* STUCK AT HERE */}
                            <td>{toggleInput ? <><input type="text" value={item.name} id="inputName" onChange={() => {
                                console.log(event.target.value);
                            }}></input> <button>儲存</button></> : <span onClick={() => {
                                setToggleInput(true);
                            }}>{item.name}</span>}</td>

                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => {
                                const newTodo = newData.map((newItem) => {
                                    if (newItem.id === item.id && newItem.stock > 0) {
                                        newItem.stock--;
                                    }
                                    return newItem;
                                });
                                setNewData(newTodo);
                            }}>-</button></td>
                            <td>{item.stock}</td>
                            <td><button onClick={() => {
                                const newTodo = newData.map((newItem) => {
                                    if (newItem.id === item.id) {
                                        newItem.stock++;
                                    }
                                    return newItem;
                                });
                                setNewData(newTodo);
                            }}>+</button></td>
                            {/* <td>{toggleInput ? <input type="text"></input> : <span onClick={() => {
                                setToggleInput(true);
                            }}>Click me</span>}</td> */}
                        </tr>);
                    })
                }
            </tbody>
        </table>
    </div>)
}

export default App;