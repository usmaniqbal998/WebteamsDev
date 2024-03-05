import { cn } from '@/Util'
import Image from 'next/image'

export const ImageCircle = (props: {
  src: Parameters<typeof Image>[0]['src']
  alt: string
  circleSize?: number
  imageHeight?: number
  imageWidth?: number
  className?: string
}) => {
  return (
    <div
      style={{
        minWidth: props.circleSize,
        minHeight: props.circleSize,
        maxWidth: props.circleSize,
        maxHeight: props.circleSize,
        width: props.circleSize,
        height: props.circleSize
      }}
      className={cn(
        'flex items-center justify-center rounded-full border-8 bg-transparent ring-1 ring-white',
        props.className
      )}
    >
      <Image
        src={props.src}
        alt={props.alt}
        height={props.imageHeight}
        width={props.imageWidth}
        className='stroke-1'
      />
    </div>
  )
}
