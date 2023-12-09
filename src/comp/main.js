import react from 'react';
import "./main.css"
const Main = ({pageName, designer}) => {
  return(
    <>
    <main>
   {pageName} page
   <br/>
   Designed by {designer}
  </main>
    
    </>
  )

}
export default Main