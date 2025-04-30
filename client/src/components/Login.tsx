import { useLogin } from "../../src/context/LoginContext";

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
    handleLogout,
  } = useLogin();

  return (
    <>
      <div>
        <button type="button" onClick={handleLogout}>
          Déconnexion
        </button>
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
              Êtes-vous membre du Parlement européen ?
              <div className="flex gap-x-4">
                <input
                  type="radio"
                  id="Oui"
                  checked={isPemid}
                  name="Parlementaire"
                  value="Oui"
                  onChange={togglePEMID}
                />
                <label htmlFor="Oui">Oui</label>
                <input
                  type="radio"
                  id="Non"
                  checked={!isPemid}
                  name="Parlementaire"
                  value="Non"
                  onChange={togglePEMID}
                />
                <label htmlFor="Non">Non</label>
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
                  <strong>Où trouver votre PEMID ?</strong> Votre PEMID
                  (Parliamentarian European Member ID) est un identifiant unique
                  attribué aux membres du Parlement Européen. Il peut être
                  trouvé dans les documents officiels que vous recevez de
                  l'administration du Parlement Européen.
                </p>
                <p>
                  <strong>Format du PEMID :</strong> Le PEMID suit un format
                  spécifique :
                </p>
                <ul className="list-disc pl-5">
                  <li>PE : Parlement Européen</li>
                  <li>CC : Code du pays (ex : FR, DE)</li>
                  <li>XXX : 3 premières lettres du nom</li>
                  <li>NNN : Numéro unique</li>
                </ul>
                <p>
                  Exemple : <strong>PE-FR-RAH0054</strong>
                </p>
              </div>
            )}

            <div className="w-full flex justify-center p-5">
              <button
                type="button"
                className="p-3 bg-[#a84448] hover:bg-[#922f33] rounded-4xl text-white text-base font-semibold transition duration-200"
                onClick={handleLogin}
              >
                Connexion
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default Login;
