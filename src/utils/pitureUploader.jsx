import Axios from "../utils/Axios"

const handlePicture = (e, fileInput) => {
    fileInput.current.click()
}

export const handleSubmit = async (e, data) => {
    e.preventDefault()

    if(data.img == "") {
        data.onError("Please select an image")
    }

    let formData = new FormData()
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('available_stock',  data.stock)
    formData.append('category', data.category)
    formData.append('image', data.img)

    for (var pair of formData.entries()) {
        // console.log(pair[0]+ ', ' + pair[1]);
        }

    const response = await Axios.post("/api/product/create", formData).then(response => {
        console.log(response.data)
    })

}

export default handlePicture