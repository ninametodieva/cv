//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader/root';

// Libraries
import React from 'react';
import moment from 'moment';
import { stringify } from 'flatted/esm';

// Content
import { bg as bgLabels, en as enLabels } from '../labels.json';

// Styles
import styles from './app.scss';

// Organisms
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';

// Sections
import Experience from './sections/experience';
import Education from './sections/education';
import TechsAndTools from './sections/techs-and-tools';
import Strengths from './sections/strengths';
import Weaknesses from './sections/weaknesses';
import Languages from './sections/languages';
import References from './sections/references';


//--------------------------| Section Router

const SectionRouter = ({ data }) => {
  const router = () => {
    switch (data.fields.id) {
      default: return null;
      case 'experience': return Experience;
      case 'education': return Education;
      case 'skills': return TechsAndTools;
      case 'strengths': return Strengths;
      // case 'weaknesses': return Weaknesses;
      case 'languages': return Languages;
      case 'references': return References;
    }
  };

  const Section = router();

  return Section ? <Section data={data} /> : null;
};


//--------------------------| Component

class App extends React.PureComponent {
  state = { lang: this.props.bilingual ? this.props.lang : 'en' };

  render() {
    const { content } = this.props;
    const labels = this.state.lang === 'en' ? enLabels : bgLabels;
    const data = content[this.state.lang];

    localStorage.setItem('cv_labels', stringify(labels));

    if (this.props.bilingual) {
      moment.locale(this.state.lang);
      window.location.hash = this.state.lang;
    }

    console.log(data.fields.sections);

    return (
      <div className={styles.root}>
        {
          this.props.bilingual && (
            <span className={styles.language}>
              <a
                onClick={() => {
                  this.setState(prevState => ({ lang: prevState.lang === 'en' ? 'bg' : 'en' }));
                }}
              >
                {this.state.lang === 'en' ? 'bg' : 'en'}
              </a>
            </span>
          )
        }

        <Header
          person={data.fields.person.fields}
          accounts={data.fields.accounts}
        />
        <main>
          {
            data.fields.sections.map(section => (
              <SectionRouter key={section.sys.id} data={section} />
            ))
          }
        </main>
        <Footer docs={[data.fields.pdfVersion]} />
      </div>
    );
  }
}


//--------------------------| Export

export default hot(App);
