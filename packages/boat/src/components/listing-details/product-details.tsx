'use client';

import { vendorData } from 'public/data/listing-details';
import { reviewsData } from 'public/data/reviews';
import SpecificationBlock from '@/components/listing-details/specification-block';
import BookingForm from '@/components/listing-details/booking-form/booking-form';
import CalenderBlock from '@/components/listing-details/calendar/calender-block';
import ListingDetailsHeroBlock from '@/components/listing-details/hero-block';
import DescriptionBlock from '@/components/listing-details/descripton-block';
import EquipmentBlock from '@/components/listing-details/equipment-block';
import LocationBlock from '@/components/listing-details/location-block';
import ReviewBlock from '@/components/listing-details/review-block';
import VendorBlock from '@/components/listing-details/vendor-block';
import ChatBlock from '@/components/listing-details/chat-block';
import { useModal } from '@/components/modals/context';
import Button from '@/components/ui/button';
import { SetStateAction, useState } from 'react';

export default function ProductDetails() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (item: any) => {
      if (openItem === item) {
        setOpenItem(null);
      } else {
        setOpenItem(item);
      }
    };
  return (
    <>
     
     <div id="accordion-open" data-accordion="open">
      {/* First Accordion Item */}
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className="accordion-button"
          onClick={() => toggleItem(1)}
          aria-expanded={openItem === 1}
          aria-controls="accordion-open-body-1"
        >
          {/* Content Here */}
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        className={openItem === 1 ? "accordion-content" : "hidden"}
        aria-labelledby="accordion-open-heading-1"
      >
        {/* Content Here */}
      </div>

      {/* Second Accordion Item */}
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          className="accordion-button"
          onClick={() => toggleItem(2)}
          aria-expanded={openItem === 2}
          aria-controls="accordion-open-body-2"
        >
          {/* Content Here */}
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        className={openItem === 2 ? "accordion-content" : "hidden"}
        aria-labelledby="accordion-open-heading-2"
      >
        {/* Content Here */}
      </div>

      {/* Third Accordion Item */}
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          className="accordion-button"
          onClick={() => toggleItem(3)}
          aria-expanded={openItem === 3}
          aria-controls="accordion-open-body-3"
        >
          {/* Content Here */}
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        className={openItem === 3 ? "accordion-content" : "hidden"}
        aria-labelledby="accordion-open-heading-3"
      >
        {/* Content Here */}
      </div>
    </div>

    </>
  );
}
