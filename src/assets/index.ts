import ImageTag from './images';

export const getImage = (tag: ImageTag) => {
  switch (tag) {
    case ImageTag.POST:
      return require('./images/post.png');
    case ImageTag.SEARCH:
      return require('./images/search.png');
    case ImageTag.THANK_YOU:
      return require('./images/thank_you.png');
    case ImageTag.USER:
      return require('./images/user.jpg');
    case ImageTag.MAP_PIN:
      return require('./images/map-pin.png');
    default:
      return -1;
  }
};
