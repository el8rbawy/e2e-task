'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faDollar, faSearch } from '@fortawesome/free-solid-svg-icons';
import jsonItems from '../public/items.json';
import { Main } from './style/styled';
import ShoppingCart from '@/components/cart';

interface sortType { 
   toggle: boolean, 
   items: { title: string, refId: string, isActive?: boolean }[] 
}

export default function Home() {
   const [items] = React.useState<itemType[]>(jsonItems);
   const [cartItems, setCartItems] = React.useState<cartType[]>([]);
   const [search, setSearch] = React.useState<string>('');
   const [range, setRange] = React.useState<{ min: string, max: string }>({ min: '', max: '' });
   const [sort, setSort] = React.useState<sortType>({ 
      toggle: false, 
      items: [
         { title: 'Name: A-Z', refId: 'nameBiggest' }, { title: 'Name: Z-A', refId: 'nameSmallest' }, 
         { title: 'Price: High to Low', refId: 'priceBiggest' }, { title: 'Price: Low to High', refId: 'priceSmallest' }
      ]
   });

   // Handle search input change
   const handleChangeSearch = (value: string) => {
      setSearch(value);
      // reset
      if (activeSort) handleSelectSort(-1);
      else if (range.min || range.max) setRange({ min: '', max: '' });
   }

   // Handle sort selection
   const handleSelectSort = (index?: number) => {
      if (typeof index === 'number') {
         if (index !== -1) {
            if (search) setSearch('');
            else if (range.min || range.max) setRange({ min: '', max: '' });
         }
         setSort({ ...sort, items: sort.items.map((item, idx) => ({ ...item, isActive: idx === index }))});

      } else {
         setSort(sort => ({ ...sort, toggle: !sort.toggle }));
      }
   }

   // Handle range input change
   const handleChangeRange = (key: 'min' | 'max', value: string) => {
      if (/^$|^\d+$/.test(value)) {
         setRange(range => ({ ...range, [key]: value }));
         // reset
         if (activeSort) handleSelectSort(-1);
         else if (search) setSearch('');
      }
   }

   // ---
   const handleAddItemToChart = (item: itemType) => {
      const index = cartItems.findIndex(cart => cart.id === item.id);

      if (index >= 0) {
         const arr = [...cartItems];
         arr[index].count += 1;
         setCartItems(arr);
      } else {
         setCartItems(cart => ([...cart, { ...item, count: 1 }]));
      }
   }

   // Memoized value for active sort option
   const activeSort  = React.useMemo(() => sort.items.find(sort => sort.isActive), [sort.items]);

   // Memoized filtered items based on search, range, and active sort
   const filterItems = React.useMemo(() => {
      if (search) {
         return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

      } else if (range.min || range.max) {
         return items.filter(item => {
            if (range.min && range.max) return item.price >= parseInt(range.min) && item.price <= parseInt(range.max);
            else if (range.min) return item.price >= parseInt(range.min);
            else if (range.max) return item.price <= parseInt(range.max);
         });

      } else if (activeSort) {
         const arr = [...items];
         if (activeSort.refId === 'nameBiggest') return arr.sort((a, b) => a.name.localeCompare(b.name));
         else if (activeSort.refId === 'nameSmallest') return arr.sort((a, b) => b.name.localeCompare(a.name)); 
         else if (activeSort.refId === 'priceBiggest') return arr.sort((a, b) => b.price - a.price); 
         else return arr.sort((a, b) => a.price - b.price);
      }
      return items;
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [search, sort.items, range]);
   
   return (
      <Main>
         <ShoppingCart items={ cartItems } setItems={ setCartItems } />
         <div className="filter">
            <div className="search">
               <FontAwesomeIcon icon={ faSearch } />
               <input placeholder="Search items" value={ search } onChange={ e => handleChangeSearch(e.target.value) } />
            </div>
            <div className="flex">
               <div className="sort" onClick={ _=> handleSelectSort() }>
                  <div className="title">
                     <span>{ activeSort?.title || 'Sort by' }</span>
                     <FontAwesomeIcon icon={ faAngleDown } />
                  </div>
                  { sort.toggle ? <ul>{ sort.items.map((item, index) => (
                     <li key={ item.refId } onClick={ _=> handleSelectSort(index) }>{ item.title }</li>
                  ))}</ul> : null }
               </div>
               <div className="range">
                  <div>
                     <FontAwesomeIcon icon={ faDollar } />
                     <input id="min" value={ range.min } onChange={ e => handleChangeRange('min', e.target.value) } />
                  </div>
                  <span>To</span>
                  <div>
                     <FontAwesomeIcon icon={ faDollar } />
                     <input value={ range.max } onChange={ e => handleChangeRange('max', e.target.value) } />
                  </div>
               </div>
            </div>
         </div>
         <ul className="items products">{
            filterItems.map(item => (
               <li key={ item.id }>
                  <div>
                     <h4>{ item.name }</h4>
                     <p>{ item.description }</p>
                  </div>
                  <span>Price: ${ item.price.toLocaleString() }</span>
                  <div className="add">
                     <button onClick={ _=> handleAddItemToChart(item) }>Add to Cart</button>
                  </div>
               </li>
            ))
         }</ul>
      </Main>
   );
}