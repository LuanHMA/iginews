interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className="h-16 w-64 rounded-[2rem] text-gray-900 bg-yellow-500 text-xl font-bold flex items-center justify-center transition-all hover:brightness-75"
    >
      Subscribe now
    </button>
  );
}
