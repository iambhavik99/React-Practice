import React, { useCallback, useState } from "react";

import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {

    const [age, setAge] = useState(23);
    const [salary, setSalary] = useState(100000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 25000);
    }, [salary]);


    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge} text="Age" />
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary} text="Salary" />
        </div>
    );

}

export default ParentComponent;