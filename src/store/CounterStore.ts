import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


const CounterStore = (set: any)=>{
    count: 0;
    increment: () => set((state: any)=>({count: state.count + 1}));
    decrement: () => set((state: any)=>({count: state.count - 1}));
}

const useCounterStore = create(
    devtools(
        persist(CounterStore,{
            name: 'counter-storage'
        })
    )
)
export default useCounterStore;