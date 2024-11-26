import ProductRow from "../product-row/product-row";

function ProductTable({products, search}) {
    return (
        <table className="table table-striped">
            <thead className="table-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                    <ProductRow products = {products} search={search}/>
            </tbody>
        </table>
    );
}

export default ProductTable;
