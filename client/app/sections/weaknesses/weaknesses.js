//====================================================|
// WEAKNESSES


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './weaknesses.scss';

// Molecules
import TagGroup from '../../components/molecules/tag-group';

// Organisms
import Section from '../../components/organisms/section';


//--------------------------| Component

const Weaknesses = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name}
  >
    <TagGroup tags={data.fields.items.map(item => item.fields.name)} />
  </Section>
);


//--------------------------| Export

export default Weaknesses;
