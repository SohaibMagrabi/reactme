
import  React from 'react';//the new version of react d't need this
import Header from '../comp/header' ;
import Footer from '../comp/footer'
import Main from '../comp/main'

const Home = () =>{
  return(
    <>
  <Header/>
  <Main pageName="Home" designer = "Sohaib Mahmoud"/>

  
  <Footer/>

    </>
  ); 
}
export default Home;