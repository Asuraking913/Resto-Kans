const uploader = (event, onImage) => {

  console.log(
    'event'
  )
  // return
  const file = event.target.files[0]
  if (file && allowedExtensions(file.name)) {
      const reader = new FileReader();
      reader.onloadend = async () => {
          onImage(t => reader.result)
      }

      const formData = new FormData()
      formData.append('estate', file)
      // for (let pair of formData.entries()) {
      //     console.log(`${pair[0]}: ${pair[1]}`);
      //   }
      // onFormData(t => [...t, formData])
      // axios.post("/api/estate/image/5cff66236c2d448e93512b52fa8fa8f6", formData)


      reader.readAsDataURL(file)
      event.target.value = ""

      return
  }
}

const allowedExtensions = (filename) => {
  const listExtensions = ['png', "jpeg", 'jpg']
  const newExt = filename.split(".").pop()
  return listExtensions.includes(newExt)
}

export default uploader