import arrow from '../image/arrow.png'
const Navbar = () => {

   return (


      <>

           <div class="background">
                 
                
               
           </div>

         <div className="myNavbar">

              
              

            <div className="logo">
               <h2>sunnyside</h2>
            </div>



            <div className="nav_component">
               <ul>
                  <li>
                     <a href="#" className="nav-link">Home</a>
                  </li>

                  <li>
                     <a href="#" className="nav-link">Services </a>
                  </li>


                  <li>
                     <a href="#" className="nav-link">Contact</a>
                  </li>
               </ul>

            </div>

         </div>

       <div className="title">
             <h3>WE ARE CREATIVES</h3>

             <div className="arrow"> 
                  <img src={arrow} />
             </div>
       </div>
      </>


   )
}


export default Navbar;