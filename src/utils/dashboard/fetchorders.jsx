import Axios from "../Axios"

const fetchOrder = async (onOrder) => {
    try{
        const response = await Axios.get("api/order/")
        if(response.status == 200) {
            // console.log(response.data)
            const object = response.data.data.map(item => ({
                orderId : item.order_id, 
                date : item.date, 
                items : item.products
            }))
            // console.log(object)
            onOrder(prev => [...object, ...prev])

        }
    }

    catch(error) {
        console.log(error)
    }
}

export default fetchOrder