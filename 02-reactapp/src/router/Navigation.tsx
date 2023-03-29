import { BrowserRouter, NavLink } from "react-router-dom"
import logo from '../assets/react.svg'
import { Routes, Route, Navigate } from 'react-router';
import '../index.css'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from "./routes";
import { Suspense } from "react";




export const Navigation = () => {
  return (
    // <Suspense fallback={ <span>Loading...</span> }>
    <Suspense>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={ logo } alt="logo" />
            <ul>
              {
                routes.map( route => {
                  return (
                    <li key={ route.to }>
                      <NavLink 
                        to={ route.to } 
                        className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{ route.name }
                      </NavLink>
                    </li>
                  )
                })
              }

              {/* <li>
                <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage 1</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage 2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage 3</NavLink>
              </li> */}
            </ul>
          </nav>

          <Routes>
            {
              routes.map( route => {
                return (
                  <Route 
                    key={ route.to }
                    path={ route.path } 
                    element={ <route.Component /> } 
                  />
                )
              })
            }
            {/* <Route path="/lazy1" element={ <LazyPage1 /> } />
            <Route path="/lazy2" element={ <LazyPage2 /> } />
            <Route path="/lazy3" element={ <LazyPage3 /> } /> */}

            <Route path="*" element={ <Navigate to={ routes[0].to } replace /> }/>
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}
