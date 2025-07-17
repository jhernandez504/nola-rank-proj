import { useAlert } from '../context/AlertContext';

export default function AlertBanner() {
  const { alertMessage } = useAlert();

  if (!alertMessage) return null;

  return (
    <div className="bg-yellow-400 text-black text-center py-2 px-4">
      {alertMessage}
    </div>
  );
}
