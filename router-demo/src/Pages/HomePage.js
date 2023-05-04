import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>This is home page</h2>
            <button onClick={() => navigate('/products')}>
                Go to products
            </button>
        </>
    )
}

export default HomePage;