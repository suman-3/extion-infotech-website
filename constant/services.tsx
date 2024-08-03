import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";
export const services = [
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiMonitor className="size-5 text-blue-600" />
      </div>
    ),
    title: "Web Development",
    description:
      "Boost your online visibility with our professional web development services. We specialize in creating visually stunning, SEO-optimized websites that captivate audiences and enhance user engagement. Let us help you achieve higher search engine rankings and drive meaningful interactions.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiStorefront className="size-5 text-blue-600" />
      </div>
    ),
    title: "Digital Marketing",
    description:
      "Enhance your online presence with our SEO-driven digital marketing solutions. We utilize the latest trends and platforms to amplify your brand's reach, boost conversion rates, and maximize your online impact. Let us help you achieve higher search engine rankings and greater audience engagement.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiHeadsetFill className="size-5 text-blue-600" />
      </div>
    ),
    
    title: "SaaS Products",
    description:
      "Discover the power of our SEO-optimized SaaS products designed to streamline operations, enhance collaboration, and keep you ahead of the competition. Our user-friendly, scalable software-as-a-service solutions are tailored to elevate your business and boost your online visibility.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiAppStoreLogo className="size-5 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "Leverage our SEO-optimized app development services to turn your ideas into impactful applications. Whether it's iOS, Android, or cross-platform development, we create user-centric apps that deliver seamless experiences and stand out in the app market, enhancing your visibility and reach.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiMegaphone className="size-5 text-blue-600" />
      </div>
    ),
    title: "SEO Services",
    description:
      "Enhance your search engine presence and attract organic traffic with our expert SEO services. Our team utilizes proven strategies to optimize your website, improve search engine rankings, and ensure your brand is easily found by your target audience.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiLock className="size-5 text-blue-600" />
      </div>
    ),
    title: "Data Analysis",
    description:
      "Harness the power of SEO-focused data analysis to unlock valuable insights from your data. We use advanced analytics tools to interpret complex data sets, helping you make informed decisions, identify trends, and optimize your business strategies based on data-driven intelligence.",
  },
];
