import React, { useState } from "react"
import "./Style.css" 

function Menu(){
  const[menu,setMenu]=useState([
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img:"./images/item-1.jpeg",
      desc: "I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img:"./images/item-2.jpeg",
      desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang  helvetica man braid jianbing. Marfa thundercats ,"
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img:"./images/item-6.jpeg",
      desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday,"
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img:"./images/item-7.jpeg",
      desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ,"
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img:"./images/item-8.jpeg", 
      desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"  
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    }
  ]
  
)
const[menulist,setMenulist]=useState(menu)

const cate=menu.map(food=>food.category)
console.log(cate);

const uniqcate=[...new Set(cate)]
console.log(uniqcate);

uniqcate.unshift("All")

const table=(dep)=>{
   if(dep==="All"){
     setMenulist(menu)
     return
   }
   

   const filterdata=menu.filter(
     food=>food.category===dep)
    setMenulist(filterdata)
  
 }
 
return(
     <div>
         <h1 className="head">Sri Hotel Menu List</h1><br></br>
         {uniqcate.map(dep=>
             <span onClick={()=>table(dep)} className="hd">{dep}</span>)}
      <div className="center"> 
       {menulist.map(food=>
         <div className="itms" key={food.id}>
             <img src={food.img} className="photo"/>
            <div className="info"> 
          <header>
             <h2>{food.title}</h2>
             <h3 className="price">${food.price}</h3>
             </header>
             <p className="text">{food.desc}</p>
             </div>
         </div> )}
        
     </div>
     </div>
 )
}
export default Menu