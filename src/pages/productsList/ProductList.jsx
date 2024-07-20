import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductItem from "../productItem/ProductItem";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, type === "checkbox" ? checked : value);
    setSearchParams(newSearchParams);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (minPrice && product.price < Number(minPrice)) {
      return false;
    }
    if (maxPrice && product.price > Number(maxPrice)) {
      return false;
    }
    return true;
  });
  return (
    <div className="ProductList">
      <div>
        <p>All Products Page</p>

        <label>
          Min price
          <input
            name="minPrice"
            type="number"
            value={searchParams.get("minPrice") || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Max price
          <input
            name="maxPrice"
            type="number"
            value={searchParams.get("maxPrice") || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Include discount
          <input
            name="includeDiscount"
            type="checkbox"
            onChange={handleChange}
            checked={searchParams.get("includeDiscount") === "true"}
          />
        </label>
        <label>
          Sort type
          <select
            name="sortType"
            value={searchParams.get("sortType") || "default"}
            onChange={handleChange}
          >
            <option value="default">by default</option>
            <option value="newest">newest</option>
            <option value="priceHighToLow">price: high-low</option>
            <option value="priceLowToHigh">price: low-high</option>
          </select>
        </label>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <Container maxWidth="1440px" sx={{ p: 4, maxWidth: "1440px" }}>
        <Grid container spacing={4}>
          {filteredProducts.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <ProductItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductList;
