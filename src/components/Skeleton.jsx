import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="card__container"
    speed={2}
    width={330}
    height={460}
    viewBox="0 0 330 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="129" r="130" />
    <rect x="0" y="276" rx="5" ry="5" width="288" height="40" />
    <rect x="0" y="336" rx="5" ry="5" width="288" height="40" />
    <rect x="1" y="397" rx="5" ry="5" width="87" height="25" />
    <rect x="137" y="397" rx="10" ry="10" width="150" height="25" />
  </ContentLoader>
);

export default Skeleton;
