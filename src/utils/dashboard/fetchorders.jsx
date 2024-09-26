import Axios from "../Axios"

const fetchOrder = async (onOrder, onLoading) => {
    onLoading(true)
    try{
        const response = await Axios.get("api/order/")
        if(response.status == 200) {
            const object = response.data.data.map(item => ({
                orderId : item.orderId, 
                date : item.date, 
                items : item.products
            }))
            onOrder(prev => [...object])
            onLoading(false)
        }
    }

    catch(error) {
        onLoading(false)
        console.log(error)
    }
}

export default fetchOrder