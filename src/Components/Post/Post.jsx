import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import sampleProfile from '../../assets/images/Profile picture.png';
import { styles } from './styles';

const Post = ({ text, score, author }) => {
  console.log(author);
  return (
    <Card>
      <Card.Content>
        <Card.Header style={styles.header}>
          <Image floated="left" avatar size="large" src={author.avatar} />
          {author.username}
          <span style={styles.scoreSection}>
            <Icon name="star" color={'yellow'} />
            {author.score}
          </span>
        </Card.Header>
        <Card.Description>{text}</Card.Description>
      </Card.Content>
    </Card>
  );
};

Post.defaultProps = {
  username: 'Steve Sanders',
  text: 'Placeholder text',
  avatar: sampleProfile,
  score: 666
};

export default Post;
