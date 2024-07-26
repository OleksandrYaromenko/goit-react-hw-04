export default function ErrorMessag({ toast }) {
  return (
    <div>
      {toast.error("Oops! There was an error, please reload this page!")}
    </div>
  );
}
