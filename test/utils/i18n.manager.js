const fs = require('fs');
const path = require('path');

class I18nManager {
    constructor() {
        // Locale resolution priority: explicit env var > default 'en'
        // This lets CI/local runs override via: LOCALE=es npm run android:local
        this.locale = process.env.LOCALE || 'en';
        this.translations = this._loadLocale(this.locale);
    }

    _loadLocale(locale) {
        const localePath = path.join(__dirname, '..', 'data', 'locales', `${locale}.json`);

        if (!fs.existsSync(localePath)) {
            throw new Error(
                `[I18nManager] Locale file not found: ${localePath}. ` +
                `Available locales should be added under test/data/locales/.`
            );
        }

        return JSON.parse(fs.readFileSync(localePath, 'utf-8'));
    }

    /**
     * Retrieve a translated string by dot-notation key.
     * Example: i18n.get('products.header') -> 'PRODUCTS' (en) or 'PRODUCTOS' (es)
     */
    get(key) {
        const value = key
            .split('.')
            .reduce((obj, part) => (obj ? obj[part] : undefined), this.translations);

        if (value === undefined) {
            throw new Error(`[I18nManager] Missing translation key "${key}" for locale "${this.locale}"`);
        }

        return value;
    }
}

// Singleton — one resolved locale per test run, matching our LoginPage/ProductsPage pattern
module.exports = new I18nManager();