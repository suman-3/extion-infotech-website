import { ServicesCards } from "@/components/services-card";




export default function ServiceSection() {

  return (
    <section className="" id="services"  >
      <div className="flex flex-col space-y-5 items-center justify-center mt-5 md:mt-0 md:mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Streamline your business with our
          <span className="md:ml-2 bg-white text-background inline-block px-3 py-1 md:py-2 rounded-md">
            Services
          </span>
        </h1>

        <p className="text-md font-semibold md:text-xl text-left md:text-center w-full md:w-[60%]">
        At Extion Infotech, our dedication to excellence shines through our meticulously crafted IT solutions. From innovative software development to comprehensive cybersecurity measures, we deliver robust and reliable services. 
In addition to our exceptional IT offerings, Extion Infotech is a nurturing ground for aspiring professionals. Discover our dynamic internship opportunities, designed to ignite your passion for technology and provide valuable hands-on experience.
        </p>
      </div>

      <ServicesCards />
    </section>
  );
}
