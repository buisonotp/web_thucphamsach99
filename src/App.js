/* eslint-disable react/jsx-pascal-case */

import { Fragment } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {pulicRouter} from './routes'
import  DefaultLayout  from './components/layout/DefaultLayout'
import './assets/css/styles.scss'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          {pulicRouter.map((route,index)=>{
           let Layout = DefaultLayout
            if(route.layout){
             Layout = route.layout
            }else if(route.layout===null){
               Layout= Fragment
            }
           
         
            const Page=route.Comment;
            return (
              <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>}/>
            )
          })}
      </Routes>
    </div>

    </Router>
  );
}

export default App;
