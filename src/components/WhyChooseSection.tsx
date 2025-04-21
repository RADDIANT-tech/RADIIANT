
import React, { useEffect, useRef, useState } from "react";

interface CarouselItemProps {
  title: string;
  color: string;
  active: boolean;
  index: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ title, color, active, index }) => {
  return (
    <div
      className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-6 md:p-8 rounded-xl transition-all duration-700 ease-out ${
        active
          ? "opacity-100 scale-100"
          : "opacity-50 scale-95"
      }`}
      style={{ background: color }}
    >
      <h3 
        className={`text-2xl md:text-3xl font-bold ${index % 2 === 0 ? 'font-inter' : 'font-dmsans'} mb-4`}
      >
        {title}
      </h3>
      <div className="w-16 h-1 bg-white rounded-full opacity-70"></div>
    </div>
  );
};

const WhyChooseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const items = [
    {
      title: "Built for African innovation",
      color: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
    },
    {
      title: "Tech that scales as you grow",
      color: "linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)",
    },
    {
      title: "Pay only for what you need",
      color: "linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)",
    },
    {
      title: "Enterprise-grade tools, startup simplicity",
      color: "linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)",
    },
    {
      title: "Smart, not complicated",
      color: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / items.length;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  return (
    <section className="section-padding">
      <div className="container-center">
        <h2 className="section-heading text-center">Why Businesses Choose RADIIANT</h2>
        <p className="section-subheading text-center">
          Join the innovation wave that's supporting Africa's next generation of business leaders.
        </p>
        
        <div className="overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex items-center gap-4 py-8 w-full"
          >
            {items.map((item, i) => (
              <CarouselItem
                key={i}
                title={item.title}
                color={item.color}
                active={i === activeIndex}
                index={i}
              />
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-radiiant-navy w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => scrollToItem(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
