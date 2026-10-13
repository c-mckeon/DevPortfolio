import { site } from '../data.js'

export default function Logo() {
  return (
    <span className="logo">
      <span className="logo-word">
        <span className="logo-line">{site.firstName}</span>
        <span className="logo-line">{site.lastName}</span>
      </span>
    </span>
  )
}
