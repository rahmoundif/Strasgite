import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "../context/TranslationContext";

interface FormData {
  name: string;
  prenom: string;
  email: string;
  message: string;
}

function Contact() {
  const { text_translation } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs
      .send(
        "service_titn84h",
        "template_7bk3svj",
        formData as unknown as Record<string, unknown>,
        "IIFqChO4rwLKNF-QV",
      )
      .then(
        (result) => {
          console.log(text_translation("console_success"), result.text);
          alert(text_translation("alert_success"));
          setFormData({ name: "", prenom: "", email: "", message: "" });
        },
        (error) => {
          console.log(text_translation("console_error"), error.text);
          alert(text_translation("alert_error"));
        },
      );
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mt-16">
        {text_translation("contact_h1")}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-white shadow-lg rounded-lg border-2 border-[#E2B846]"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            {text_translation("label_name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label={text_translation("aria_name")}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="prenom"
            className="block text-lg font-medium text-gray-700"
          >
            {text_translation("label_prenom")}
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            aria-label={text_translation("aria_prenom")}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            {text_translation("label_email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label={text_translation("aria_email")}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            {text_translation("label_message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label={text_translation("aria_message")}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-[#a84448] hover:bg-[#922f33]  text-white text-base font-semibold transition duration-200 rounded-lg"
            aria-label={text_translation("button_send")}
          >
            {text_translation("button_send")}
          </button>
        </div>
      </form>

      <div className="w-full max-w-lg mx-auto mt-10 p-6 sm:p-8 bg-white shadow-md rounded-lg text-center border border-gray-300">
        <h2 className="text-xl font-semibold mb-4">
          La Maison Strasbourgeoise
        </h2>
        <p className="text-base mb-2">{text_translation("legal_1_address")}</p>
        <p className="text-base mb-2">
          {text_translation("label_phone")}: {text_translation("legal_1_phone")}
        </p>
        <p className="text-base">✉️ {text_translation("legal_1_email")}</p>
      </div>
    </div>

    // "legal_1_address": "8-9 quai Mullenheim 67000 STRASBOURG",
    //"label_phone": "Téléphone",
    //"legal_1_phone": "03.82.88.67.68",
    //"legal_1_email": "contact@maisonstrasbourg.fr",
  );
}

export default Contact;
