import { useEffect, useState } from 'react';
import './MyExample.scss';

const sourceList: string[] = ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4', 'List Item 5'];


export default function MyExample() {
    const [filteredList, setFilteredList] = useState<string[]>(sourceList);
    const [inputValue, setInput] = useState<string>('');
    useEffect(()=>{
        let filteredListTemp = sourceList.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredList(filteredListTemp);
        console.log(filteredList);
    }, [inputValue])
    return (
    <div className="main-container">
        <section className="input">
            <input type="text" className='input-bx' onChange={(event)=>setInput(event.target.value)}/>
        </section>
        <section className="list-itm">
            <ul className="item">
                {
                    filteredList.map((val, index)=><li key={index}>{val}</li>)
                }
            </ul>
        </section>
    </div>
    )
}

