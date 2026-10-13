import { site } from '../data.js'

export default function Logo({ withMark = false }) {
  return (
    <span className="logo">
      <span className="logo-word">
        <span className="logo-line">
          <span className="logo-box" aria-hidden="true" />
          {site.firstName}
        </span>
        <span className="logo-line">{site.lastName}</span>
      </span>
      {withMark && (
        <>
          <span className="logo-slash" aria-hidden="true">/</span>
          <span className="logo-box logo-box-lg" aria-hidden="true" />
        </>
      )}
    </span>
  )
}
