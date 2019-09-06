import React from 'react';
import { Project, Words, Image } from 'arwes';

const Followers = props => {
  return (
    <div className='followers' style={{ padding: 20 }}>
      <Project animate header='FOLLOWERS'>
        <p>
          <Words>
            {props.followers.map(follower => (
              <div>
                <p>{follower.login}</p>
                <a href={follower.html_url} alt={follower.login}>
                  <Image
                    style={{ width: 200 }}
                    animate
                    resources={follower.avatar_url}
                  />
                </a>
              </div>
            ))}
          </Words>
        </p>
      </Project>
    </div>
  );
};

export default Followers;
