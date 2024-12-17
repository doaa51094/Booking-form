import VisaIcon from "../assets/visa.jpg";
import MasterCardIcon from "../assets/master.png";
import AmexIcon from "../assets/amex-icon-1024x666-5rlm5d50.png";

export const PaymentMethods = () => {
  return (
    <div className="flex gap-2">
      <img src={VisaIcon} alt="Visa" className="w-10 " />
      <img src={MasterCardIcon} alt="Mastercard"  className="w-10 " />
      <img src={AmexIcon} alt="Amex" className="w-10 " />
    </div>
  );
};
