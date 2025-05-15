import { useEffect } from "react";
import { useTranslation } from "../context/TranslationContext";

function Cgv() {
  const { text_translation } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="top" className="max-w-screen-lg mx-auto p-10">
      <h1 className="text-2xl font-bold mb-5 text-[#2c7865]">
        {text_translation("cgv_h1")}
      </h1>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_1_title")}
        </h2>
        <p>{text_translation("cgv_1_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_2_title")}
        </h2>
        <p>{text_translation("cgv_2_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_3_title")}
        </h2>
        <p>{text_translation("cgv_3_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_4_title")}
        </h2>
        <p>
          <strong>{text_translation("client_label")} :</strong>{" "}
          {text_translation("cgv_4_client")}
        </p>
        <p className="mt-2">
          <strong>{text_translation("gite_label")} :</strong>{" "}
          {text_translation("cgv_4_gite")}
        </p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_5_title")}
        </h2>
        <p>{text_translation("cgv_5_paragraph1")}</p>
        <p className="mt-2">{text_translation("cgv_5_paragraph2")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_6_title")}
        </h2>
        <p>{text_translation("cgv_6_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_7_title")}
        </h2>
        <p>{text_translation("cgv_7_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_8_title")}
        </h2>
        <p>{text_translation("cgv_8_intro")}</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>{text_translation("cgv_8_item1")}</li>
          <li>{text_translation("cgv_8_item2")}</li>
          <li>{text_translation("cgv_8_item3")}</li>
          <li>{text_translation("cgv_8_item4")}</li>
          <li>{text_translation("cgv_8_item5")}</li>
          <li>{text_translation("cgv_8_item6")}</li>
          <li>{text_translation("cgv_8_item7")}</li>
          <li>{text_translation("cgv_8_item8")}</li>
          <li>{text_translation("cgv_8_item9")}</li>
          <li>{text_translation("cgv_8_item10")}</li>
          <li>{text_translation("cgv_8_item11")}</li>
          <li>{text_translation("cgv_8_item12")}</li>
          <li>{text_translation("cgv_8_item13")}</li>
          <li>{text_translation("cgv_8_item14")}</li>
        </ul>
        <p className="mt-2">
          <strong>{text_translation("cgv_8_responsibility")}</strong>
        </p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_9_title")}
        </h2>
        <p>{text_translation("cgv_9_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_10_title")}
        </h2>
        <p>{text_translation("cgv_10_paragraph")}</p>
      </div>

      <div className="mb-8 shadow-xl border-1 border-[#D9BF77] p-5 rounded-xl">
        <h2 className="text-xl text-[#2c7865] font-semibold mb-3 underline">
          {text_translation("cgv_11_title")}
        </h2>
        <p>{text_translation("cgv_11_paragraph")}</p>
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
            className="hover:scale-125 transition-transform duration-300"
          >
            <title>{text_translation("cgv_back_to_top")}</title>
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Cgv;
