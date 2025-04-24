import { useState } from "react";

interface FormData {
  name: string;
  prenom: string;
  email: string;
  message: string;
}

function Contact() {
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
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-12 ">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
        Contactez-nous
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-white shadow-lg rounded-lg border-2 border-[#E2B846]"
      >
        <div className="mb-4 ">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Votre nom"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4 ">
          <label
            htmlFor="prenom"
            className="block text-lg font-medium text-gray-700"
          >
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            aria-label="Votre prénom"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Votre email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Votre message"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg "
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-[#2c7865] text-[#E2B846] rounded-lg "
            aria-label="Envoyer le message"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
