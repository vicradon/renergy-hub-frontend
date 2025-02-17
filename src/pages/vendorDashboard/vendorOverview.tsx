import Header from "../vendorcomponents/Header";
import revenue from "./assets/revenue.png";
import graph1 from "./assets/graph1.png";
import graph2 from "./assets/graph2.png";
import emergency from "./assets/emergency.png";
import customer from "./assets/customer.png";
import { CarTaxiFront } from "lucide-react";
import Sales from "../vendorcomponents/salesStatus/Sales";
import Orders from "../vendorcomponents/salesStatus/Orders";
import TopSelling from "../vendorcomponents/TopSelling";
import CurrentOffer from "../vendorcomponents/CurrentOffer";

// import { useProductStore } from "../../products-listing/store/store";

export const VendorOverview = () => {

  // const { userId } = useProductStore()

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Overview' />
      <div className="bg-gray-200 p-4 flex flex-col sm:flex-row flex-wrap h-auto justify-between"> 
        <div className="w-full sm:w-1/5 h-auto bg-white mb-4 sm:mb-0"> 
          {/* Revenue Card */}
          <div className="w-full p-2">
            <div className="flex justify-between">
              <div className="w-auto">
                <h1 className="text-xl">Total Revenue</h1>
                <h5 className="text-sm text-gray-500">Last 30 Days</h5>
              </div>
              <img src={revenue} alt="" className="h-8" />
            </div>
            <div className="flex justify-between mt-4">
              <h5>+10%</h5>
              <img src={graph1} alt="" />
              <h5>800,000</h5>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/4 h-auto bg-white mb-4 sm:mb-0">
          {/* Orders Card */}
          <div className="w-full p-2">
            <div className="flex justify-between">
              <div className="w-2/3">
                <h1 className="text-xl">Total Orders</h1>
                <h5 className="text-sm text-gray-500">Last 30 Days</h5>
              </div>
              <img src={emergency} alt="" className="h-8" />
            </div>
            <div className="flex justify-between mt-4">
              <h5>+10%</h5>
              <img src={graph2} alt="" />
              <h5>2000</h5>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/4 h-auto bg-white mb-4 sm:mb-0">
          {/* Customers Card */}
          <div className="w-full p-2">
            <div className="flex justify-between">
              <div className="w-2/3">
                <h1 className="text-xl">Total Customers</h1>
                <h5 className="text-sm text-gray-500">Last 30 Days</h5>
              </div>
              <img src={customer} alt="" className="h-8" />
            </div>
            <div className="flex justify-between mt-4">
              <h5>+10%</h5>
              <img src={graph1} alt="" />
              <h5>800</h5>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/4 h-auto bg-white mb-4 sm:mb-0">
          {/* Deliveries Card */}
          <div className="w-full p-2">
            <div className="flex justify-between">
              <div className="w-2/3">
                <h1 className="text-xl">Total Deliveries</h1>
                <h5 className="text-sm text-gray-500">Last 30 Days</h5>
              </div>
              <CarTaxiFront className="text-[#DF7400] h-8 bg-[#F9D262] p-1 w-8" />
            </div>
            <div className="flex justify-between mt-4">
              <h5>+10%</h5>
              <img src={graph2} alt="" />
              <h5>#8</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-4 flex flex-col sm:flex-row justify-between">
        <Sales />
        <Orders />
      </div>

      <div className="bg-gray-200 p-4 flex flex-col sm:flex-row justify-between">
        <TopSelling />
        <CurrentOffer />
      </div>
    </div>
  );
};