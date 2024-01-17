import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => openModal(largeImageURL)}
    >
      <img src={src} alt={alt} className={css.ImageGalleryItemimage} />
    </li>
  );
};
