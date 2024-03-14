import { Feather, FileClock, Heart } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { ABOUT, CHANGELOG, FEEDBACK } from '@/const/url';

import Item from '../features/SettingList/Item';
import { useStyles } from './style';

const AboutList = memo(() => {
  const { t } = useTranslation('setting');
  const { styles } = useStyles();
  const items = [
    // {
    //   icon: Feather,
    //   label: t('feedback', { ns: 'common' }),
    //   onClick: () => window.open(FEEDBACK, '__blank'),
    //   value: 'feedback',
    // },
    // {
    //   icon: FileClock,
    //   label: t('changelog', { ns: 'common' }),
    //   onClick: () => window.open(CHANGELOG, '__blank'),
    //   value: 'changelog',
    // },
    {
      icon: Heart,
      label: '有疑问请点击加入交流群私群主',
      onClick: () => window.open('https://qm.qq.com/cgi-bin/qm/qr?k=c2JE7QJsgU9MuIg84ZRnVPY3sA_LPzhX&jump_from=webapi&authKey=jHmRyfOcH4aE6nJ6wP9d6kgOrR8uf5noKf4cgxPz/IFj30cuKLubJQqq5Ox1uKO9', '__blank'),
      value: 'about',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Flexbox className={styles.container} gap={24} padding={16}>
        <Flexbox className={styles.title} gap={8} horizontal>
          {t('about.title')}
        </Flexbox>
        <Flexbox width={'100%'}>
          {items.map(({ value, icon, label, onClick }) => (
            <div key={value} onClick={onClick}>
              <Item active={false} icon={icon} label={label} />
            </div>
          ))}
        </Flexbox>
      </Flexbox>
    </div>
  );
});

export default AboutList;
