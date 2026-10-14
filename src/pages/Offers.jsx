import React, { useState } from 'react';
import { ChevronLeft, Package, Tag, Percent } from 'lucide-react';

const Offers = () => {
  const [activeFilter, setActiveFilter] = useState('flash');

  // Mock Offers Data adapting the layout from the skeleton
  const offersData = [
    { 
      id: 1, 
      title: 'Parle-G Biscuit - 50g (Box of 100)', 
      statusText: 'Flash Deal! Only 3 hrs left', 
      isUrgent: true, 
      sku: 'MOQ: 5 Boxes', 
      buttonText: 'Buy Deal',
      icon: <Package className="w-8 h-8 text-amber-500" />
    },
    { 
      id: 2, 
      title: 'Aashirvaad Atta - 5kg (Pack of 10)', 
      statusText: 'Stock Clearance! 20% Off', 
      isUrgent: true, 
      sku: 'MOQ: 2 Packs', 
      buttonText: 'Buy Deal',
      icon: <Percent className="w-8 h-8 text-orange-500" />
    },
    { 
      id: 3, 
      title: 'Tata Salt - 1kg (Box of 50)', 
      statusText: 'Limited Offer! Flat ₹150 Off', 
      isUrgent: true, 
      sku: 'MOQ: 1 Box', 
      buttonText: 'Buy Deal',
      icon: <Tag className="w-8 h-8 text-blue-500" />
    },
    { 
      id: 4, 
      title: 'Amul Butter - 500g (Pack of 20)', 
      statusText: 'Active Offer: Buy 10 Get 1 Free', 
      isUrgent: false, 
      sku: 'Valid till 30 Aug', 
      buttonText: 'Add to order',
      icon: <Package className="w-8 h-8 text-yellow-500" />
    },
    { 
      id: 5, 
      title: 'Britannia Biscuits Combo', 
      statusText: 'Active Offer: 15% Margin', 
      isUrgent: false, 
      sku: 'Valid till 15 Aug', 
      buttonText: 'Add to order',
      icon: <Percent className="w-8 h-8 text-red-500" />
    },
    { 
      id: 6, 
      title: 'Maggi 2-Min Noodles (Box of 144)', 
      statusText: 'Active Offer: 12% Off on Bulk', 
      isUrgent: false, 
      sku: 'Valid till 30 Aug', 
      buttonText: 'Add to order',
      icon: <Package className="w-8 h-8 text-yellow-600" />
    },
    { 
      id: 7, 
      title: 'Saffola Gold Oil - 5L Can', 
      statusText: 'Active Offer: Distributor Pricing', 
      isUrgent: false, 
      sku: 'Valid till 10 Aug', 
      buttonText: 'Add to order',
      icon: <Tag className="w-8 h-8 text-amber-600" />
    },
    { 
      id: 8, 
      title: 'Frooti Mango Drink - 200ml (24 Pcs)', 
      statusText: 'Active Offer: Summer Special', 
      isUrgent: false, 
      sku: 'Valid till 05 Aug', 
      buttonText: 'Add to order',
      icon: <Package className="w-8 h-8 text-green-500" />
    }
  ];

  const handleBuyClick = (e, offerId) => {
    e.preventDefault();
    // Non-functional for now, reserved for future cart/checkout logic
    console.log(`Action triggered for offer ID: ${offerId}`);
  };

  return (
    <div className="w-full pb-10 bg-slate-50 min-h-screen -m-6 p-6">
      
      {/* Top Navigation & Filters */}
      <div className="mb-8">
        <button className="flex items-center text-slate-800 font-bold text-lg mb-6 hover:text-black transition-colors">
          <ChevronLeft className="w-6 h-6 mr-1" /> Back
        </button>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveFilter('flash')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
              activeFilter === 'flash' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-red-50 text-red-600 hover:bg-red-100'
            }`}
          >
            Flash Deals
          </button>
          <button 
            onClick={() => setActiveFilter('active')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
              activeFilter === 'active' 
                ? 'bg-green-200 text-green-900' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            Active Offers
          </button>
          <button 
            onClick={() => setActiveFilter('category')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
              activeFilter === 'category' 
                ? 'bg-slate-400 text-white' 
                : 'bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-white'
            }`}
          >
            By Category
          </button>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {offersData.map((offer) => (
          <div 
            key={offer.id} 
            className={`bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm border transition-all ${
              offer.id === 2 ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-200 hover:shadow-md'
            }`}
          >
            <div className="flex gap-4 mb-5">
              {/* Image Placeholder */}
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                {offer.icon}
              </div>
              
              {/* Offer Details */}
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-slate-800 text-sm mb-1 leading-snug">
                  {offer.title}
                </h3>
                <p className={`text-sm font-bold mb-1 ${offer.isUrgent ? 'text-red-500' : 'text-green-500'}`}>
                  {offer.statusText}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {offer.sku}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button 
              onClick={(e) => handleBuyClick(e, offer.id)}
              className={`w-full py-2.5 rounded-lg font-bold text-sm transition-colors ${
                offer.isUrgent 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm' 
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-700'
              }`}
            >
              {offer.buttonText}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Offers;