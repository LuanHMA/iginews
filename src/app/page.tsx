import { stripe } from "@/services/stripe";
import Image from "next/image";
import GirlCoding from "./assets/Mulher.svg";
import { SubscribeButton } from "./components/subscribeButton/SubscribeButton";

export default async function Home() {
  const price = await stripe.prices.retrieve("price_1NW9TRFGhU8yelvRcFlHJhmv");

  const product = {
    priceID: price.id,
    amount: price.unit_amount,
  };

  const amountFormated =
    product.amount &&
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(product.amount / 100);

  return (
    <main className="height-container max-w-6xl m-auto px-8 flex items-center justify-between ">
      <section className="text-white max-w-xl space-y-4">
        <span className="text-2xl font-bold">👏 Hey, welcome</span>
        <h1 className="text-7xl leading-[4.5rem] font-black">
          News about the <span className="text-cyan-500">React</span> world.
        </h1>
        <p className="text-2xl leading-10">
          Get access to all the publications <br />
          <span className="text-cyan-500 font-bold">
            for {amountFormated} month
          </span>
        </p>
        <SubscribeButton priceId={product.priceID} />
      </section>
      <Image src={GirlCoding} alt="Girl coding" />
    </main>
  );
}
