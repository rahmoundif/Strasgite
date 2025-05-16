import { useTranslation } from "../context/TranslationContext";

interface Service {
  title: string;
  description: string;
}

function CartesServices() {
  const { text_translation } = useTranslation();

  const services: Service[] = [
    {
      title: "service_access_parking_title",
      description: "service_access_parking_description",
    },
    {
      title: "service_breakfast_title",
      description: "service_breakfast_description",
    },
    {
      title: "service_baby_equipment_title",
      description: "service_baby_equipment_description",
    },
    {
      title: "service_garden_title",
      description: "service_garden_description",
    },
    {
      title: "service_catering_title",
      description: "service_catering_description",
    },
    { title: "service_wifi_title", description: "service_wifi_description" },
    {
      title: "service_bike_storage_title",
      description: "service_bike_storage_description",
    },
    { title: "service_check_title", description: "service_check_description" },
    {
      title: "service_welcome_products_title",
      description: "service_welcome_products_description",
    },
    { title: "service_eco_title", description: "service_eco_description" },
    {
      title: "service_cleaning_title",
      description: "service_cleaning_description",
    },
    {
      title: "service_concierge_title",
      description: "service_concierge_description",
    },
  ];

  return (
    <section className="py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2c7865] mb-10">
          {text_translation("cartes_services_h2")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md border border-[#E2B846] p-4 sm:p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#2c7865] mb-2">
                {text_translation(title)}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {text_translation(description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartesServices;
