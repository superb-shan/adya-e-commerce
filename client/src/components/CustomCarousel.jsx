import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Slider from "react-slick";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Button } from "./ui/button";

export function CustomCarousel({ items }) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            
        >
            <CarouselContent>
                {items.map((item, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                alt="Featured Product"
                                className="w-full h-48 object-cover"
                                height={300}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-6">
                            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold">${item.price}</span>
                                <Button size="sm">Add to Cart</Button>
                            </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export function CustomCarouselMultiple({items}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    };
    return (
        <div className="slider-container py-5 pb-7">
        <Slider {...settings}>
            {items.map((item, index) => (
                <div className="px-1">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4">
                        <img
                            alt="Featured Product"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-6">
                        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold">${item.price}</span>
                            <Button size="sm">Add to Cart</Button>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    );
}

export default CustomCarousel;
