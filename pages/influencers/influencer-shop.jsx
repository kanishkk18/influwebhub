// "use client"

// import { AnimatePresence } from "framer-motion"
// import { useState } from "react"
// import { ProductGrid } from "../brand/components/influencer-grid"
// import { CartDrawer } from "../brand/components/cart-drawer"
// import { ProductModal } from "../brand/components/influencer-modal"
// import  Navbar  from "../brand/navbar"
// import { products } from "@/components/assets/influencers.js" // ✅ Fixed named import

// export default function MinimalShop() {
//   const [cart, setCart] = useState([])
//   const [selectedProduct, setSelectedProduct] = useState(null) // ✅ Use null instead of ""
//   const [isCartOpen, setIsCartOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")

//   const addToCart = (product, quantity = 1) => {
//     setCart((prev) => {
//       const exists = prev.find((item) => item.id === product.id)
//       if (exists) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
//         )
//       }
//       return [...prev, { ...product, quantity }]
//     })
//   }

//   const removeFromCart = (productId) => {
//     setCart((prev) => prev.filter((item) => item.id !== productId))
//   }

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   return (
//     <div className="h-screen bg-zinc-50 dark:bg-zinc-950">
//       <Navbar cartItemCount={cart.length} onCartClick={() => setIsCartOpen(true)} onSearch={setSearchQuery} />

//       <div className="mx-auto px-2 pt-12 pb-16">
//         <ProductGrid products={filteredProducts} onProductSelect={setSelectedProduct} />
//       </div>

//       <AnimatePresence>
//         {selectedProduct && ( // ✅ Ensure selectedProduct is not null before rendering
//           <ProductModal
//             product={selectedProduct}
//             onClose={() => setSelectedProduct(null)}
//             onAddToCart={(product) => {
//               addToCart(product)
//               setSelectedProduct(null) // ✅ Use null instead of ""
//               setIsCartOpen(true)
//             }}
//           />
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {isCartOpen && (
//           <CartDrawer cart={cart} onClose={() => setIsCartOpen(false)} onRemoveFromCart={removeFromCart} />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }
