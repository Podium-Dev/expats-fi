import Image from 'next/image'

type HeroBackdropProps = {
  src: string
  position?: string
}

export function HeroBackdrop({ src, position = 'center' }: HeroBackdropProps) {
  return (
    <div className="photo-hero__media" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="(max-width: 900px) 100vw, 45vw"
        style={{ objectPosition: position }}
      />
    </div>
  )
}
