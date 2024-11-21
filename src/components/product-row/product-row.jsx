import PropTypes from 'prop-types'

function ProductRow({ products }) {

    return (
        <>
            {products.map((product, index) => (
                <tr key={index}>
                    {product.inStock ? <td>{product.name}</td> : <td className='text-danger'>{product.name}</td>}
                    <td>{product.price}</td>
                </tr>
            ))}
        </>
    );
}

ProductRow.propTypes = {
    products: PropTypes.array.isRequired
};
export default ProductRow;