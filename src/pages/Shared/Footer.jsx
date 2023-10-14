import logo from "../../assets/icon/whiteLogo.png";
import fb from "../../assets/icon/fb.svg";
import insta from "../../assets/icon/insta.svg";
import linkedIn from "../../assets/icon/linkedIn.svg";
import whatsapp from "../../assets/icon/whatsapp.png";
const Footer = () => {
  return (
    <footer>
      <div className="px-primary pt-8 pb-11 bg-gradient-to-r from-[#2f4fcf] via-[#2f4fcf] to-[#6227d1] text-white font-openSans">
        <div className="grid gap-16 grid-cols-7 mb-8 ">
          <div className="col-span-2">
            <img src={logo} alt="Logo Ipsum" />
            <p className="text-sm mt-4">
              India&apos;s first platform dedicated to simplifying partner
              search
            </p>
          </div>
          <div>
            <h6 className="text-sm font-bold">COMPANY</h6>
            <ul className="grid gap-y-4 mt-4">
              <li>About</li>
              <li>Pricing</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold">SOLUTIONS</h6>
            <ul className="grid gap-y-4 mt-4">
              <li>Search</li>
              <li>Connect</li>
              <li>Research</li>
              <li>Academy</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold">RESOURCES</h6>
            <ul className="grid gap-y-4 mt-4">
              <li>Blogs</li>
              <li>Forms</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold">SUPPORT</h6>
            <ul className="grid gap-y-4 mt-4">
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold">LEGAL</h6>
            <ul className="grid gap-y-4 mt-4">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-8">
          <p className="text-sm">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="flex items-center gap-6">
            <a href="#">
              <img src={fb} alt="facebook" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src={insta} alt="instagram" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src={linkedIn} alt="linkedin" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="whatsapp" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="px-primary bg-black text-xs text-white py-5 text-center">
        <p>
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
