import { Link } from "react-router-dom";

const ProductPage = () => {

    const PRODUCTS = [
        { id: 1, title: 'item 1' },
        { id: 2, title: 'item 2' },
        { id: 3, title: 'item 3' }
    ]

    return (
        <>
            <h2>This is product page</h2>
            <ul>
                {
                    PRODUCTS.map(product => {
                        return (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ProductPage;