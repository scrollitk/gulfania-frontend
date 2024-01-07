'use client';

import { dubaiExperiences, topBoats } from 'public/data/top-boats';
import { useTimeout } from '@/hooks/use-timeout';
import ListingCardLoader from '@/components/ui/loader/listing-card-loader';
import ListingCard from '@/components/ui/cards/listing';
import SeeMore from '@/components/ui/see-more';
import Section from '@/components/ui/section';
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Autoplay,
} from '@/components/ui/slider';

function BoatGrid({ title, travelTickets }: any) {
  return (
    <div className="testimonial relative">
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={true}
        slidesPerView={4}
        spaceBetween={12}
        navigation={{
          nextEl: '.testimonial-button-next',
          prevEl: '.testimonial-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.6,
          },
          580: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {travelTickets?.map((item: any, index: any) => (
          <SwiperSlide key={`testimonial-${index}`}>
            <ListingCard
              key={`top-boat-grid-${index}`}
              id={`top-boat-grid-${index}`}
              slides={item.imageUploads}
              time={''}
              caption={title}
              title={item.name}
              slug={item._id}
              location={item.location}
              price={`AED ${
                item.listingPricesInAllCurrencies?.find(
                  (price: any) => price.currencyCode === 'AED'
                ).originalPrice
              }`}
              ratingCount={'4'}
              rating={4}
              discountPrice={`AED ${
                item.listingPricesInAllCurrencies?.find(
                  (price: any) => price.currencyCode === 'AED'
                ).finalPrice
              }`}
              tag={item.tag}
              // user={item.user}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {topBoats.slice(0, 8).map((item, index) => (
        <ListingCard
          key={`top-boat-grid-${index}`}
          id={`top-boat-grid-${index}`}
          slides={item.thumbnail}
          time={item.time}
          caption={item.caption}
          title={item.title}
          slug={item.slug}
          location={item.location}
          price={item.price}
          ratingCount={item.ratingCount}
          rating={item.rating}
          user={item.user}
        />
      ))} */}
    </div>
  );
}

export default function TopBoats({ category }: any) {
  const { state } = useTimeout();

  return (
    <Section
      className="group/section container-fluid mt-12 overflow-hidden lg:mt-16"
      title={category?.name}
      description="Unsatiable it considered invitation he traveling insensible."
      headerClassName="items-end mb-4 md:mb-5 xl:mb-6 gap-5"
      rightElement={<SeeMore />}
    >
      {!state && <ListingCardLoader />}
      {state && (
        <BoatGrid
          title={category?.name}
          travelTickets={category?.travelTickets}
        />
      )}
    </Section>
  );
}
