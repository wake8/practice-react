import React from "react";
import { useEffect, useState } from "react"
/**
 * 
 * React Memo helps to avoid re-rendering of child components when parent component re-renders
 * 
 * when parent component re-renders, all child components also re-render by default,
 * even if there is no change in props passed to child component
 * 
 * Memo helps to render child component only when props passed to it changes
 */
export default function MemoExampleParent() {
    const [inp, setInp] = useState("");
    const [otherVal, setOtherVal] = useState("");
    return <>
        here is the parent component, lets make some changes in this;
        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <SearchComp prop={inp} />
        <hr />
        <input type="text" onChange={(e)=>setOtherVal(e.target.value)} />
        {otherVal}
    </>
}

export const SearchComp = React.memo((prop: {prop:string}) => {

    const list = ['apple', 'banana', 'orange', 'berry'];
    const [filteredList, setFilter] = useState(list);
    useEffect(() => {
        console.log("SearchComp rendered");
        let fil = list.filter(i => i.split(prop.prop).length > 1);
        setFilter(fil);
    }, [prop]);
    return <>
        <div className="container">

            <hr />
            the final list:
            {JSON.stringify(filteredList)}
        </div>
    </>
})