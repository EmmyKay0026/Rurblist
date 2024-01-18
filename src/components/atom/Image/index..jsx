export default function Image({ imgSrc, imgAlt, imgClassName, onClick }) {
  return (
    <div onClick={onClick} className={imgClassName}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
}
