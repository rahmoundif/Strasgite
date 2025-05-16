import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../src/context/LoginContext";
import { useTranslation } from "../context/TranslationContext";

function Login() {
  const {
    isConnected,
    isPemid,
    togglePEMID,
    info,
    handleOnInfo,
    mail,
    setMail,
    code,
    setCode,
    pemid,
    setPemid,
    message,
    handleLogin,
    userRole,
  } = useLogin();

  const { text_translation } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      isConnected === true &&
      (userRole === "User" || userRole === "Europe")
    ) {
      navigate("/EspaceVisiteur");
    }
  }, [isConnected, userRole, navigate]);

  return (
    <>
      <div className="p-5">
        {message && (
          <div className="text-center text-green-600 font-semibold my-4">
            {message}
          </div>
        )}
      </div>
      {!isConnected && (
        <section className="flex justify-center">
          <form className="w-[80%] bg-[#2c7865] p-6 gap-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="e-mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="p-3 bg-white border border-[#d9bf77] text-gray-800 text-base rounded-lg focus:ring-[#d9bf77] focus:border-[#d9bf77] block w-full mb-5"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="p-3 bg-white border border-[#d9bf77] text-gray-800 text-base rounded-lg focus:ring-[#d9bf77] focus:border-[#d9bf77] block w-full mb-5"
            />
            <label className="flex flex-col items-center text-center mb-2 text-lg font-semibold text-[#f4ebd0]">
              {text_translation("login_label_pem")}
              <div className="flex gap-x-4">
                <input
                  type="radio"
                  id="Oui"
                  checked={isPemid}
                  name="Parlementaire"
                  value="Oui"
                  onChange={togglePEMID}
                />
                <label htmlFor="Oui">
                  {text_translation("login_option_oui")}
                </label>
                <input
                  type="radio"
                  id="Non"
                  checked={!isPemid}
                  name="Parlementaire"
                  value="Non"
                  onChange={togglePEMID}
                />
                <label htmlFor="Non">
                  {text_translation("login_option_non")}
                </label>
              </div>
            </label>

            {isPemid && (
              <div className="flex items-center gap-2 mb-5">
                <input
                  type="text"
                  placeholder="PEMID"
                  value={pemid}
                  onChange={(e) => setPemid(e.target.value)}
                  className="p-3 bg-white border border-[#d9bf77] text-gray-800 text-base rounded-lg focus:ring-[#d9bf77] focus:border-[#d9bf77] flex-1"
                  title={`PE-CC-XXXNNN

PE : Parlement Européen 
CC : Country
XXX: 3st letter of Name
NNN: Number

Example : PE-FR-RAH0054`}
                />
                <button
                  type="button"
                  onClick={handleOnInfo}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleOnInfo();
                    }
                  }}
                  tabIndex={0}
                  className="flex-shrink-0"
                >
                  <img src="/infobulle.svg" alt="help" className="h-5" />
                </button>
              </div>
            )}

            {info && (
              <div className="bg-blue-50 text-blue-700 border border-blue-200 rounded-lg shadow-md p-4 mt-4">
                <p>
                  <strong>{text_translation("login_info_title")}</strong>{" "}
                  {text_translation("login_info_txt1")}
                </p>
                <p>
                  <strong>{text_translation("login_info_txt2")}</strong>
                </p>
                <ul className="list-disc pl-5">
                  <li>{text_translation("login_info_list1")}</li>
                  <li>{text_translation("login_info_list2")}</li>
                  <li>{text_translation("login_info_list3")}</li>
                  <li>{text_translation("login_info_list4")}</li>
                </ul>
                <p>{text_translation("login_info_example")}</p>
              </div>
            )}

            <div className="w-full flex justify-center p-5">
              <button
                type="button"
                className="p-3 bg-[#a84448] hover:bg-[#922f33] rounded-4xl text-white text-base font-semibold transition duration-200"
                onClick={handleLogin}
              >
                {text_translation("login_btn_login")}
              </button>
            </div>
            <p className="text-center text-white underline">
              {text_translation("creation_account")}
            </p>
          </form>
        </section>
      )}
    </>
  );
}

export default Login;
