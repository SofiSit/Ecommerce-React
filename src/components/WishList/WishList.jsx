
import { Toaster } from 'react-hot-toast';



const Wishlist = ({ removeCart, wishes }) => {

    return (
        <>
                {wishes.length > 0 && wishes?.map((wish, indice) => {
                    return (
                        <div className="products">
                           <div className="product"
                        key={indice} >
                           <div className="product__image">
          <img src={wish.img} alt={wish.title} />
        </div>
        <div className="product__footer">
        <h1>{wish.title}</h1>
      </div>
      <div className="product-price-btn">
        
          <span>{wish.price}</span> €
                                <button  type="submit" value='add' onClick={() => { removeCart(indice) }} ><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                            <hr />
                        </div>
                        </div>
                    )
                }) || <div className="emptySaved">HAS NO FAVORITES YET</div>}
            
        </>
    );
};

export default Wishlist;