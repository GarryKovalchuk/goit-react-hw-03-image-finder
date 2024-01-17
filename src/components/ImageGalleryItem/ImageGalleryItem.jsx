import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

export default class ImageGalleyItem extends Component {
  onClick = () => {
    return this.props.onClick({
      largerImage: this.props.largerImage,
      alt: this.props.alt,
    });
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img src={src} alt={alt} onClick={this.onClick} />
      </li>
    );
  }
}
