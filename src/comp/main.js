import react from 'react';
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