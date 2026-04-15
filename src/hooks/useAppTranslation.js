import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const useAppTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  // Create a proxy so we can still use t.propertyName instead of t('propertyName')
  // This is for backward compatibility with our custom LanguageContext implementation
  const proxiedT = useMemo(() => {
    return new Proxy({}, {
      get: (target, prop) => t(prop)
    });
  }, [t]);

  return { t: proxiedT, i18n };
};
