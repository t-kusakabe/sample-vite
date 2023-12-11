import { default as MuiButton } from '@mui/joy/Button'

export function Button(props: {children: React.ReactNode}) {
  return <MuiButton variant="solid">{props.children}</MuiButton>
}
