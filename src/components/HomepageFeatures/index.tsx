import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Открытый протокол CBDC, с отсутствием корневой выдачи сертификатов',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Протокол ODC  — публичный, открытый и никогда не будет запатентован.
          Вы можете смело использовать все наработки, написанные в данной документации, если это не запрещает
          законодательство вашей страны.
      </>
    ),
  },
  {
    title: 'Offline передача цифровых наличных',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        В отличие от другие CBDC протоколов,
          ODC поддерживает offline передачу цифровых наличных.

          Алгоритм ODC, исполняемый в доверенной среде,
          не привязан к конкретным хеш-функциям и
          алгоритмам цифровой подписи.

          Их можно настроить в соотвествии со стандартами и требованиями
          тех государств, на территории которых ODC функционирует.
      </>
    ),
  },
    {
        title: 'Открытое развивающиеся движение и сообщество',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Движение ODC появилось в 2021 году на базе КИБ-овского движения.
                Мы хотим превратить ODC в самостоятельный международный открытый проект
                и распространить ODC протокол на Африку, Лат.Америку и Океанию.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
