import Axios from "../Axios"

const handleOrders = (itemsList, onLoading) => {
        const new_data = itemsList.filter(items => items.quantity != 0)
        const productIds = new_data.map(item => ({
            product : item.id
        }))

        console.log(productIds) 
        
        productIds.forEach( async items => {

            try{
                const response = await Axios.post("api/order/", items).then(response => {
                    console.log(response)
                })
            }
            catch(error) {
                console.log(error)
            }

        })
}

export default handleOrders