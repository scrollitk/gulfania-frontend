'use client';
import ExploreListings from '@/components/explore/explore-listings';
import FilterTopbar from '@/components/explore/filter-topbar';
import Filter from '@/components/explore/filter';
import { useEffect, useState } from 'react';

export default function ExplorePage() {
  const [travelList, setTravelList] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:3005/v1/travelbooking/get/tour-list/submitted/all/for/65538448b78add9eaa02d417',
      {
        headers: {
          'x-api-key': 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj',
        },
      }
    )
      .then((response) => response.json())
      .then((bookings) => {
        if (bookings?.data?.travelDestionationList) {
          setTravelList(bookings?.data?.travelDestionationList);
        }
      })
      .catch((error) => {
        console.log('error ', error);
      });
  }, []);

  return (
    <div className="container-fluid mb-12 pt-6 lg:mb-16">
      <FilterTopbar travelList={travelList} />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[330px_5fr] 3xl:gap-12">
        <Filter travelList={travelList} className="hidden xl:block" />
        <ExploreListings travelList={travelList} />
      </div>
    </div>
  );
}
