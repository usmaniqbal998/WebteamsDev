import React from 'react'

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  a: 'a',
}

const Typography = ({
  variant,
  children,
  align = 'left',
  color = 'white',
  className,
  ...rest
}) => {
  const Component = variant ? variantsMapping[variant] : 'p'

  return (
    <Component
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`text-${color} text-${align} ${className || ''}`}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Typography
