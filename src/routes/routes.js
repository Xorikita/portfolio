import HomePage from "../pages/HomePage/HomePage"

const home = <HomePage/>
const projects = <section style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'gold', color: 'black'}}><h1>Проекты</h1></section>
const about = <section style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'darkgreen'}}><h1>О себе</h1></section>

const menu_data = [
    {url: "/", title: "Главная", element: home},
    {url: "/projects", title: "Проекты", element: projects},
    {url: '/about', title: 'О себе', element: about},
]
export default menu_data