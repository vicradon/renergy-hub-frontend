import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface apiCategory {
  id: number;
  categoryName: string;
  description: string;
}

export interface apiProduct {
  id: number 
  categoryId: number;
  userId: number;
  name: string;
  user: any;
  description: string;
  price: string;
  stock: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
}

type VendorResponse = {
  id: number;
  
  firstName: string;
  lastName: string;
  username: string | null;
  email: string;
  password: string | null;
  userType: 'CUSTOMER' | 'VENDOR' | 'ADMIN';  // Adjust based on potential user types
  registerType: string | null;
  socialId: string | null;
  registrationDate: string;
  phoneNumber: string | null;
  brandName: string | null;
  brandType: string | null;
  streetAddress: string | null;
  city: string | null;
  zipCode: string | null;
  taxID: string | null;
  imageURL: string | null;
  confirmPassword: string | null;
  isVerified: 'true' | 'false';
  verificationToken: string | null;
  verificationTokenExpiresAt: string | null;
  resetToken: string | null;
  resetTokenExpiresAt: string | null;
};






interface Vendor {
  id: string|number;
  name: string;
}

interface Product {
  id: string;
  name: string;
  vendorId: string;
  categoryId: string;
  price: number;
  stock: number;
}

interface Category {
  id: number;
  categoryName: string;
}

type ProductStore = {
  vendors: Vendor[];
  products: apiProduct[];
  testProducts: apiProduct[];
  testIdProducts: [];
  testCategories: apiCategory[];
  testVendors: VendorResponse[];
  count: number;
  setCount: (value: number) => void; 
  userId:number
  setUserId: (value: number) => void;
  rating: number |null
  setCurrentRating: (value: number|null) => void;
  sort:string
  isClicked: boolean
  isDclicked: boolean
  isRClick: boolean
  setIsDclicked: (isDclicked: boolean) => void;
  setIsRClick: (isRClick: boolean) => void;
  setIsClicked: (isClicked: boolean) => void
  setSort: (sort: string) => void;
  categories: Category[];
  addedProduct: Product[];
  removeCart: (categoryId: number) => void; 
  selectedVendors: VendorResponse[];
  getProduct: ()=> Promise<void>;
  getVendor: ()=> Promise<void>;
  getProductId: (id:number)=> Promise<void>;
  getCategories: ()=> Promise<void>;
  detailProducts: apiProduct;
  // selectedProducts: Product[];
  selectedProducts: apiProduct[];
  setDetailProducts: (product: apiProduct) => Promise<void>;
  // selectedCategories: Category[];
  selectedCategories: Category[];
  // addToCart: (product: Product) => void;
  addToCart: (product: apiProduct) => void;
  setFilteredProduct: (productId: number) => Promise<void>;
  setFilteredVendor: (vendorId: number) => Promise<void>;
  setFilteredCategory: (categoryId: number) => Promise<void>;
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      sort:'',
      userId: 0,
      rating: 0,



      //detailsProducts object
       detailProducts: {
        id: 0,
        categoryId: 0,
       
        name: '',
        user: {},
        description: '',
        price: '',
        stock: 0,
        image: '',
        userId: 0,
        createdAt: '',
        updatedAt: '',
        category: { id: 0, categoryName: '', description: '' },
       },
       isDclicked: true,
       isRClick:true,
      testVendors: [],
      testCategories:[],
      testIdProducts:[],
      testProducts:[],
      count:1,
      isClicked: false,
      setIsClicked: (isClicked: boolean) => set({ isClicked }),
       setCount: (value: number) => set({ count: value }),

      vendors: [
     
      ],
      setIsDclicked: (isDclicked: boolean) => set({ isDclicked }),
      setIsRClick: (isRClick: boolean) => set({ isRClick }),
      setDetailProducts: async (product: apiProduct) => set({ detailProducts: product }),

      addToCart: (product: apiProduct) => set((state) => ({ products: [...state.products, product] })),
      removeCart: (categoryId: number) => set((state) => ({ products: state.products.filter((p) => p.categoryId!== categoryId) })),

        setSort: (sort: string) => set({ sort: sort }),
        //dummy data for sorting, filtering and searching purposes
      products: [
      
      ],
     setCurrentRating: (value: number|null) => set({ rating: value }),
     
     categories: [
        // { id: "all", name: "All Categories" },
        // { id: "solar-panels", name: "Solar Panels" },
        // { id: "inverters", name: "Inverters" },
        // { id: "batteries", name: "Batteries" },
        // { id: "charge-controllers", name: "Charge Controllers" },
        // { id: "mounting-systems", name: "Mounting Systems" },
        // { id: "monitoring-systems", name: "Monitoring Systems" },
      ],

      //state for data mutations
      selectedVendors: [],
      selectedProducts: [],
      selectedCategories: [],
      addedProduct: [],

      setUserId: (value: number) => set({ userId: value }),
      
     getProduct: async () => {

                 try{
                    const res = await fetch('https://renergy-hub-express-backend.onrender.com/api/v1/products') 
                    const products = await res.json()
                    const { data} = products
                    console.log(data)
                    set ({testProducts: data}) 
                 }catch(err){console.log(err)}


     },
     getProductId: async (id:number) => {

      try{
         const res = await fetch(`https://renergy-hub-express-backend.onrender.com/api/v1/products/${id}`) 
         const products = await res.json()
         const { data} = products
         const cleanData = structuredClone(data); // or manually clean circular references
         set({testProducts: cleanData})
      }catch(err){console.log(err)}


},


     getCategories: async () => {
      try{
        const res = await fetch('https://renergy-hub-express-backend.onrender.com/api/v1/products/category') 
        const categories = await res.json()
        const { data} = categories
        const cleanData = structuredClone(data); // or manually clean circular references
       set({testCategories: cleanData})
        
        console.log(data)
      }catch(err){console.log(err)}
     },

    getVendor: async () => {
      try{
        const res = await fetch('https://renergy-hub-express-backend.onrender.com/api/v1/users') 
        const vendors = await res.json()
        const { data} = vendors
        const cleanData = structuredClone(data); // or manually clean circular references
        set({testVendors: cleanData})
        
        console.log(data)
      }catch(err){console.log(err)}
     },



      setFilteredProduct: async (productId: number) => {
        const { testProducts, selectedProducts } = get();
        const product = testProducts.find((p) => p.id === productId);
        if (!product) return;

        set(() => {
          let updatedProducts = [...selectedProducts];

          // if (productId === 'all') {
          //   return { selectedProducts: updatedProducts.length === testProducts.length ? [] : testProducts };
          // }

          if (updatedProducts.some((p) => p.id === productId)) {
            updatedProducts = updatedProducts.filter((p) => p.id !== productId );
          } else {
            updatedProducts = [...updatedProducts, product];
          }

          // if (updatedProducts.length === testProducts.length) {
          //   updatedProducts.push({ id: 'all', name: 'All Products', vendorId: 'all', categoryId: 'all', price: 0, stock: 0 });
          // }

          return { selectedProducts: updatedProducts };
        });
      },

      setFilteredVendor: async (vendorId: number) => {
        const { testVendors, selectedVendors } = get();
        const vendor = testVendors.find((v) => v.id === vendorId);
        if (!vendor) return;

        set(() => {
          let updatedVendors = [...selectedVendors];

          // if (vendorId === 'all') {
          //   return { selectedVendors: updatedVendors.length === testVendors.length ? [] : testVendors };
          // }

          if (updatedVendors.some((v) => v.id === vendorId)) {
            updatedVendors = updatedVendors.filter((v) => v.id !== vendorId );
          } else {
            updatedVendors = [...updatedVendors, vendor];
          }

          // if (updatedVendors.length === vendors.length) {
          //   updatedVendors.push({ id: 'all', name: 'All Vendors' });
          // }

          return { selectedVendors: updatedVendors };
        });
      },




      setFilteredCategory: async (categoryId: number|string) => {
        const { testCategories, selectedCategories } = get();
        const category = testCategories.find((c) => c.id === categoryId);
        if (!category) return;

        set(() => {
          let updatedCategories = [...selectedCategories];

          // // Handle the "all" case
          // if (categoryId === 'all') {
          //   return { selectedCategories: updatedCategories.length === categories.length ? [] : categories };
          // }

          // Deselect category if already selected
          if (updatedCategories.some((c) => c.id === categoryId)) {
            updatedCategories = updatedCategories.filter((c) => c.id !== categoryId);
          } else {
            updatedCategories = [...updatedCategories, category];
          }

          // // If all categories are selected, include the "all" option
          // if (updatedCategories.length === categories.length) {
          //   updatedCategories.push({ id: 'all', name: 'All Categories' });
          // }

          return { selectedCategories: updatedCategories };
        });
      },
    }),
    {
      name: 'pro-storage', // Name of the storage item
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
); 