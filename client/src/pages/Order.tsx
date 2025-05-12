import { useTranslation } from "../context/TranslationContext";

function Order() {
  const { text_translation } = useTranslation();
  return (
    <>
      <h1 className="text-center pt-10">{text_translation("order_h1")}</h1>
      <p className="text-center text-5xl pt-10 pb-10">
        {text_translation("order_subtitle1")}
      </p>
      <p className="text-center pb-40">{text_translation("order_subtitle2")}</p>
    </>
  );
}

export default Order;
