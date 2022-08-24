import { NFTStorage, File } from "nft.storage"

const uploadIPFS = (name, type, description, image) => {
    console.log('image file -- ', image)
    return new Promise(async (resolve, reject) => {
        const imageFile = new File([ image ], `${name}.png`, { type: 'image/png' })
        const client = new NFTStorage({
            token: process.env.REACT_APP_IPFS_TOKEN,
            // endpoint: new URL('http://localhost:8080/v1/')
        })
        console.log('here -- -')
        const cid = await client.store({
            image: imageFile,
            name,
            description,
            type
        })
        console.log('finished storing')
        resolve(cid)
    })
}

export { uploadIPFS }