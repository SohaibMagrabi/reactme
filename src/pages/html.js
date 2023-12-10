import  React from 'react';//the new version of react d't need this
import Header from '../comp/header'
import Footer from '../comp/footer'
import Main from '../comp/main'
import{Helmet} from 'react-helmet-async'

const Html = () =>{
  return(
    <>
    <Helmet>
    <title>html step by step</title>
    <meta name="description" content="with us you will learn html"/>
    </Helmet>
      <Header/>

  <Main pageName="Html" designer = "Said Faroun"/>
  <Footer/>

    </>
  ); 
}
export default Html;