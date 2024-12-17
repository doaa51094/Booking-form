import React, { useState } from "react";
import FormForPayment from "./FormForPayment";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import sepa from "../assets/sepa.webp";
import { PaymentMethods } from "./PaymentMethods";
import { useTranslation } from "react-i18next";

const BookingForm = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("6 MONTHS");
  const [phoneStudent, setPhoneStudent] = useState("+30");
  const [phoneParent, setPhoneParent] = useState("+30");
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [billingAddress, setBillingAddress] = useState({ address: "", nr: "" });
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [sessions, setSessions] = useState(8);
  const [payInAdvance, setPayInAdvance] = useState(true);
  const [duration, setDuration] = useState(6);
  const regularPrice = 29.4;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      phoneStudent,
      phoneParent,
      email,
      contactName,
      billingAddress,
      postalCode,
      city,
      country,
      sessions,
      duration,
      selectedOption,
      payInAdvance,
      totalPrice: calculateTotalPrice(),
    };

    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully! Check the console for details.");
  };

  const calculateTotalPrice = () => {
    const total = regularPrice * sessions * duration;
    return payInAdvance ? total * 0.95 : total;
  };

  const options = [
    { label: t("six_months"), value: 6 },
    { label: t("nine_months"), value: 9 },
    { label: t("twelve_months"), value: 12 },
    { label: t("eighteen_months"), value: 18 },
    { label: t("twentyfour_months"), value: 24 },
    { label: t("thirty_months"), value: 30 },
  ];
  

  return (
    <form onSubmit={handleSubmit} className="lg:flex main-container mb-4">
      <div className="booking-container lg:p-[3rem] p-8 relative">
        <h2 className="font-bold text-[22px]">{t("registration_title")}</h2>
        <p className="text-gray-600/70 text-[14px] mb-8">
          {t("platform_description")}
        </p>

        {/* Phone Input for Student */}
        <div className="form-section">
          <label className="text-gray-400 text-[12px] mb-2">
            {t("login_phone_number")}
          </label>
          <PhoneInput
            buttonStyle={{
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            country={"us"}
            value={phoneStudent}
            onChange={(phone) => setPhoneStudent(phone)}
          />
        </div>

        {/* Phone Input for Parent */}
        <div className="form-section">
          <label className="text-gray-400 text-[12px] mb-2">
            {t("contact_phone_number")}
          </label>
          <PhoneInput
            buttonStyle={{
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            country={"us"}
            value={phoneParent}
            onChange={(phone) => setPhoneParent(phone)}
          />
        </div>

        {/* Email */}
        <div className="form-section">
          <label className="text-gray-400 text-[12px] mb-2">
            {t("contact_email")}
          </label>
          <input
            type="email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contact Name */}
        <div className="form-section">
          <label className="text-gray-400 text-[12px] mb-2">
            {t("contact_name")}
          </label>
          <input
            type="text"
            className="w-full"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </div>

        {/* Billing Address */}
        <div>
          <label className="text-gray-400 text-[12px] mb-3">
            {t("billing_address")}
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder={t("address_placeholder")}
              className="w-full"
              value={billingAddress.address}
              onChange={(e) =>
                setBillingAddress({
                  ...billingAddress,
                  address: e.target.value,
                })
              }
            />
            <input
              type="number"
              placeholder={t("nr_placeholder")}
              className="w-1/4"
              value={billingAddress.nr}
              onChange={(e) =>
                setBillingAddress({ ...billingAddress, nr: e.target.value })
              }
            />
          </div>
        </div>

        {/* Sessions */}
        <div className="form-section mt-4">
          <label className="text-gray-400 text-[12px] flex gap-1 items-center mb-2">
            {t("monthly_sessions")}
          </label>
          <select
            value={sessions}
            onChange={(e) => setSessions(parseInt(e.target.value))}
            className="w-full"
          >
            <option value={8}>8 Sessions</option>
            <option value={12}>12 Sessions</option>
          </select>
        </div>

        {/* City, Postal Code, and Country */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={t("postal_code_placeholder")}
            className="w-1/3"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("city_placeholder")}
            className="w-1/3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            className="w-1/3"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>{t("country")}</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="form-section mt-4">
          <label className="text-gray-400 text-[12px] mb-2">
            {t("select_payment_method")}
          </label>
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" />
            <img src={sepa} alt="sepa icon" className="w-16" />
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" />
            <PaymentMethods />
          </div>
        </div>

        {/* Payment Form */}
        <div className="form-section">
          <input type="text" className="w-full" placeholder={t("Card_holder" )}/>
        </div>
        <FormForPayment />
        <p className="absolute bottom-3 text-[12px] font-thin text-gray-400">
          {t("secure")}
        </p>
      </div>

      {/* Order Overview Section */}
      <div className="overview relative bg-[#f4f4f9] lg:min-w-[400px] lg:p-[3rem] p-8">
        <h5 className="text-[13px] font-semibold">{t("order_overview")}</h5>
        <div className="grid grid-cols-3 w-full max-w-sm mx-auto my-6">
  {options.map((option, index) => (
    <div
      key={index}
      onClick={() => {setSelectedOption(option.value) ;
      setDuration(option.value);
      }} 
      className={`cursor-pointer border-[1px] lg:p-4 p-3 text-center lg:font-semibold font-normal text-sm
      ${
        selectedOption === option.value
          ? "border-purple-900 text-purple-900" 
          : "border-gray-300/50 text-gray-500"
      }`}
    >
      {option.label} 
    </div>
  ))}
</div>

        <div className="py-[20px]">
          <label className="toggle-container">
            {/* Custom Toggle */}
            <input
              type="checkbox"
              checked={payInAdvance}
              onChange={() => setPayInAdvance(!payInAdvance)}
            />
            <span className="slider"></span>
            <span className=" text-[13px] text-gray-900/85 font-bold">
              {t("pay_in_advance_discount")}
            </span>
          </label>
        </div>
        <div className="flex gap-5 flex-col">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-[13px] font-medium">
              {t("number_of_sessions_p.m")}
            </div>
            <div className=" text-[16px] font-medium">{sessions}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-[13px] font-medium">
              {t("regular_price")}
            </div>
            <div
              className={`text-[16px] font-medium ${
                payInAdvance ? "line-through" : ""
              }`}
            >
              {calculateTotalPrice().toFixed()}€
            </div>
          </div>
          {payInAdvance && (
            <div className="flex justify-between items-center">
              <div className="text-gray-400 text-[13px] font-medium">
                {t("your_price")}
              </div>
              <div className=" text-[16px] font-medium">
                {(regularPrice * 0.95).toFixed(2)}€
              </div>
            </div>
          )}
          <div className="flex justify-between items-center text-green-400">
            <div className=" text-[13px] font-medium">{t("discount")}</div>
            <div className={`lg:text-[20px] text-[16px] font-semibold `}>
              -9.60€
            </div>
          </div>

          <div className="line w-full h-1 bg-white m-auto"></div>
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-[13px] font-medium">
              {t("setup_fee")}
            </div>
            <div className=" lg:text-[20px] text-[16px] font-semibold text-blue-500/75">
              00.0€
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-[13px] font-medium">
              {t("total_pm")}
            </div>
            <div className=" lg:text-[20px] text-[16px] font-semibold text-blue-500/75">
              227.20€
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <div className="h-full">
              <input type="checkbox" className="h-auto" />
            </div>
            <p className="flex-wrap lg:w-[400px] text-gray-400">
              {t("accept")}{" "}
              <span className="text-blue-500 cursor-pointer">
                {t("terms_conditions")}
              </span>{" "}
              {t("and_understand")}
              <br />
              {t("my")}{" "}
              <span className="text-blue-500 cursor-pointer">
                {t("right_of_withdrawal")}
              </span>
              {t("as_well_as_the")} <br />
              {t("circumstances_that_lead")}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#7B61FF] to-[#00C6FF] text-white font-semibold h-[3.5rem] rounded mt-4"
          >
            {t("order_now")}
          </button>
        </div>
        <p className="absolute bottom-3 left-1/2 text-[16px] font-thin text-gray-400 translate-x-[-50%]">
  {t("rate")}{" "}
</p>

      </div>
    </form>
  );
};

export default BookingForm;
