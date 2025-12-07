import React, { useCallback, useEffect, useMemo, useState } from "react";

/**
 * by default React re-renders all the child components too when parent component re-renders
 * even if there is no change in props passed to child component
 * 
 * We use React.Memo to avaoid rerendering the child component by limiting
 *  to only when props passed to it changes
 * but when we pass functions as props, it will defeat the purpose of Memo as
 * functions are recreated on every render and thus props change every time
 * 
 * UseCallback hook stabilizes function reference -- by retaining the same function reference across renders
 * unless its dependencies change
 * 
 * Hence when we use functions as props to child component wrapped in React.Memo,
 * we should wrap those functions in useCallback to avoid unnecessary re-renders
 * 
 * make sure the items we are using in useCallBack deps -- may change on new render, keep this in mind
 * if we don't want to have new items as the values are same - memoize them or move outside of component/ function
 * 
 */
export default function UseCallBackPractice() {

    const initialList = ['apple', 'banana', 'orange', 'berry'];
    const searchCompItems = useMemo(()=>['asd', 'dsf', 'adfasdf', 'wqewe', 'dff'],[]); //momoizing so that it will not create new array on every new render
    const [filteredList, setFilterList] = useState(initialList);
    const [inp, setInp] = useState("");

    const getItems = useCallback((): string[] => {
        return searchCompItems.filter(item => item.startsWith("a"));
    }, [searchCompItems])

    useEffect(() => {
        let list = initialList.filter(i => i.split(inp).length > 1);
        setFilterList(list);
    }, [inp])

    return <>
        parent input:
        {inp}
        <input type="text" onChange={(e) => setInp(e.target.value)} />
        filtered list:
        {JSON.stringify(filteredList)}
        <hr />
        passing function as props to child component:
        <SearchComp props={getItems} />


    </>
}

export const SearchComp = React.memo((props: { props: Function }) => {

    return <>
        {console.log("child component re-rendered")}
        here are the props received:
        {JSON.stringify(props.props())}
    </>
})