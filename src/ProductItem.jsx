import styles from './ProductItem.module.css'

function ProductItem(props) {
    return (
        <div className={styles.card}>
            <img src={props.imgurl} alt={props.name} width="100%"/>
            <h4 className={styles.itemHeader}>{props.name}</h4>
            <p className={styles.itemPrice}>{props.price}</p>
            <p>{props.desc}</p>
        </div>
    )
        ;
}

ProductItem.propTypes = {
    name: String,
    desc: String,
    price: Number,
    imgurl: String
}

export default ProductItem