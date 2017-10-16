import React, { Component } from 'react';
import { I18n } from 'react-i18next';

class Faq extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div className="card container has-text-centered">
            <div className="card-content">
              <p className="title is-size-1">{t('faq.title')}</p>
              <br />
              <p className="subtitle is-size-4">{t('faq.what.title')}</p>
              <p className="is-size-5">{t('faq.what.description')}</p>
              <br />
              <p className="subtitle is-size-4">{t('faq.why.title')}</p>
              <p className="is-size-5">{t('faq.why.description')}</p>
              <br />
              <p className="subtitle is-size-4">{t('faq.howMany.title')}</p>
              <p className="is-size-5">{t('faq.howMany.description')}</p>
            </div>
          </div>
        )}
      </I18n>
    );
  }
}

export default Faq;
