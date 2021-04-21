import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  return (
    <Section title="Education">
      {education.map((education) => (
        <SummaryItem
          key={education.name}
          name={education.name}
          description={education.description}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;