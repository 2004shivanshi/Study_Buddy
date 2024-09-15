import Link from "next/link"
import { Button } from "../ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "../ui/sheet"
import { Menu } from "lucide-react"

export function Mobilenav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button  className="bg-gray-950"><Menu size={24}/></Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-12 gap-1 bg-gray-950/20 px-2 backdrop-blur-lg">
    
     <SheetClose asChild>
        <Link href='/' className="rounded-md p-1.5 hover:bg-slate-900">Home</Link>
     </SheetClose>

     <SheetClose asChild>
        <Link href='/' className="rounded-md p-1.5 hover:bg-slate-900">Project</Link>
     </SheetClose>

     <SheetClose asChild>
     <Link href='/Select' className="rounded-md p-1.5 hover:bg-slate-900">Resume</Link>
     </SheetClose>

     <SheetClose asChild>
        <Link href='/' className="rounded-md p-1.5 hover:bg-slate-900">Meeting</Link>
     </SheetClose>
     
    </SheetContent>
    </Sheet>
  )
}
