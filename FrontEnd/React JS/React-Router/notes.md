# React Router DOM:-
        *DOM -> Web*
        *Native -> APP*
#### What :      
- React router dom is a single page library in which we can perform multipage activity in a single page application. 
#### Why :
- Navigation between Components and Views. 
- Dynamic Routing
- Avoids full page Reload.
#### How :
- Follows browsers History according to that it performs.

**React version -> 18 (latest version -> 19)**  
**React Router version -> V6**


## Steps to create React Router:
- Step 1 :- 
    - install the library
    - npm i react-router-dom
- Step 2 :- 
    - src folder -> components
        Home.jsx
        About.jsx
        Contact.jsx
        Navbar.jsx
- Step 3 :- 
    - create a navbar with <Link>, and <NavLink>
        Navbar.jsx -> 
        ```
        import {Link} from "react-router-dom";
                              <a>- anchortag / choose a path
                        <li>
                        <Link to="/">Home</Link>
                        </li>   
        ```                      
- Step 4 :- App.jsx
        import { BrowserRouter as Bhagya, Routes, Route } from "react-router-dom";  
- Step 5 :- 
    - Create a route using
```
<Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/" element={<Contact />}></Route>
          <Route path="/" element={<Blog />}></Route>
        </Routes>
```        


