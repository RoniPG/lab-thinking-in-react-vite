import ProductTable from "../product-table/product-table";
import SearchBar from "../search-bar/search-bar";

import { useState } from "react";
import jsonData from "../../data.json";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    return(
        <>
        <div>
            <h1>IronStore</h1>
        </div>
        <SearchBar className="mb-2"/>
        <ProductTable products={products} />
        </>
    );
}

export default ProductsPage;