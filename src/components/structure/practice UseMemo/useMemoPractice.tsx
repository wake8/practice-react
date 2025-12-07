import { useEffect, useMemo, useState } from "react"

/**
 * 
 * for values that don't change at all, 
 * to avoid expensive calculation for a non changed values
 * 
 * on every state change react re-renders the entire component, and 
 * same expensive calculation will repeat even thpugh if we are expecting no change
 * to previous calculation, so we wrap it around useMemo to make it retain across renders
 * 
 */
let count =0;
export function UseMemoPractice() {
    const [someVal, setSomeVal] = useState("hi there");

    let ar = [12, 34, 54, 64]
    //should be wrapped around useMemo
    const expensivevalue = 
    useMemo(() => {
        return Array.from(ar).filter((item) => {
            console.log("running filter");
            return item % 4 == 0;
        });
    }, ar);

    useEffect(() => {
        console.log("someVal has been updated: ", someVal);
    }, [someVal])

    function changeSomeVal() {
        setSomeVal("are you there!"+ count++);
    }

    return <>
        {JSON.stringify(expensivevalue)}
        <button onClick={changeSomeVal}>Change SomeVal</button>
    </>
}