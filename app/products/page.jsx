import ProductSlider from "../../components/ProductSlider";

export default async function ProductsPage() {
    const query = `
    {
      products(first: 4) {
        edges {
          node {
            id
            title
            images(first: 3) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

    const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-07/graphql.json`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token":
                    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN,
            },
            body: JSON.stringify({ query }),
            next: { revalidate: 3600 },
        }
    );

    const data = await response.json();
    const products = data?.data?.products?.edges || [];
    console.log(products);
    
    return (
        <div className="col_grid_inner flex">
            {products.map(({ node }) => (                
                <div className="product-card w-[25%]"  key={`${node.id}`} >
                    <ProductSlider  products={node} />
                </div>
            ))}
        </div>
    );
}
