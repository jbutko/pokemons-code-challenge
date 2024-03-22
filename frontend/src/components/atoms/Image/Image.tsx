import ImageNext from 'next/image'
import type { ImageProps } from 'next/image'
import styles from './image.module.scss'

export const Image: React.FC<ImageProps> = ({ height = 200, ...imgProps }) => (
  <div className={styles.container}>
    <ImageNext
      quality="100"
      style={{ maxWidth: '100%', minHeight: height }}
      sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      20vw"
      {...imgProps}
    />
  </div>
)
