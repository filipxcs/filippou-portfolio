import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true
    },
  },

  // onFirstConsent: () => {
  //   console.log('onFirstAction fired');
  // },

  // onConsent: () => {
  //   console.log('onConsent fired ...');
  // },

  // onChange: () => {
  //   console.log('onChange fired ...');
  // },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
    ads: {
      description: 'Cookies used for advertising and tracking purposes.',
    },
  },

  language: {
    default: 'en',

    translations: {
      en: {
        consentModal: {
          title: "Welcome to Offload Studio – Let's Talk Cookies!",
          description:
            'We use essential cookies to keep our website running smoothly and tracking cookies to understand how you interact with it. The choice is yours – enable tracking cookies for the best experience!',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject Necessary',
          showPreferencesBtn: 'Manage Preferences',
          footer: `
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#link">Impressum</a>
          `,
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject All',
          savePreferencesBtn: 'Save Preferences',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'We use cookies to enhance your experience. For more details, refer to our <a href="#" class="cc__link">privacy policy</a>.',
            },
            {
              title: 'Strictly Necessary Cookies',
              description:
                'These cookies are essential for the website to function and cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Performance and Analytics Cookies',
              description:
                'These cookies help us understand how visitors interact with our website.',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Cookie',
                  domain: 'Domain',
                  desc: 'Description',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'offload.studio',
                    desc: 'Used for Google Analytics.',
                  },
                  {
                    name: '_gid',
                    domain: 'offload.studio',
                    desc: 'Used for Google Analytics.',
                  },
                ],
              },
            },
            {
              title: 'Advertisement and Targeting Cookies',
              description:
                'These cookies are used to deliver advertisements more relevant to you and your interests.',
              linkedCategory: 'ads',
            },
            {
              title: 'More Information',
              description:
                'For any queries regarding our cookie policy, please <a class="cc__link" href="#yourdomain.com">contact us</a>.',
            },
          ],
        },
      },
    },
  },
};

// export default defineNuxtPlugin(async () => {
//   await CookieConsent.run(config);

//   return {
//     provide: {
//       CC: CookieConsent,
//     },
//   };
// });
