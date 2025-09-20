import { ChevronDown } from 'lucide-react'
import { Tooltip as TooltipHero, type TooltipProps } from '@heroui/tooltip'
import Button from '@/components/shared/button'

interface Props extends TooltipProps {
  children: React.ReactNode
  buttonText: string
}

const Tooltip = ({ children, buttonText, ...props }: Props) => {
  return (
    <TooltipHero
      {...props}
      closeDelay={0}
      offset={-2}
      content={children}
      classNames={{
        content: 'bg-black/60 backdrop-blur-sm rounded-small pb-2',
      }}
    >
      <Button className="w-max min-w-max bg-transparent text-white" endContent={<ChevronDown size={16} />}>
        {buttonText}
      </Button>
    </TooltipHero>
  )
}

export default Tooltip
