import { ProductCard } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap' }}>
                
                {
                    products.map( ( product ) => (
                        <ProductCard 
                            product={ product }
                            className="bg-dark text-white"
                            key={ product.id }
                            value={ shoppingCart[ product.id ]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductCard.Image className='custom-image' style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }}/>
                            <ProductCard.Title className="text-white text-bold"/>
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard> 
                    ))
                }               
            </div>
            <div className="shopping-cart">
                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product }
                            className="bg-dark text-white"
                            style={{width: '100px'}}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductCard.Image className='custom-image' style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }}/>
                            <ProductCard.Buttons 
                                className="custom-buttons" 
                                style={{ display: 'flex', justifyContent: 'center' }}
                            />
                        </ProductCard>
                    ))
                }
            </div>          
        </div>
    );
};
