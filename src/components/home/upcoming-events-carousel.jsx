"use client";
import React from "react";

import { Carousel } from "primereact/carousel";
import { EventCard } from "../events/event-card";

export const UpcomingEventsCarousel = ({ upcomingEvents }) => {
    
    
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1200px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        },
       
    ];
    
    const itemTemplate = (item) => {
		return <div className="p-2"><EventCard {...item} /></div>;
	};

	return (
		<Carousel
			value={upcomingEvents}
			numVisible={3}
			numScroll={1}
			responsiveOptions={responsiveOptions}
			itemTemplate={itemTemplate}
		/>
	);
};
