import React, { useState } from "react";
import styles from "./Steps.module.css"



const StepsInputs = (props) => {

    const [steps, setSteps] = useState([""])

    const handleChange = (e, i) => {
        let newSteps = [...steps]
        newSteps[i] = e.target.value
        setSteps(newSteps)
        sendStepsToForm(newSteps)
    }

    const sendStepsToForm = (steps) => {

        const formattedSteps = steps.map((s, i) => {
            return {
                number: i + 1,
                step: s
            }
        })
        const event = {
            target: {
                name: "steps",
                value: formattedSteps
            }
        }

        props.onChange(event)
    }

    return (
        <div>
            <label>Steps:</label>
            {steps.map((s, i) => {
                return (
                    <span key={i}>
                        {i + 1}
                        <textarea placeholder={`Step ${i + 1}`} value={s} onChange={(e) => handleChange(e, i)}> </textarea>
                    </span>
                )
            })}
            <button className={styles.enterButton} type="button" onClick={() => setSteps((prev) => [...prev, ""])}>Add Step</button>
        </div>
    )
}


export default StepsInputs;


