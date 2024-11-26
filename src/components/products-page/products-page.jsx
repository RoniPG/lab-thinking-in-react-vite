import ProductTable from "../product-table/product-table";
import SearchBar from "../search-bar/search-bar";

import { useState } from "react";
import jsonData from "../../data.json";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState("");


    // const searchProducts = () => {
    //     const filteredProducts = products.filter((p) => p.name.includes(search))
    //     setProductsToShow(filteredProducts);
    // }

    return (
        <>
            <div>
                <h1>IronStore</h1>
            </div>
            <SearchBar search={search} onSearch={setSearch} className="mb-2" />
            <ProductTable products={products} search={search}/>
        </>
    );
}

export default ProductsPage;