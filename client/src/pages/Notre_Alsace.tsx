import { useTranslation } from "../context/TranslationContext";

function Notre_Alsace() {
  const { text_translation } = useTranslation();
  return (
    <>
      <h1>{text_translation("notre_alsace_h1")}</h1>
    </>
  );
}

export default Notre_Alsace;
