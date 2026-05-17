'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, Designed & Developed by `}</span>
        <span className='font-medium text-primary'>Nada Tarek</span>
        <span className='text-secondary text-sm ml-1'>(Full Stack .NET Developer)</span>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <span className='text-secondary text-sm'>Building modern & robust .NET solutions</span>
        </div>
      )}
    </div>
  )
}

export default FooterContent
