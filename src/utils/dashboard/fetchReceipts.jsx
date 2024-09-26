import Axios from "../Axios"

const fetchreceipts = async (onLoading, onReceipts) => {
    onLoading(true)
    const response = await Axios.get("/api/order/").then(response => {
        // console.log(response.data)
        if(response.status == 200) {
            const object = response.data.data.map(item => ({
                orderId : item.orderId, 
                date : item.date, 
                items : item.products
            }))
           onReceipts([...object])
        }
        onLoading(false)
    })
}

export default fetchreceipts