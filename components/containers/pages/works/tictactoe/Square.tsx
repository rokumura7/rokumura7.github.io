type SquareProps = {
  value: string
  onClick: () => void
}

const getStyle = (value: string) => {
  const styles = [
    'flex',
    'justify-center',
    'items-center',
    'text-xl',
    'bg-white',
    'border',
    'w-24',
    'h-24',
    'cursor-pointer',
  ]
  if (value === 'O') styles.push('bg-green-500')
  else if (value === 'X') styles.push('bg-red-500')
  return styles.join(' ')
}

const Square = (props: SquareProps) => (
  <div className={getStyle(props.value)} onClick={props.onClick}>
    {props.value}
  </div>
)

export default Square
