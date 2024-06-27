interface itemType { 
   id: number, 
   name: string, 
   description: string, 
   price: number 
};

interface cartType extends itemType { 
   count: number 
};