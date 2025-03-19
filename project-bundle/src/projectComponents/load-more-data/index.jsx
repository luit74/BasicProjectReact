import { useEffect, useState } from "react"
import "./style.css"

export const LoadProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disablebutton , setDisableButton] = useState(false);

    async function fetchProduct() {
        try {
            setLoading(true);

            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );
            const result = await response.json();
            console.log(result);

            if (result && result.products && result.products.length) {
                // Append new products to the list
                setProducts((prev) => [...prev, ...result.products]);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [count]);

    useEffect(()=>{
        if(products && products.length === 100)setDisableButton(true)
    },[products])

    return (
        <>
            <div className="load-more">
                {loading && <h1>Loading data please wait...</h1>}

                <div className="product-container">
                    {products.length > 0 ? (
                        products.map((item) => (
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        ))
                    ) : (
                        !loading && <h2>No Products Found</h2>
                    )}
                </div>

                <div>
                    <button disabled={disablebutton} onClick={() => setCount(count + 1)}>Load More Products</button>
                    {
                        disablebutton ? <h3>You have reached 100 products</h3> : null
                    }
                </div>
                
            </div>
        </>
    );
};
