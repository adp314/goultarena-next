import Image from "next/image";
import carteBleu from "@/assets/images/paymentProviders/carte_bleu.png";
import mastercard from "@/assets/images/paymentProviders/mastercard.png";
import americanExpress from "@/assets/images/paymentProviders/american_express.png";
import visa from "@/assets/images/paymentProviders/visa.png";
import gpay from "@/assets/images/paymentProviders/gpay.png";
import applePay from "@/assets/images/paymentProviders/applepay.png";
import bancontact from "@/assets/images/paymentProviders/bancontact.png";

export const PaymentProviders = () => {
  return (
    <section className="bg-white">
      <div className="homeSection h-max ">
        <div className="mt-8 text-center font-bold">
          <h2 className=" text-lg uppercase text-orange-800">
            Payment providers
          </h2>
        </div>
        <div className="payment-providers mb-8 mt-6 flex w-full items-center justify-start gap-6 overflow-x-auto md:justify-evenly lg:gap-8">
          <Image src={carteBleu} alt="Carte Bleu" className="h-20 w-auto" />
          <Image src={mastercard} alt="Carte Bleu" className="h-16 w-auto" />
          <Image src={visa} alt="Carte Bleu" className="h-24 w-auto" />
          <Image
            src={americanExpress}
            alt="Carte Bleu"
            className="h-20 w-auto"
          />
          <Image src={bancontact} alt="Carte Bleu" className="h-16 w-auto" />

          <Image src={gpay} alt="Carte Bleu" className="h-16 w-auto" />
          <Image src={applePay} alt="Carte Bleu" className="h-20 w-auto" />
        </div>
      </div>
    </section>
  );
};
