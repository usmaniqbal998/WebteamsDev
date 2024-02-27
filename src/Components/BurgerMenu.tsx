import { Sheet, SheetTrigger } from '@/Components/ui/sheet'

export const BurgerMenu = (props: { className?: string }) => {
  return (
    <div className={`${props.className}`}>
      <Sheet>
        <SheetTrigger>
          <div className='space-y-1'>
            <div className='h-1 w-4 bg-white'></div>
            <div className='h-1 w-4 bg-white'></div>
          </div>
        </SheetTrigger>
      </Sheet>
    </div>
  )
}
