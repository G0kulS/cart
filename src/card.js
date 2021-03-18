import React from "react";

function Card(prod)
{
    return <div className="col-lg-4"><div className="card">
   <img src="..." className="card-img-top" alt=""/>
   <div className="card-body">
    <h5 className="item">{prod.i.name}</h5>
    <h5 className="price">{prod.i.price}</h5>
    <p className="card-text">This is an amazing product,And it is in offer now ,Offer is very limited. Hurry Up!!!</p>
    <button className="btn btn-primary" onClick={() => prod.fun(prod.i.name)}>Add to Cart</button>
    </div>
    </div>
    </div>
}

export default Card;