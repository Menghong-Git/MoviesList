// import { useProductContext } from "@/contexts/ProductContext";
// import { Button } from "@/components/ui/button";

// const ProductList = ({
//   onEdit,
// }: {
//   onEdit: (product: { id: string; name: string; price: number }) => void;
// }) => {
//   const { products, deleteProduct } = useProductContext();
//   return (
//     <div className="mt-6 border rounded p-4 w-full">
//       <h2 className="font-bold mb-2">Products</h2>
//       {products.length === 0 ? (
//         <div className="text-gray-500">No products yet.</div>
//       ) : (
//         <ul className="space-y-1">
//           {products.map((p) => (
//             <li
//               key={p.id}
//               className="border rounded px-2 py-1 flex items-center justify-between gap-2"
//             >
//               <span>{p.name}</span>
//               <span className="text-gray-700">${p.price.toFixed(2)}</span>
//               <div className="flex gap-1">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   onClick={() => onEdit(p)}
//                   type="button"
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   onClick={() => deleteProduct(p.id)}
//                   type="button"
//                 >
//                   Delete
//                 </Button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductList;
