import { useEffect, useState } from "react";

export const Example1 = () => {
    const [val, setVal] = useState<string>('off');

    return <>
        <button onClick={() => setVal(val == 'off' ? 'on' : 'off')}>Toggle</button>


        child 1:
        <ChildComp val={val} />


        {val == 'on' && (
            <>
                child 2:

                <ChildComp2 val={val} />
            </>
        )
        }
    </>
}

type ChildProps = { val: string };

export const ChildComp = ({ val }: ChildProps) => {
    useEffect(() => {
        console.log("child comp 1 params updated: ", val);
    }, [val])
    return <div>from child one {val}</div>
}

export function ChildComp2({ val }: ChildProps) {
    useEffect(() => {
        return () => {
            console.log("cleanup is running now...")
        }
    }, []);
    return <div>from child two {val}</div>
}