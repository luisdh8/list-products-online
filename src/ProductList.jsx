import React, { useState, useEffect } from "react";
import "./styles/ProductList.css";

function ProductList() {
	// useState para almacenar la lista de productos
	const [products, setProducts] = useState([]);
	// useState para manejar el estado de carga
	const [loading, setLoading] = useState(true);

	// useEffect para simular una llamada a una API
	useEffect(() => {
		// Simulamos un tiempo de carga con setTimeout
		setTimeout(() => {
			setProducts([
				{
					id: 1,
					name: "Aspirin",
					price: 9.99,
					image: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750131861265L2.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
				},
				{
					id: 2,
					name: "Vitamin C",
					price: 12.5,
					image: "https://arteli.vtexassets.com/arquivos/ids/203904-800-auto?v=638576448311100000&width=800&height=auto&aspect=true",
				},
				{
					id: 3,
					name: "Cough Syrup",
					price: 15.75,
					image: "https://m.media-amazon.com/images/I/71I3x4GggrL.jpg",
				},
				{
					id: 4,
					name: "Pain Relief Gel",
					price: 19.99,
					image: "https://pics.walgreens.com/prodimg/624285/900.jpg",
				},
			]);
			setLoading(false);
		}, 1000);
	}, []); // Array vacío para que se ejecute solo una vez al montar el componente

	// Función para manejar el clic en "Agregar al carrito"
	const handleAddToCart = (productName) => {
		alert(`¡${productName} agregado al carrito!`);
	};

	if (loading) {
		return <div className="loading">Cargando productos...</div>;
	}

	return (
		<div className="product-list-container">
			<div className="product-grid">
				{/* Usamos map para recorrer y mostrar cada producto */}
				{products.map((product) => (
					<div key={product.id} className="product-card">
						<div className="product-image-container">
							<img
								src={product.image}
								alt={product.name}
								className="product-image"
							/>
						</div>
						<div className="product-info">
							<h3 className="product-name">{product.name}</h3>
							<p className="product-price">
								${product.price.toFixed(2)}
							</p>
							<button
								className="add-to-cart-btn"
								onClick={() => handleAddToCart(product.name)}>
								Add
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProductList;
