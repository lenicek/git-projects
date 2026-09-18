document.addEventListener('DOMContentLoaded', function () {
  if (typeof CookieConsent !== 'undefined') {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
          equalWeightButtons: true
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true
        }
      },
      categories: {
        necessary: {
          readOnly: true,
          enabled: true
        },
        analytics: {
          enabled: false,       // Výchozí stav VYPNUTO (opt-in)
          readOnly: false,      // Uživatel může přepínat
          autoClear: {
            cookies: [
              { name: /^(_ga|_gid|_gat)/ }
            ]
          }
        }
      },
      language: {
        default: 'cs',
        translations: {
          cs: {
            consentModal: {
              title: 'Používáme soubory cookie',
              description: 'Tento web používá k poskytování služeb a analýze návštěvnosti soubory cookie. Stisknutím tlačítka „Přijmout vše“ souhlasíte s jejich použitím.',
              acceptAllBtn: 'Přijmout vše',
              acceptNecessaryBtn: 'Odmítnout vše',
              showPreferencesBtn: 'Nastavit předvolby'
            },
            preferencesModal: {
              title: 'Nastavení cookies',
              acceptAllBtn: 'Přijmout vše',
              acceptNecessaryBtn: 'Odmítnout vše',
              savePreferencesBtn: 'Uložit nastavení',
              sections: [
                {
                  title: 'Nezbytné cookies',
                  description: 'Tyto cookies jsou nutné pro správné fungování webových stránek.',
                  category: 'necessary'
                },
                {
                  title: 'Analytické cookies',
                  description: 'Pomáhají nám sledovat anonymní statistiky návštěvnosti.',
                  linkedCategory: 'analytics' // Tento klíč zobrazí přepínač
                }
              ]
            }
          }
        }
      }
    });
  } else {
    console.error('Knihovna CookieConsent nebyla načtena! Zkontrolujte cestu k js/cookieconsent.js');
  }
});