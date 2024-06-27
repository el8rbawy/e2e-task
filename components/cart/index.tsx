import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Main } from "./styled";

export default function ShoppingCart(
   { items, setItems }: { items: cartType[], setItems: React.Dispatch<React.SetStateAction<cartType[]>> }
) {
   const [toggle, setToggle] = React.useState<boolean>(false);
   const cartRef = React.useRef<HTMLDivElement>(null);

   // ---
   React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (cartRef.current && !cartRef.current.contains(e.target as Node) && (e.target as HTMLElement).id !== 'removeIcon') setToggle(false);
      }
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
   }, []);

   // ---
   const handleRemoveItem = (index: number) => {
      const arr = [...items];
      arr.splice(index, 1);
      setItems(arr);
   }

   // ---
   const cartCount = React.useMemo(() => items.length ? items.reduce((total, item) => total + item.count, 0) : 0, [items]);

   return (
      <Main>
         <div className="container" ref={ cartRef }>
            <div className="basket" onClick={ _=> setToggle(t=> !t) }>
               { items.length ? <span>{ cartCount }</span> : null }
               <FontAwesomeIcon icon={ faBasketShopping } />
            </div>
            { toggle && items.length ? <div className="items">
               <ul>{
                  items.map((item, index) => (
                     <li key={ item.id }>
                        <h5>{ item.name } <span>(x{ item.count })</span></h5>
                        <p title={ item.description }>{ item.description }</p>
                        <FontAwesomeIcon className="remove" id="removeIcon" icon={ faTimes } onClick={ _=> handleRemoveItem(index) } />
                     </li>
                  ))   
               }</ul>
               <button>Checkout</button>
            </div> : null }
         </div>
      </Main>
   );
}