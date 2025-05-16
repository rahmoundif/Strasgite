import { Link } from "react-router";

import CartesServices from "../components/CartesServices";
import LMap from "../components/LMap";
import SwiperCarousel from "../components/SwiperCarousel";
import { useTranslation } from "../context/TranslationContext";

function Services() {
  const { text_translation } = useTranslation();

  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      style={{
        color: "var(--color-accent)",
      }}
    >
      <h1 className="text-2xl sm:mt-12 mb-8 sm:text-3xl lg:text-4xl font-semibold text-center ">
        <span className="text-[#2c7865]">
          {text_translation("services_h1")}
        </span>
      </h1>

      <p className="text-lg text-gray-700 mb-12 text-justify">
        {text_translation("services_intro")}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2c7865] mb-4">
          {text_translation("services_section1_h2")}
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          {text_translation("services_section1_p")}
        </p>
        <SwiperCarousel images={["/devanture.png", "/petitdej.png"]} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2c7865] mb-4">
          {text_translation("services_section2_h2")}
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          {text_translation("services_section2_p")}
        </p>
        <LMap />
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-[#2c7865] mb-4">
          {text_translation("services_section3_h2")}
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          {text_translation("services_section3_p")}
        </p>
      </section>

      <CartesServices />

      <div className="text-center">
        <Link
          to="/reservation"
          className="py-5 px-5 bg-[#a84448] hover:bg-[#922f33] rounded-lg text-white text-base font-semibold transition duration-200"
        >
          {text_translation("services_button")}
        </Link>
      </div>
    </div>
  );
}

export default Services;
