import { useRef } from "react"

/**
 * 
 * for dom references, storing current value that does not trigger re-render on change,
 * persisting values across renders
 * 
 */
export const UseRefPractice = () => {
    let refEx = useRef<any>(null);

    const makeItFocus = () => {
        refEx.current!.focus()
    }
    return <>
    <section className="container">
        <input type="text" ref={refEx}/>
        <br />
        <button onClick={makeItFocus}> Focus me </button>
    </section>
    </>
}