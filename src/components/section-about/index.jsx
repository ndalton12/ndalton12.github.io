import React from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6 blog-content">
        <Markdown remarkPlugins={[remarkGfm]}>{about}</Markdown>
      </div>
    </Section>
  );
};

export default SectionAbout;
