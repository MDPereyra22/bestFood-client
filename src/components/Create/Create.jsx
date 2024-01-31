import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRecipe, getDiets } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import styles from "./Create.module.css";
import StepsInputs from "../StepsInputs/StepsInputs";


const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const diets = useSelector((state) => state.diets);

    const [errors, setErrors] = useState({})

    const [form, setForm] = useState({
        title: "",
        summary: "",
        healthScore: "",
        steps: [],
        image: "",
        diets: [],
    });

    useEffect(() => {
        dispatch(getDiets());
    }, []);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        setErrors(validation({
            ...form,
            [event.target.name]: event.target.value
        }))
    };

    const handleSelectDiet = (event) => {
        const selectedDiet = event.target.value;
        if (selectedDiet !== "") {
            if (!form.diets.includes(selectedDiet)) {
                setForm({
                    ...form,
                    diets: [...form.diets, selectedDiet],
                });
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.keys(errors).length === 0) {
            dispatch(postRecipe(form));
            setForm({
                name: "",
                summary: "",
                healthScore: "",
                steps: [],
                image: "",
                diets: [],
            });
            navigate('/home');
        } else {
            alert("incomplete data")
        } 
    };

    return (
        <div className={styles.container}>
            <Link to="/home">
            <button className={styles.enterButton}>Home</button>
            </Link>

            <h1 className={styles.h1}>Create recipe</h1>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={form.title}
                        name="title"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.title && (
                        <p className={styles.error}>{errors.title}</p>
                    )}
                </div>
                <div>
                    <label>Summary:</label>
                    <input
                        type="text"
                        value={form.summary}
                        name="summary"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.summary && (
                        <p className={styles.error}>{errors.summary}</p>
                    )}
                </div>
                <div>
                    <label>Health Score:</label>
                    <input
                        type="number"
                        value={form.healthScore}
                        name="healthScore"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.healthScore && (
                        <p className={styles.error}>{errors.healthScore}</p>
                    )}
                </div>
                <div>
                   
                    <StepsInputs 
                        value={form.steps}
                        name="steps"
                        onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={form.image}
                        name="image"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Diets:</label>
                    <select onChange={(e) => handleSelectDiet(e)}>
                        <option></option>
                        {diets.map((diet) => (
                            <option key={diet.name} value={diet.name}>
                                {diet.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Selected diets:</label>
                    <ul>
                        {form.diets.map((diet) => (
                            <li key={diet}>{diet}</li>
                        ))}
                    </ul>
                </div>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
};

export default Create;
