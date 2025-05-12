import { useTranslation } from "../context/TranslationContext";

function Legal() {
  const { text_translation } = useTranslation();

  return (
    <section id="top" className="max-w-screen-lg mx-auto p-10">
      <h1 className="text-2xl font-bold mb-5 text-[#2c7865]">
        {text_translation("legal_h1")}
      </h1>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_1_title")}
        </h2>
        <p>
          <strong>{text_translation("label_gite_name")} :</strong>{" "}
          {text_translation("legal_1_gite_name")}
        </p>
        <p>
          <strong>{text_translation("label_publication")} :</strong>{" "}
          {text_translation("legal_1_publication")}
        </p>
        <p>
          <strong>{text_translation("label_address")} :</strong>{" "}
          {text_translation("legal_1_address")}
        </p>
        <p>
          <strong>{text_translation("label_phone")} :</strong>{" "}
          {text_translation("legal_1_phone")}
        </p>
        <p>
          <strong>{text_translation("label_email")} :</strong>{" "}
          <a
            href={`mailto:${text_translation("legal_1_email")}`}
            className="text-blue-900"
          >
            {text_translation("legal_1_email")}
          </a>
        </p>
        <p>
          <strong>{text_translation("label_siret")} :</strong>{" "}
          {text_translation("legal_1_siret")}
        </p>
        <p>
          <strong>{text_translation("label_forme")} :</strong>{" "}
          {text_translation("legal_1_forme")}
        </p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_2_title")}
        </h2>
        <p>
          <strong>{text_translation("label_host")} :</strong>{" "}
          {text_translation("legal_2_host")}
        </p>
        <p>
          <strong>{text_translation("label_address")} :</strong>{" "}
          {text_translation("legal_2_address")}
        </p>
        <p>
          <strong>{text_translation("label_site_web")} :</strong>{" "}
          <a
            href={text_translation("legal_2_website")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900"
          >
            {text_translation("legal_2_website")}
          </a>
        </p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_3_title")}
        </h2>
        <p>{text_translation("legal_3_paragraph1")}</p>
        <p>{text_translation("legal_3_paragraph2")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_4_title")}
        </h2>
        <p>{text_translation("legal_4_paragraph1")}</p>
        <p>{text_translation("legal_4_paragraph2")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_5_title")}
        </h2>
        <p>{text_translation("legal_5_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_6_title")}
        </h2>
        <p>{text_translation("legal_6_paragraph1")}</p>
        <p>{text_translation("legal_6_paragraph2")}</p>
        <p>
          {text_translation("legal_6_paragraph3_intro")}{" "}
          <a
            href={`mailto:${text_translation("legal_6_email")}`}
            className="text-blue-900"
          >
            {text_translation("legal_6_email")}
          </a>
        </p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_7_title")}
        </h2>
        <p>{text_translation("legal_7_paragraph1")}</p>
        <p>{text_translation("legal_7_paragraph2")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("legal_8_title")}
        </h2>
        <p>{text_translation("legal_8_paragraph1")}</p>
        <p>{text_translation("legal_8_paragraph2")}</p>
      </div>

      <div className="mb-10 flex justify-center mt-10">
        <a href="#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2c7865"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:scale-110 transition-transform duration-300"
          >
            <title>{text_translation("legal_back_to_top")}</title>
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Legal;
