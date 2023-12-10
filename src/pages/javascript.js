import  React from 'react';//the new version of react d't need this
import Header from '../comp/header'
import Footer from '../comp/footer'
import Main from '../comp/main'
import{Helmet} from 'react-helmet-async'

const JavaScript = () =>{
  return(
    <>
    <Helmet>
    <title>JavaScript step by step</title>
    <meta name="description" content="with us you will learn JavaScript"/>
    </Helmet>
    <Header/>
    

  <Main pageName="JavaScript" designer = "Yahia Mahmoud"/>



  <Footer/>
    </>
  ); 
}
export default JavaScript;