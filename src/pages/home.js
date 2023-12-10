
import  React from 'react';//the new version of react d't need this
import Header from '../comp/header' ;
import Footer from '../comp/footer'
import Main from '../comp/main'
import{Helmet} from 'react-helmet-async'


const Home = () =>{
  return(
    <>
    <Helmet>
    <title>FrontEnd step by step</title>
    <meta name="description" content="with us you will learn FrontEnd"/>
    </Helmet>
  <Header/>
  <Main pageName="Home" designer = "Sohaib Mahmoud"/>

  
  <Footer/>

    </>
  ); 
}
export default Home;