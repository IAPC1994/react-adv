import { createContext } from 'react';

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import style from '../styles/styles.module.css';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { increaseBy, counter } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ style.productCard }>
                { children }
            </div>
        </Provider>
    );
}

