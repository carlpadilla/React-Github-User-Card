import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import { Row, Col } from 'react-simple-flex-grid';
import 'react-simple-flex-grid/lib/main.css';

const Followers = ({ followers }) => (
  <div>
    <Grid>
      <Grid.Column width={16}>
        <Row gutter={40}>
          {followers.map(follower => (
            <Col
              key={follower.id}
              xs={{ span: 6 }}
              sm={{ span: 4 }}
              md={{ span: 3 }}
              lg={{ span: 2 }}
              xl={{ span: 2 }}
            >
              <a href={follower.html_url}>
                <Image
                  key={follower.id}
                  src={`${follower.avatar_url}.jpg`}
                  style={{
                    padding: '5px',
                    border: '1px solid black',
                    margin: '10px'
                  }}
                />
                <p style={{ textAlign: 'center' }}>{follower.login}</p>
              </a>
            </Col>
          ))}
        </Row>
      </Grid.Column>
    </Grid>
  </div>
);

export default Followers;
