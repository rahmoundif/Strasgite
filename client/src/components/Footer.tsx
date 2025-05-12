import { Link } from "react-router";
import { useTranslation } from "../context/TranslationContext";

function Footer() {
  const { text_translation } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#2c7865]/80 text-sm md:text-lg py-4 px-2">
      <div className="flex flex-col-reverse text-center gap-5 ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <p className="underline">
            <Link to="/Legal">{text_translation("footer_link_legal")}</Link>
          </p>
          <p className="underline">
            <Link to="/Cgv">{text_translation("footer_link_cgv")}</Link>
          </p>
          <p>
            {text_translation("footer_copyright").replace(
              "{year}",
              String(currentYear),
            )}
          </p>
        </div>
        <div className="flex justify-center gap-10 text-white">
          {/* Téléphone avec icône */}
          <p className="flex items-center gap-2 hover:underline">
            <Link to="/contact" className="flex items-center hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <title>icon contactez nous</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.923l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5A2.25 2.25 0 013 6.993V6.75"
                />
              </svg>
              {text_translation("footer_contact")}
            </Link>
          </p>

          {/* Réseaux sociaux */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white font-semibold">
              {text_translation("footer_follow_us")}
            </p>
            <div className="flex justify-center items-center gap-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-white hover:fill-blue-500 transition"
                  viewBox="0 0 24 24"
                >
                  <title>Logo Facebook</title>
                  <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.59l-.467 3.622h-3.123V24h6.116C23.408 24 24 23.408 24 22.676V1.325C24 .592 23.408 0 22.675 0z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-white hover:fill-pink-500 transition"
                  viewBox="0 0 24 24"
                >
                  <title>Logo Instagram</title>
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.405a4.92 4.92 0 0 1 1.77 1.15 4.92 4.92 0 0 1 1.15 1.77c.165.46.35 1.26.405 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.405 2.43a4.92 4.92 0 0 1-1.15 1.77 4.92 4.92 0 0 1-1.77 1.15c-.46.165-1.26.35-2.43.405-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.405a4.92 4.92 0 0 1-1.77-1.15 4.92 4.92 0 0 1-1.15-1.77c-.165-.46-.35-1.26-.405-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.405-2.43a4.92 4.92 0 0 1 1.15-1.77 4.92 4.92 0 0 1 1.77-1.15c.46-.165 1.26-.35 2.43-.405C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.737 0 8.332.013 7.053.072 5.77.132 4.728.34 3.84.698 2.932 1.063 2.188 1.636 1.515 2.308.843 2.98.27 3.723-.095 4.632c-.358.888-.566 1.93-.625 3.212C-.013 8.332 0 8.737 0 12c0 3.263.013 3.668.072 4.947.06 1.283.267 2.324.625 3.212.365.909.938 1.652 1.61 2.324.672.672 1.415 1.245 2.324 1.61.888.358 1.93.566 3.212.625 1.28.059 1.685.072 4.947.072s3.668-.013 4.947-.072c1.283-.06 2.324-.267 3.212-.625.909-.365 1.652-.938 2.324-1.61.672-.672 1.245-1.415 1.61-2.324.358-.888.566-1.93.625-3.212.059-1.28.072-1.685.072-4.947s-.013-3.668-.072-4.947c-.06-1.283-.267-2.324-.625-3.212a6.994 6.994 0 0 0-1.61-2.324A6.994 6.994 0 0 0 20.16.698c-.888-.358-1.93-.566-3.212-.625C15.668.013 15.263 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-white hover:fill-fuchsia-500 transition"
                  viewBox="0 0 24 24"
                >
                  <title>Logo TikTok</title>
                  <path d="M16.5 1.3c.5 2 1.9 3.4 4 3.6v3.3c-1.4-.1-2.8-.4-4-1v7.4c0 4.1-3.2 7.4-7.4 7.4S1.7 18.7 1.7 14.6 4.9 7.2 9 7.2c.5 0 1.1.1 1.6.2v3.3c-.5-.2-1-.3-1.6-.3-2.3 0-4.1 1.9-4.1 4.2s1.8 4.2 4.1 4.2 4.1-1.9 4.1-4.2V1.3h3.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
