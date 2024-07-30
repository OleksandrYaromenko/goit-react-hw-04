import toast from "react-hot-toast";
export default function ErrorMessag() {
  return (
    <div>
      {toast.error("Oops! There was an error, please reload this page!")}
    </div>
  );
}
