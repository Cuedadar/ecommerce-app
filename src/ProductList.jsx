import ProductItem from "./ProductItem.jsx";
import styles from "./ProductList.module.css";

function ProductList(props) {
    return (<div className={styles.list}>
                {props.products.map((product, index) => (
                    <ProductItem name={product.name}
                                 desc={product.desc}
                                 price={product.price}
                                 imgurl={product.imgurl}
                                 key={index}/>
                ))}
            </div>
    );
}

ProductList.propTypes = {
    products: Array
}

export default ProductList