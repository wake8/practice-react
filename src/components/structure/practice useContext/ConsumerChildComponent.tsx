import { useContext } from "react"
import  { InputContext }  from "./ProviderComponent";

export default function ConsumerChild() {
    const value = useContext(InputContext);
    return (
        <>
        child component;
        value from context: {value}
        </>
    )
}