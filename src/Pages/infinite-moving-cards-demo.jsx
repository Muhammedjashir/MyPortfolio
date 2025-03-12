import {InfiniteMovingCards }from "../Component/ui/infinite-moving-cards.jsx";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[300px] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    
    image: "https://ashiquet0858.github.io/my-portfolio/assets/images/icon-design.svg",
    title: "Web Design",
    quote:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    image: "https://ashiquet0858.github.io/my-portfolio/assets/images/icon-dev.svg",
    title: "Web Development",
    quote:
      "High-quality development of sites at the professional level.",
  },
  {
    image: "https://ashiquet0858.github.io/my-portfolio/assets/images/icon-app.svg",
    title: "Mobile Apps",
    quote: "Professional development of applications for iOS and Android.",
  },
  {
    image: "https://ashiquet0858.github.io/my-portfolio/assets/images/icon-photo.svg",
    title: "Photography",
    quote:
      "I make high-quality photos of any category at a professional level.",
  },
  
];

