import ProductRow from "../product-row/product-row";
import PropTypes from 'prop-types'

function ProductTable({products}) {
    return (
        <table className="table table-striped">
            <thead className="table-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                    <ProductRow products = {products}/>
                    <ProductRow products = {products}/>
                    <ProductRow products = {products}/>
                    <ProductRow products = {products}/>
            </tbody>
        </table>
    );
}

ProductTable.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductTable;