import React, { createContext, Component } from 'react';

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {

    }

    render() {
        return(
            <ProductContext.Provider>
                
            </ProductContext.Provider>
        )
    }
}