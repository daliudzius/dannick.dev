import Link from 'next/link'
import PropTypes from 'prop-types'

export default function CustomLink({ children, as, href, ...otherProps }) {
   // Return a <Link> for internal links and <a> for external links
   return href.startsWith('/') || href === '' || href.startsWith('#') ? (
      <Link as={as} href={href}>
         <a {...otherProps}>{children}</a>
      </Link>
   ) : (
      <a href={href} target='_blank' rel='noopener noreferrer' {...otherProps}>
         {children}
      </a>
   )
}

CustomLink.propTypes = {
   children: PropTypes.node.isRequired,
   href: PropTypes.string.isRequired,
}
