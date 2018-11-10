import React from 'react';
import { Jumbotron, Button,} from 'react-bootstrap'
import { Link } from "react-router-dom"

const Prices = (props) => {
 return(
   <div>
     <section data-scroll-index="3" className="prices content-block">
       <div className="container">
         <h2 data-aos="zoom-in-up">Pricing</h2>
         <div className="row">
           <div className="col-md-4">
             <div className="price-option">
               <h3 className="price-option-name">ROUND CAKES</h3>
               <div className="price-option-main">
                 <div className="price-option-features">
                <p className="paragraph"> 8"               8-10              $19.99</p>
                 <p className="paragraph">10"             14-18              $31.99</p>
                <p className="paragraph"> 12"             25-30              $42.99</p>
                <p className="paragraph"> 14"             50-60              $86.99</p>
              <p className="paragraph">   16"             70-80             $112.99</p>

                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="price-option">
               <h3 className="price-option-name highlighted">SHEET CAKES</h3>
               <div className="price-option-main">
                 <div className="price-option-features">
              <p className="paragraph">   ¼ SHEET         18-20              $26.99</p>
              <p className="paragraph">   ½ SHEET         40-50              $54.99</p>
              <p className="paragraph">   FULL SHEET     80-108            $96.99</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="price-option">
               <h3 className="price-option-name">CUPCAKES </h3>
               <div className="price-option-main">
                 <div className="price-option-features">
                   <p className="paragraph">$8.00  ½ Dozen             $16.00 Dozen</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   </div>
 )
}

export default Prices;
