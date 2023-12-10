import  React from 'react';//the new version of react d't need this
import Header from '../comp/header'
import Footer from '../comp/footer'
import Main from '../comp/main'
import{Helmet} from 'react-helmet-async'

const Css = () =>{
  return(
    <>
    <Helmet>
    <title>css step by step</title>
    <meta name="description" content="with us you will learn CSS"/>
  {/*   <style type ="text/css">
  {`  body{
      background-color : "blue";
    }`}
    </style> */}
    {/* the previous style is another trick to make css for body of the same page */}
    </Helmet>
    
    <Header/>

    <Main pageName="Css" designer = "Ali Hassan"/>

  <Footer/>
    </>
  ); 
}
export default Css;