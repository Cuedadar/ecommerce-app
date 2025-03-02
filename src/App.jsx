import {useState} from 'react'
import './App.css'
import ProductList from "./ProductList.jsx";

function App() {
    const products = [
        {
            name: "High-Performance Laptop",
            desc: "A sleek and powerful laptop designed for professionals and gamers alike. Equipped with the latest generation processors, high-speed SSD, and a stunning display for all your multitasking needs.",
            price: 1299.99,
            imgurl: "https://placehold.co/400x300?text=Laptop&font=roboto"
        },
        {
            name: "Smartphone Pro Model",
            desc: "This smartphone combines cutting-edge technology with an elegant design. With an ultra-wide camera, blazing-fast processor, and exceptional battery life, it's tailored for modern living.",
            price: 999.99,
            imgurl: "https://placehold.co/400x300?text=Smartphone&font=roboto"
        },
        {
            name: "Wireless Bluetooth Headphones",
            desc: "Noise-cancelling wireless headphones with crystal clear sound quality. Designed for comfort and extended usage with up to 40 hours of playtime on a single charge.",
            price: 199.99,
            imgurl: "https://placehold.co/400x300?text=Headphones&font=roboto"
        },
        {
            name: "4K Ultra HD Smart TV",
            desc: "Experience cinematic brilliance with this 4K Ultra HD Smart TV. Enjoy vibrant colors, deep contrasts, and seamless streaming of your favorite shows and movies.",
            price: 799.99,
            imgurl: "https://placehold.co/400x300?text=Smart+TV&font=roboto"
        },
        {
            name: "Ergonomic Office Chair",
            desc: "Built for comfort and support, this ergonomic office chair is perfect for long hours of work or gaming. Featuring adjustable settings and superior back support.",
            price: 249.99,
            imgurl: "https://placehold.co/400x300?text=Office+Chair&font=roboto"
        }
    ];







    console.log(products);

    return (
        <div className="product-list">
            <ProductList products={products} key="1226"/>
        </div>
    )
}

export default App
