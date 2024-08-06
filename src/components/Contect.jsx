import { CONTACT } from "../constants";

const Contect = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="text-4xl text-center my-10 ">Get ahold of Us</h1>
      <div className="text-center tracking-tighter">
        <p my-4>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contect;
