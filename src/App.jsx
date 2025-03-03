import {useState} from "react";
import './App.css'
import ProductList from "./ProductList.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
    const allProducts = [
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
        },
        {
            name: "Gaming Mouse",
            desc: "High-precision gaming mouse with customizable buttons and RGB lighting. Designed for gamers who demand accuracy and speed during intense gaming sessions.",
            price: 49.99,
            imgurl: "https://placehold.co/400x300?text=Gaming+Mouse&font=roboto"
        },
        {
            name: "Wireless Keyboard",
            desc: "A sleek and durable wireless keyboard offering comfortable typing and long-lasting battery life. Ideal for work, school, or home office needs.",
            price: 69.99,
            imgurl: "https://placehold.co/400x300?text=Keyboard&font=roboto"
        },
        {
            name: "Fitness Tracker Watch",
            desc: "Track your fitness goals with this sleek fitness tracker. Features heart rate monitoring, sleep tracking, step counting, and smartphone notifications.",
            price: 149.99,
            imgurl: "https://placehold.co/400x300?text=Fitness+Tracker&font=roboto"
        },
        {
            name: "Portable Bluetooth Speaker",
            desc: "Compact and powerful Bluetooth speaker with deep bass and 12-hour battery life. Perfect for parties, travel, or personal use.",
            price: 99.99,
            imgurl: "https://placehold.co/400x300?text=Speaker&font=roboto"
        },
        {
            name: "Tablet Pro Edition",
            desc: "Lightweight and portable tablet with a vivid display, long battery life, and powerful processor. Great for entertainment and productivity on the go.",
            price: 549.99,
            imgurl: "https://placehold.co/400x300?text=Tablet&font=roboto"
        },
        {
            name: "Desktop Monitor",
            desc: "Crystal-clear HD desktop monitor with a wide viewing angle and fast refresh rate. Perfect for work, gaming, or multimedia editing.",
            price: 229.99,
            imgurl: "https://placehold.co/400x300?text=Monitor&font=roboto"
        },
        {
            name: "External Hard Drive",
            desc: "1TB external hard drive for quick and reliable data storage. Compatible with both Mac and Windows.",
            price: 79.99,
            imgurl: "https://placehold.co/400x300?text=Hard+Drive&font=roboto"
        },
        {
            name: "Smart Home Assistant",
            desc: "Voice-controlled smart home assistant to help with tasks, play music, and control other devices in your home.",
            price: 129.99,
            imgurl: "https://placehold.co/400x300?text=Home+Assistant&font=roboto"
        },
        {
            name: "Cordless Vacuum Cleaner",
            desc: "Powerful and lightweight cordless vacuum cleaner. Perfect for quick clean-ups and deep carpet cleaning.",
            price: 199.99,
            imgurl: "https://placehold.co/400x300?text=Vacuum+Cleaner&font=roboto"
        },
        {
            name: "Smart Thermostat",
            desc: "Save on energy bills with this smart thermostat. Control from your smartphone and set schedules for efficient energy use.",
            price: 179.99,
            imgurl: "https://placehold.co/400x300?text=Smart+Thermostat&font=roboto"
        },
        {
            name: "Electric Scooter",
            desc: "Eco-friendly and foldable electric scooter with a high-speed motor and long-range battery. Ideal for urban commutes.",
            price: 449.99,
            imgurl: "https://placehold.co/400x300?text=Scooter&font=roboto"
        },
        {
            name: "Digital Camera",
            desc: "Capture stunning photos with this compact digital camera. Features a wide-angle lens, optical zoom, and HD video recording.",
            price: 599.99,
            imgurl: "https://placehold.co/400x300?text=Camera&font=roboto"
        },
        {
            name: "Wireless Charger",
            desc: "Fast wireless charger compatible with all Qi-enabled devices. Sleek and portable for charging on the go.",
            price: 39.99,
            imgurl: "https://placehold.co/400x300?text=Wireless+Charger&font=roboto"
        },
        {
            name: "Action Camera",
            desc: "Rugged and waterproof action camera with 4K video support and image stabilization. Perfect for adventures and active lifestyles.",
            price: 249.99,
            imgurl: "https://placehold.co/400x300?text=Action+Camera&font=roboto"
        },
        {
            name: "Smartwatch for Kids",
            desc: "Durable and safe smartwatch for kids. Includes GPS tracking, calling features, and educational games.",
            price: 99.99,
            imgurl: "https://placehold.co/400x300?text=Kids+Smartwatch&font=roboto"
        },
        {
            name: "Electric Toothbrush",
            desc: "Smart electric toothbrush with multiple cleaning modes and a long-lasting battery. Designed for a perfect smile.",
            price: 59.99,
            imgurl: "https://placehold.co/400x300?text=Toothbrush&font=roboto"
        },
        {
            name: "Drone with Camera",
            desc: "High-tech drone with an HD camera, GPS, and easy controls. Ideal for beginners and experienced pilots alike.",
            price: 399.99,
            imgurl: "https://placehold.co/400x300?text=Drone&font=roboto"
        }
    ];

    const [products, setProducts] = useState(allProducts);

    const handleFilter = (e) => {
        let newProducts = allProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setProducts(newProducts);
    }

    return (
        <>
            <Header handleFilter={handleFilter} />
            <main>
                <ProductList products={products} key="1226"/>
            </main>
            <Footer />
        </>
    )
}

export default App
