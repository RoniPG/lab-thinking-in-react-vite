import ProductRow from "../product-row/product-row";

function ProductTable() {
    return (
        <table className="table table-striped">
            <thead className="table-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <tr>
                    <ProductRow />
                </tr>
                <tr>
                    <ProductRow />
                </tr>
                <tr>
                    <ProductRow />
                </tr>
                <tr>
                    <ProductRow />
                </tr>
            </tbody>
        </table>
    );
}

export default ProductTable;