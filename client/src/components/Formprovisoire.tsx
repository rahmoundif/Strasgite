import type React from "react";
import { useState } from "react";

export default function FormProvisoire() {
  const [form, setForm] = useState({
    raison: "",
    arrivee: "",
    depart: "",
    adultes: "",
    enfants: "",
    petitDej: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, tu peux gérer la soumission
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 max-w-md mx-auto border-2 border-[#2c7865] rounded-sm"
    >
      <div>
        <label htmlFor="raison" className="block font-semibold mb-1">
          Raison de la visite *
        </label>
        <select
          id="raison"
          name="raison"
          value={form.raison}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">-- Choisir --</option>
          <option value="travail">Travail</option>
          <option value="vacances">Vacances</option>
          <option value="pleniere">Séance plénière</option>
        </select>
      </div>

      <div>
        <label htmlFor="arrivee" className="block font-semibold mb-1">
          Date d'arrivée *
        </label>
        <input
          id="arrivee"
          type="date"
          name="arrivee"
          value={form.arrivee}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="depart" className="block font-semibold mb-1">
          Date de départ *
        </label>
        <input
          id="depart"
          type="date"
          name="depart"
          value={form.depart}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="adultes" className="block font-semibold mb-1">
            Nombre d'adulte *
          </label>
          <input
            id="adultes"
            type="number"
            name="adultes"
            min="0"
            max="5"
            value={form.adultes}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="enfants" className="block font-semibold mb-1">
            Nombre d'enfant *
          </label>
          <input
            id="enfants"
            type="number"
            name="enfants"
            min="0"
            max="2"
            value={form.enfants}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div>
        <label htmlFor="petitDej" className="block font-semibold mb-1">
          Petit déjeuner *
        </label>
        <select
          id="petitDej"
          name="petitDej"
          value={form.petitDej}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">-- Choisir --</option>
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900"
      >
        Envoyer
      </button>
    </form>
  );
}
