import { createContext, useEffect, useRef, useState } from "react";

import ConsumerChild from './ConsumerChildComponent';
import ConsumerChild2 from './ConsmerChild2';

export const InputContext = createContext('');
export const AnotherContext = createContext<any>([]);

export default function ProviderComponent() {
    const [val, setVal] = useState<string>('');
    const [inpu, setInpu] = useState<string>('');
    /**
     * useRef is used to store a mutable value that does not cause a re-render when updated.
     * In this case, it's used to hold the identifier of a timer created by setTimeout.
     */
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const list = useState<string[]>(['item 1', 'item 2', 'item 3']);    

    useEffect(() => {
        console.log("Provider component value updated: ", val);
        if(debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        debounceTimer.current = setTimeout(()=>{
            setInpu(val);
        }, 2000);

        return ()=>{
            console.log("clean up - clean up");
            if(debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
        }
    }, [val])
    return (

        <section className="container">
            -------------- Provider Component -----------------
            <br />
            value: {val}
            <br />
            <input type="text" onChange={(event) => setVal(event?.target.value)} />
            <InputContext.Provider value={inpu}>
                {/* <ConsumerChild /> */}
                <ConsumerChild />
            </InputContext.Provider>
            <hr />
            {String(list)}
            <AnotherContext.Provider value={list[0][0]}>
                <ConsumerChild2 />
            </AnotherContext.Provider>
            <AnotherContext.Provider value={list[0]}>
                <ConsumerChild2 />
            </AnotherContext.Provider>
        </section>
    )
}