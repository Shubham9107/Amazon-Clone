import axios from "axios";

export async function productData() {
    const products = await axios.get("https://fakedata.vercel.app/");
    return products
}
