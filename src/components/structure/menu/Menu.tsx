import { NavLink } from "react-router";
import "./Menu.scss";

export const Menu = () => {
    const routesLst = [
        {name: 'home', path: '/home'},
        {name: 'profile', path: '/profile'},
        {name: 'projects', path: '/projects'},
        {name: 'test', path: '/test'}
    ]
    return <>
    <section className="menu-cont">
        <ul>
            {routesLst.map((item)=><NavLink key={item.name} to={item.path}
                className={({isActive})=> isActive ? 'active-link' : '' }
            >{item.name}</NavLink>)}
        </ul>
    </section>
    </>
}