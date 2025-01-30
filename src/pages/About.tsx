import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            DeepYield is a cutting-edge platform that leverages advanced AI algorithms to optimize yield farming strategies across multiple blockchain networks. Our mission is to empower users with the tools and insights needed to maximize their returns in the decentralized finance space.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Our team consists of experienced professionals from the fields of finance, technology, and blockchain, dedicated to providing a seamless and user-friendly experience. We believe in the power of community and strive to create a platform that is transparent, secure, and accessible to everyone.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Join us on this exciting journey as we redefine the future of yield optimization in DeFi. Together, we can unlock new opportunities and achieve financial success.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
