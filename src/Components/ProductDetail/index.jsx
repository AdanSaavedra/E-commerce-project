import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="w-6 h-6 text-black cursor-pointer" />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={
            context.productToShow.images ? context.productToShow.images[1] : ""
          }
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
