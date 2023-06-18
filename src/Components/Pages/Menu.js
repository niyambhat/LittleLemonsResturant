import React from 'react'
import Menus from '../Elements/Menus'
import item from "../../Assets/yum.png"

function Menu() {
  return (
    <div>

      <section className="aboutSection">
         <div className='sm-conatiner'>
         <div className="sideImage">
         <img src={item} alt="restaurant" width="400" />
       </div>
         <div className="aboutText">
         <h1>Menu</h1>
         <p>  Little Lemon Restaurant is a charming culinary haven that captivates diners with its delightful ambiance and exquisite flavors.
        Nestled in the heart of a bustling city, this hidden gem offers a unique fusion of traditional and modern cuisine, crafted with utmost precision and creativity.
        You can order from a range of delicious items that will tantalize your taste buds and leave you craving for more. </p>
       </div> 
       </div> 
     </section>
     <section className="aboutSection">
      <Menus/>
      </section>
    </div>
  )
}

export default Menu