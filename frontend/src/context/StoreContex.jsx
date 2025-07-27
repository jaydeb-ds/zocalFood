import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({})
    const [token, setToken] = useState("");
    const [food_list, serFood_list] = useState([])
    const [show_login, setShow_login] = useState(false)


    const URL = "http://localhost:5000"

    const addToCart = async (itemId) => {


        if (token) {
            await axios.post(URL + "/api/cart/add", { itemId }, { headers: { token } })
            toast.success("item added", { theme: "colored", closeOnClick: true, autoClose: 2000, style: { position: 'absolute', zIndex: 1 } })
            if (!cartItem[itemId]) {
                setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
            }
            else {
                setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            }
        }
        else {
            toast.error("please login", { theme: 'colored', closeOnClick: true, autoClose: 2000, style: { position: 'absolute', zIndex: 1 } })
            setShow_login(true)
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        if (token) {
            await axios.post(URL + "/api/cart/remove", { itemId }, { headers: { token } })
            toast.error("Item removed", { theme: 'colored', closeOnClick: true, autoClose: 2000, style: { position: 'absolute', zIndex: 1 } })
        }
    }

    const getTotalAmount = () => {
        let total_amount = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {

                let itemInfo = food_list.find((product) => product._id === item);
                total_amount += itemInfo.price * cartItem[item]

            }
        }
        return total_amount;
    }


    const fetchFoodList = async () => {
        try {
            const reposnce = await axios.get(URL + "/api/food/list")
            serFood_list(reposnce.data.food)
        }
        catch (err) {
            console.log(err);
        }
    }

    const loadCartData = async (token) => {
        const response = await axios.post(URL + "/api/cart/get", {}, { headers: { token } })
        setCartItem(response.data.cartData)
    }

    useEffect(() => {

        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();

    }, [])


    const contextvalue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalAmount,
        show_login, setShow_login,
        URL,
        token, setToken
    }

    useEffect(() => {
        console.log(cartItem);

    }, [cartItem])


    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider