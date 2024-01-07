"use client"
import { vendorData } from 'public/data/listing-details';
import RelatedListingBlock from '@/components/listing-details/related-listings/related-listings-block';
import ListingDetails from '@/components/listing-details/listing-details-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import GallaryBlock from '@/components/listing-details/gallary-block';
import { useEffect, useState } from 'react';

interface TourData {
  imageUploads?: {
    url: string;
    mediaType?: string;
    altText?: string;
    _id: string;
  }[];
  // other fields...
}


export default function ListingDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const [tourData, setTourData] = useState<TourData>({});

  useEffect(() => {
    fetch(`http://localhost:3005/v1/travelbooking/from/tour-details/public/${slug}/for/65538448b78add9eaa02d417`, {
      headers: {
        'x-api-key': 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'
      }
    }).then(response => response.json())
    .then(tourData => {
      if(tourData && tourData.data.travelBooking) {
        setTourData(tourData.data.travelBooking);
        localStorage.setItem('tourData', JSON.stringify(tourData.data.travelBooking));
      }
    }).catch(error => {
      console.log('error ', error);
    })

    return () => {
      localStorage.removeItem('tourData');
    }
  }, [])

  return (
    <>
      <div className="container-fluid w-full 3xl:!px-12">
        <GallaryBlock images={tourData?.imageUploads ?? []} />
        <ListingDetails tourData={tourData} />
        <RelatedListingBlock />
      </div>
      <SubscriptionBlock sectionClassName="3xl:!px-12 4xl:!px-12" />
    </>
  );
}
