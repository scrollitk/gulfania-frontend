'use client';
import DestinationBlock from '@/components/home/destination-block/destination-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import InstructionBlock from '@/components/home/instruction-block';
import PromotionalBlock from '@/components/home/promotional-block';
import TestimonialBlock from '@/components/home/testimonial-block';
import HeroBanner from '@/components/home/hero-banner';
import NewBoats from '@/components/home/new-boats';
import TopBoats from '@/components/home/top-boats';
import PopularCategories from '@/components/home/destination-block/popular-categories';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      'http://localhost:3005/v1/categories/get/travelcollections/for/65538448b78add9eaa02d417',
      {
        headers: {
          'x-api-key': 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj',
        },
      }
    )
      .then((response) => response.json())
      .then((categoryData: any) => {
        if (categoryData?.data?.travelCollectionsList) {
          setCategories(categoryData?.data?.travelCollectionsList);
        }
      })
      .catch((error) => {
        console.log('error ', error);
      });
  }, []);

  return (
    <>
      <HeroBanner />
      <PopularCategories />
      {/* <DestinationBlock /> */}
      {categories?.map((category: any) => {
        return <TopBoats key={category._id} category={category} />;
      })}

      <PromotionalBlock />
      {/* <NewBoats /> */}
      <InstructionBlock />
      <TestimonialBlock />
      <SubscriptionBlock sectionClassName="4xl:!px-16" />
    </>
  );
}
