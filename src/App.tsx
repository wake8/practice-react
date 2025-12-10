import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyExample from './components/structure/Practice useState/MyExample'
import { MyOtherFun } from './components/structure/Practice useState/myExample2'
import { Example1 } from './components/structure/prop-drilling/Example1';
import ProviderComponent from './components/structure/practice useContext/ProviderComponent';
import { UseReducerComp } from './components/structure/practice useReducer/UseReducerComponent'
import { UseRefPractice } from './components/structure/practice useRef/UseRefPractice';
import { UseMemoPractice } from './components/structure/practice UseMemo/useMemoPractice';
import MemoExampleParent from './components/structure/practice Memo/MemoPractice';
import UseCallBackPractice from './components/structure/practice useCallback/UseCallBackPractice';
import { createBrowserRouter, Outlet } from 'react-router'
import { Menu } from './components/structure/menu/Menu';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='parent-cont'>
        App component
        <Menu></Menu>
        <section className="menu"></section>

        <Outlet />
        {/* <div>
          <MyExample />
        </div>
        <div>
          <MyOtherFun />
        </div>
        <div>
          <Example1 />
        </div> */}
        {/* <div>
          <ProviderComponent />
          <UseReducerComp />
        </div> */}
        {/* <div>
          <UseRefPractice />
        </div> */}
        {/* <div>
          <UseMemoPractice />
        </div> */}
        {/* <div>
          // <MemoExampleParent/> 
          <UseCallBackPractice/>
        </div> */}
      </section>

    </>
  )
}

export default App
