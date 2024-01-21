// LanguageSwitcher.tsx

import { useTranslation } from 'next-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (newLanguage: string) => {
    console.log(i18n.language)
    i18n.changeLanguage(newLanguage);
  };
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      {' | '}
      <button onClick={() => changeLanguage('ja')}>日本語</button>
      {/* Add more languages as needed */}
    </div>
  );
};

export default LanguageSwitcher;
