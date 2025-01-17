import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, isOpen }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} isOpen={isOpen} />
        </li>
      ))}
    </ul>
  );
}
