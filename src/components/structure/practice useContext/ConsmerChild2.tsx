import { useContext } from "react";
import { AnotherContext } from "./ProviderComponent";


export default function ConsmerChild2() {
    const receivedVal = useContext(AnotherContext);
    const secondCont = useContext<any>(AnotherContext);

    return (
        <section className="child">
            child 2 component;
            value from context: {receivedVal}
            secondVal: {String(secondCont)}
        </section>
    )
}