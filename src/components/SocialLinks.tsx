function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="social-icon__dot" cx="17.35" cy="6.75" r="1" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.25 20v-7h2.45l.38-2.85h-2.83V8.33c0-.83.23-1.39 1.43-1.39h1.52V4.4a20.7 20.7 0 0 0-2.22-.12c-2.2 0-3.7 1.34-3.7 3.8v2.07H8.8V13h2.48v7h2.97Z" />
    </svg>
  )
}

export function SocialLinks({ className = '', placement = 'footer' }: { className?: string; placement?: string }) {
  return (
    <div className={`social-links${className ? ` ${className}` : ''}`}>
      <a href="https://www.instagram.com/expats_fi/" target="_blank" rel="noreferrer" aria-label="Follow Expats.fi on Instagram" data-analytics-event="social_channel_clicked" data-analytics-label="instagram" data-analytics-position={placement}>
        <InstagramIcon />
        @expats_fi
      </a>
      <a className="social-links__facebook" href="https://www.facebook.com/groups/1579279056393368" target="_blank" rel="noreferrer" aria-label="Join the Expats.fi Facebook group" data-analytics-event="social_channel_clicked" data-analytics-label="facebook_group" data-analytics-position={placement}>
        <FacebookIcon />
        Facebook group
      </a>
    </div>
  )
}
