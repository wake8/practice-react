import { useEffect, useState } from "react"

import './myExample2.scss';

let count = 0;
let count2 = 0;
export const MyOtherFun = () => {
    const [colorInput, setInput] = useState<string>('');

    useEffect(()=>{
        console.log("useEffect called: ", count++);
    }, [colorInput]);

    useEffect(()=>{
        console.log("useEffect called no deps: ", count2++);
    })

    return <>  
    <section className="container">
        <input type="text" maxLength={6} onChange={(event)=>setInput(event?.target.value)} />
        <div className="color-div" style={{backgroundColor: `#${colorInput}`}}>
            here is your color
        </div>
    </section>
    </>
}