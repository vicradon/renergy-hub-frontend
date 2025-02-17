"use client"


import { ChevronDown } from 'lucide-react'

import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
  
  DropdownMenuContent,
 
  DropdownMenuLabel,
 
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { useProductStore } from "../../store/store"
import { Checkbox } from '../../../components/ui/checkbox'






export function VendorFilter() {
  
    const {testVendors, selectedVendors , setFilteredVendor} = useProductStore(); // Assuming ProductStore contains vendors data
    const vendors = testVendors.filter((v) => v.userType === 'VENDOR'); //get user type vendor from user
 
  const handleVendorChange = (vendorId: number) => {
   
     
     setFilteredVendor(vendorId); 
     console.log(selectedVendors)
  };
  
  

// Utility function to get selected vendor names
const getSelectedVendorsText = () => {
    if (selectedVendors.length === 0) {
      return "Shop by Vendors";
    }
  
    
  
    // 6. Get the names of selected vendors
    const selectedNames = selectedVendors.map(vendor => vendor.firstName);
    return selectedNames.join(", ");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select vendors"
          className="w-[250px] justify-between rounded-xl bg-white text-black hover:bg-green-500 border-slate-200 hover:text-white"
        >
          <span className="truncate">{getSelectedVendorsText()}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] bg-[#F2F2F2] ">
       
        <ScrollArea className="">
          {vendors.map((vendor,index) => (
            <div className='flex items-center' key={index}>
            <Checkbox
                key={vendor.id}
              checked={selectedVendors.some((v) => v.id === vendor.id)}
              onCheckedChange={() => handleVendorChange(vendor.id)}
            />
            <DropdownMenuLabel>
              {vendor.firstName}
              </DropdownMenuLabel>
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

