export default function ImageCard({ item, isOpen }) {
  console.log(item);
  return (
    <div onClick={() => isOpen(item)}>
      <img src={item.urls.small} alt={item.slug} />
    </div>
  );
}
