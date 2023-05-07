import Image from "next/image";
import goultarenalogo from "@/assets/images/goultarenalogo.png";
import {
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaDiscord,
  FaYoutube,
} from "react-icons/Fa";

export const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-800 text-white">
      <div className="homeSection h-max">
        <div className="mb-8 mt-6 flex justify-between">
          <div className="hidden w-full sm:block">
            <Image
              src={goultarenalogo}
              alt="goultarenalogo"
              className="ml-1 h-20 w-auto"
            />
          </div>
          <div className="mx-auto flex sm:mx-0">
            <ul className="mr-12 w-max sm:mr-20">
              <span className="text-md mb-14 font-semibold uppercase">
                About
              </span>
              <li className="mt-4">Homepage</li>
              <li>Matchs</li>
            </ul>
            <ul className="mr-12 w-max sm:mr-20">
              <span className="text-md font-semibold uppercase">Follow us</span>
              <li className="mt-4">Twitter</li>
              <li>Discord</li>
            </ul>
            <ul className="w-max">
              <span className="text-md mb-14 font-semibold uppercase">
                Legal
              </span>
              <li className="mt-4 ">Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="h-0.5 w-full rounded-full bg-white bg-opacity-10"></div>
        <div className="mb-2 mt-8 flex items-center justify-between ">
          <div>
            <p className="uppercase">© 2023 - goultarena.gg</p>
          </div>
          <div className="flex items-center">
            <FaTwitter className="mr-3 h-6 w-auto" />
            <FaInstagram className="mr-3 h-6 w-auto" />
            <FaDiscord className="mr-3 h-6 w-auto" />
            <FaTwitch className="mr-3 h-5 w-auto" />
            <FaYoutube className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};
