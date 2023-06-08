import React from 'react';

const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Python', 'UI/UX', 'Pandas', 'Spyder', 'webdev'];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 4;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div className='loop-slider' style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    } as any}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

export const App = () => (
  <div className='app'>
    <div className='tag-list'>
      {[...Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={(i % 2) === 0}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
            <Tag text={tag} key={index} />
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade' />
    </div>
  </div>
);

