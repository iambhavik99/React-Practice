import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {

    const param = useParams();


    return (
        <>
            Product details page.
            <div>{param.id}</div>
            <div>
                <Link to=".." relative="path">go to products</Link>
            </div>
            <div>
                <Link to=".." relative="route">go to Home</Link>
            </div>
        </>
    )
}

export default ProductDetails;