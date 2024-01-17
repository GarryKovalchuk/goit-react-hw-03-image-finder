import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    gallery: [],
  };

  onClick = ({ largerImage, alt }) => {
    this.props.modalImage({
      largerImage: largerImage,
      alt: alt,
    });
    this.props.openModal();
  };

  render() {
    const { images } = this.props;

    return (
      <ul className={css.ImageGallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              onClick={this.onClick}
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              largerImage={image.largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}
