import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Image from '@site/src/components/HomepageFeatures/Image';

const FeatureList = [
  {
    title: 'Dễ dàng sử dụng',
    Svg: require('@site/static/images/common/setup_page_draw.png').default,
    description: (
      <>
        Vision Pixel được thiết kế với giao diện trực quan và thân thiện, cho phép người dùng nhanh chóng triển khai các chương trình xử lý bài toán một cách hiệu quả và chính xác.
      </>
    ),
  },
  {
    title: 'Công cụ mạnh mẽ',
    Svg: require('@site/static/images/common/m1.jpg').default,
    description: (
      <>
        Tập hợp những bộ công cụ xử lý hình ảnh mạnh mẽ, Vision Pixel cung cấp giải pháp toàn diện với nhiều tính năng phù hợp cho từng bài toán thị giác máy khác nhau.
      </>
    ),
  },
  {
    title: 'Tích hợp dễ dàng',
    Svg: require('@site/static/images/common/Robot_arm_1.jpg').default,
    description: (
      <>
        Hỗ trợ đa dạng chuẩn giao tiếp ngoại vi, Vision Pixel dễ dàng kết nối và vận hành trực tiếp với các hệ thống máy móc và robot trong dây chuyền sản xuất.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ marginBottom: '30px' }}>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <Image src={Svg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ marginTop: '50px' }}>
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
