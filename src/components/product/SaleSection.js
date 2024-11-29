import React from 'react';
import SaleProduct from './SaleProduct';

const SaleItemSet = () => {
  const products = [
    { id: 1, name: "상품 이름1", price: 19600, discount: 18, image: "path/to/image1.jpg" },
    { id: 2, name: "상품 이름2", price: 19600, discount: 18, image: "path/to/image2.jpg" },
    { id: 3, name: "상품 이름3", price: 19600, discount: 18, image: "path/to/image3.jpg" },
    { id: 4, name: "상품 이름4", price: 19600, discount: 18, image: "path/to/image4.jpg" },
  ];

  return (
    <div className="product-section">
      <h2>놓치기 아쉬운 할인 상품</h2>
      <div className="product-list">
        {products.map((product) => (
          <SaleProduct
            key={product.id}
            name={product.name}
            price={product.price}
            discount={product.discount}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleItemSet;
