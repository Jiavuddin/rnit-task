import { useState } from "react";
import { Link } from "react-router-dom";

function DynamicForm() {

    const [category, setcategory] = useState("");

    const [dynamicForm, setDynamicForm] = useState([
        { id: 0, name: "", price: "" }
    ]);

    const [gridData, setGridData] = useState([]);

    const setNameChange = (id, key, value) => {
        const updatedFormData = dynamicForm.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    [key]: value
                }
            }

            return item;
        });

        setDynamicForm([...updatedFormData]);
    };

    const onRemove = (id) => {
        const updatedFormData = dynamicForm.filter(item => item.id !== id);

        setDynamicForm([...updatedFormData]);
    };

    const onAdd = () => {
        const updatedForm = [...dynamicForm];

        updatedForm.push({
            id: updatedForm.length,
            name: "",
            price: ""
        });

        setDynamicForm([...updatedForm]);
    };

    const validateSubmitData = () => category !== "" && dynamicForm.every(item => item.name !== "" && item.price !== "");

    const onSubmit = (e) => {
        e.preventDefault();

        if (validateSubmitData()) {

            const exisitingData = [...gridData];

            exisitingData.push({
                id: gridData.length,
                category: category,
                data: dynamicForm
            });

            setGridData([...exisitingData]);

            setcategory("");

            setDynamicForm([
                { id: 0, name: "", price: "" }
            ]);
        }
        else {
            alert("please enter entire data!");
        }
    }

    const onDeleteItem = (id) => {
        const filteredData = gridData.filter(item => item.id !== id);

        setGridData([...filteredData]);
    };

    return (
        <div>

            <select value={category} onChange={e => setcategory(e.target.value)}>
                <option value="">Select</option>
                <option value="mobile">Mobile</option>
                <option value="clothes">Clothes</option>
                <option value="laptop">Laptop</option>
            </select>

            {dynamicForm.map(item => (
                <div key={`form${item.id}`}>
                    <input
                        type="text"
                        value={item.name}
                        placeholder="name"
                        onChange={e => setNameChange(item.id, 'name', e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        value={item.price}
                        placeholder="price"
                        onChange={e => setNameChange(item.id, 'price', e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                    >Remove</button>
                    <button
                        type="button"
                        onClick={onAdd}
                    >Add</button>
                </div>
            ))}

            <button type="submit" onClick={onSubmit}>
                Submit
            </button>

            <div>
                {gridData.map(item => (
                    <>
                        <Link key={item.id} to={`/${item?.id}`} state={{ data: item }}>
                            {item.category}
                        </Link>
                        <br />
                        <button type="button" onClick={() => onDeleteItem(item.id)}>Delete</button>
                    </>
                ))}
            </div>

        </div>
    );
}

export default DynamicForm;