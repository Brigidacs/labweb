import ProductCard from "components/ProductCard";

const catalog = () => {
 return (
    
    <div className=" container my-4">
       <div className="row">
        <div className= "col-sm-6 col-lg-4 col-x1-3">
       <ProductCard />
       </div>
       <div className= "col-sm-6 col-lg-4 col-x1-3">
       <ProductCard />
       </div>
       <div className= "col-sm-6 col-lg-4 col-x1-3">
       <ProductCard />
       </div>
       <div className= "col-sm-6 col-lg-4 col-x1-3">
       <ProductCard />
       </div>
       <div className= "col-sm-6 col-lg-4 col-x1-3">
       <ProductCard /> 
    </div>

    </div>



 </div>
    
 );
};

export default catalog;