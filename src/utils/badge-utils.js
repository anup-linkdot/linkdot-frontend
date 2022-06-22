const getBase64Img = (file) => {
    return new Promise(async (resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
}

export { getBase64Img }