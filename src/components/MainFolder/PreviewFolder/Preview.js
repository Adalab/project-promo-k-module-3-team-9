import React from 'react';
import './Preview.scss';
import lisa from '../../../images/lisa_simpson.png';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset() {
    this.props.handleReset();
  }
  render() {
    return (
      <section className="section__card">
        <div className="section__card--wrapper">
          <button
            type="button"
            className="uppercase button--reset"
            onClick={this.handleReset}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>Reset
          </button>
          <article className="section__article">
            <div
              className={`section__article--wrapper palets-${this.props.data.design}-wrapper`}
            >
              <h2
                className={`section__article--title palets-${this.props.data.design}-title`}
              >
                {this.props.data.name || 'Lisa Simpson'}
              </h2>
              <h3
                className={`section__article--subtitle palets-${this.props.data.design}-subtitle`}
              >
                {this.props.data.job || 'Front End Developer'}
              </h3>
            </div>
            <div
              className="section__article--image"
              style={{
                backgroundImage: `url(${this.props.data.profileImage || lisa})`
              }}
            ></div>
            <nav className="section__article--icons">
              <ul className="icons__list">
                <li
                  className={`icons__list--item palets-${this.props.data.design}--icons`}
                >
                  <a className="link " href={`tel:${this.props.data.phone}`}>
                    <i className="fa fa-mobile  " aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className={`icons__list--item palets-${this.props.data.design}--icons`}
                >
                  <a className="link " href={`mailto:${this.props.data.email}`}>
                    <i className="fa fa-envelope-o  " aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className={`icons__list--item palets-${this.props.data.design}--icons`}
                >
                  <a
                    className="link "
                    href={`https://www.linkedin.com/in/${this.props.data.linkedin}`}
                    target="_blank"
                  >
                    <i className="fa fa-linkedin " aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className={`icons__list--item palets-${this.props.data.design}--icons`}
                >
                  <a
                    className="link"
                    href={`https://www.github.com/${this.props.data.github}`}
                    target="_blank"
                  >
                    <i className="fa fa-github-alt " aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </section>
    );
  }
}

export default Preview;
