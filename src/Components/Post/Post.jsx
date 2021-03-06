import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import placholderAvatar from '../../assets/images/placholderAvatar.png';
import { styles } from './styles';

const Post = ({ text, image, author }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header style={styles.header}>
          <Image floated="left" avatar size="large" src={author?.avatar} />
          {author.username}
          <span style={styles.scoreSection}>
            <Icon name="star" color={'yellow'} />
            {author.score}
          </span>
        </Card.Header>
        <Card.Description>{text}</Card.Description>
      </Card.Content>
      {image && <Image src={image} wrapped />}
    </Card>
  );
};

Post.defaultProps = {
  text: 'Placeholder text',
  image: null,
  author: {
    username: 'Unknown',
    score: '000',
    avatar: placholderAvatar
  }
};

export default Post;
