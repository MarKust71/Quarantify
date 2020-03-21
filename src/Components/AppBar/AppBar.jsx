import React from 'react';
import { Image, Header, Segment, Icon } from 'semantic-ui-react';

import sampleProfile from '../../assets/images/Profile picture.png';
import { styles } from './styles';
import {useAuthorization} from "../../hooks/useAuthorization";

const AppBar = () => {
    const user = useAuthorization()

  return (
    <div fixed="top" style={styles.root}>
      <div>
        <Header as="h2">
          <Image circular src={sampleProfile} /> Lilth Collins
        </Header>
      </div>
      <span position="right">
        <Segment style={styles.segment}>
          <Header size="small">
            <Icon name="star" color="yellow" size="small" />
            <Header.Content>{user ? user.currentScore : ''}</Header.Content>
          </Header>
        </Segment>
      </span>
    </div>
  );
};

export default AppBar;