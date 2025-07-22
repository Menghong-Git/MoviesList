// import { useEffect, useState } from "react";
// import { useProductContext } from "@/contexts/ProductContext";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// type EditState = {
//   id: string;
//   name: string;
//   price: string;
// } | null;

// const CreateOrEditProductForm = ({
//   editProduct,
//   onCancelEdit,
// }: {
//   editProduct?: EditState;
//   onCancelEdit?: () => void;
// }) => {
//   const { addProduct, updateProduct } = useProductContext();
//   const [name, setName] = useState(editProduct ? editProduct.name : "");
//   const [price, setPrice] = useState(editProduct ? editProduct.price : "");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (editProduct) {
//       setName(editProduct.name);
//       setPrice(editProduct.price);
//     } else {
//       setName("");
//       setPrice("");
//     }
//   }, [editProduct?.id]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name.trim() || !price.trim()) {
//       setMessage("Name and price are required.");
//       return;
//     }
//     const priceNum = Number(price);
//     if (isNaN(priceNum) || priceNum < 0) {
//       setMessage("Price must be a valid non-negative number.");
//       return;
//     }
//     if (editProduct) {
//       updateProduct(editProduct.id, {
//         name: name.trim(),
//         price: priceNum,
//       } as Common.Product);
//       setMessage("Product updated!");
//       setTimeout(() => setMessage(""), 1500);
//       if (onCancelEdit) onCancelEdit();
//     } else {
//       addProduct({
//         id: crypto.randomUUID(),
//         name: name.trim(),
//         price: priceNum,
//       } as Common.Product);
//       setName("");
//       setPrice("");
//       setMessage("Product created!");
//       setTimeout(() => setMessage(""), 1500);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-xs">
//       <div className="space-y-2">
//         <label className="block text-sm font-medium" htmlFor="product-name">
//           Product Name
//         </label>
//         <Input
//           id="product-name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="e.g. Apple"
//         />
//       </div>
//       <div className="space-y-2">
//         <label className="block text-sm font-medium" htmlFor="product-price">
//           Price
//         </label>
//         <Input
//           id="product-price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="e.g. 9.99"
//           type="number"
//           min="0"
//           step="0.01"
//         />
//       </div>
//       <div className="flex gap-2">
//         <Button
//           type="submit"
//           className="w-full"
//           disabled={!name.trim() || !price.trim()}
//         >
//           {editProduct ? "Update Product" : "Create Product"}
//         </Button>
//         {editProduct && onCancelEdit && (
//           <Button
//             type="button"
//             variant="secondary"
//             className="w-full"
//             onClick={onCancelEdit}
//           >
//             Cancel
//           </Button>
//         )}
//       </div>
//       {message && <div className="text-destructive text-sm">{message}</div>}
//     </form>
//   );
// };

// export default CreateOrEditProductForm;
