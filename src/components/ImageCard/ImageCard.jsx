export default function ImageCard({ item }) {
  return (
    <div>
      <img src={item.urls.small} alt={item.slug} />
    </div>
  );
}
