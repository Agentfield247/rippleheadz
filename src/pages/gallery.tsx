import disclaimerImage from "@/assets/disclaimer.png";
import galleryImage from "@/assets/gallery.png";
import roadmapImage from "@/assets/roadmap.png";

const Gallery = () => {
  const images = [
    { src: disclaimerImage, alt: "Disclaimer" },
    { src: galleryImage, alt: "Gallery" },
    { src: roadmapImage, alt: "Roadmap" },
  ];

  return (
    <section className="py-8 sm:py-20 px-4 bg-gradient-to-br from-ripple-sky/50 to-ripple-lightblue/30">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 sm:mb-12 lg:mb-16 text-center">
          Gallery
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;