import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: 'https://picsum.photos/1600/600?random',
    description: 'Description 1'
  },
  {
    original: 'https://picsum.photos/1600/600?random',
    original: 'https://i.imgur.com/DCdBXcq.jpg',
    description: 'Description 2'
  },
  {
    original: 'https://picsum.photos/1600/600?random',
    description: 'Description 3'
  }
];

const Home = () => {
  return (
    <Fragment>
      <ImageGallery
        items={images}
        showBullets={true}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        autoPlay={true}
        slideDuration={5000}
      />
    </Fragment>
  );
}

export default Home;


import React, { Component } from 'react';
import Arrow from './Slider/Arrow';
import ImageSlide from './Slider/ImageSlide';

const imgUrls = [
  "https://picsum.photos/1600/600?random",
  "https://picsum.photos/1600/600?random",
  "https://picsum.photos/1600/600?random"
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    const styles = {
      width: '100%',
      height: '100%'
    };
    return (
      <div style={styles}>
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
        />
        <ImageSlide
          url={imgUrls[this.state.currentImageIndex]}
        />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
        />
      </div>
    );
  }
}

export default Home;
