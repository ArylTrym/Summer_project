import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Multispeciality Dental Clinic & Implant Center.
          </p>
          <p>© Dent Care Plaza All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">facebook.com/Dent-care-plaza</p>
          <p className="my-5">instagram.com/Dent-care-plaza</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">dentcareplaza@gmail.com</p>
          <p>(+977)9828083444</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;