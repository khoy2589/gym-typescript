import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
        </div>
        <div className="my-5">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius alias beatae ea soluta, ad vitae porro vero fugiat saepe debitis laboriosam ullam at dolorem accusamus ratione quaerat nostrum? Numquam, eos!
            </p>
            <p>
                © Copyright 2024. Y3ll0W All Rights Reserved.
            </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
                http://www.y3ll0w.com
            </p>
            <p>
                alternate text
            </p>
        </div>


        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="mt-5">
                333 Main Street, Chiang Rai, Ch 57000
            </p>
            <p>
                (555) 555-5555
            </p>
            <p>
                8vzXu@example.com
            </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
