import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import Input from '@/components/ui/input'
import SlideUp from '@/components/animations/slideUp'
import Link from 'next/link'

const SubscribeTwo = () => {
        const handleClick = () => {
            logEvent(analyticsEvents.BUTTON_CLICK, {
                button_name: "Schedule a Call",
                page_location: window.location.href
            });
        };
    return (
        <section className='lg:py-15 py-9'>
            <SlideUp>
                <div className='max-w-[1350px] mx-auto px-[15px] relative overflow-x-hidden'>
                    <div className='rounded-[30px] bg-gray lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center'>
                        <div className='pb-6 max-w-[750px] w-full relative'>
                            <Title size={"5xl"} className={"max-w-[707px]"}>Ready to Automate Your Business Processes?</Title>
                            <p>Let's discuss how AI agents can streamline your operations. Book a free 30-minute consultation to explore the possibilities.</p>
                            <div className='absolute -right-20 top-1/2 -translate-y-1/2 lg:block hidden'>
                                <Image src={"/images/shapes/business-consultant-cta-arrow.png"} width={188} height={39} className='dark:brightness-100 dark:invert' alt='arrow' />
                            </div>
                        </div>
                        <div className='relative flex items-center justify-between'>
                            <Dialog>
                                <Link href="https://calendly.com/lunnoalabs/30min">
                                    <Button size="lg" className="h-[64px] px-8" onClick={handleClick}>
                                        Schedule a Call
                                    </Button>
                                    </Link>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogTitle>Book Your Free Consultation</DialogTitle>
                                    <div className="grid gap-4 py-4">
                                        <Input type="text" placeholder="Your Name" />
                                        <Input type="email" placeholder="Your Email" />
                                        <Input type="text" placeholder="Company (optional)" />
                                        <textarea 
                                            className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Brief description of your automation needs"
                                        />
                                    </div>
                                    <DialogClose asChild>
                                        <Button type="submit">Submit Request</Button>
                                    </DialogClose>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </section>
    )
}

export default SubscribeTwo


const Form = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <span className="group rounded-full px-[38px] py-[18px] border-2 border-primary font-bold max-h-12.5 bg-primary text-secondary-foreground dark:text-muted-foreground flex justify-center items-center gap-2.5 transition-all duration-500 hover:bg-transparent hover:text-primary-foreground"> Schedule a Meeting</span>
            </DialogTrigger>
            <DialogContent className="max-w-[700px] p-0">
                <div className='flex items-center justify-between py-6 border-b border-b-[#dee2e6]'>
                    <DialogTitle className="pl-4"><h6 className='text-2xl font-bold text-muted-foreground'>Schedule a Meeting</h6></DialogTitle>
                    <DialogClose></DialogClose>
                </div>
                <form className='p-4 pt-0'>
                    <div className='flex md:flex-row flex-col justify-between gap-5'>
                        <Input type={"text"} placeholder={"Your Name"} className={"bg-primary font-medium placeholder:text-white text-white w-full"} />
                        <Input type={"text"} placeholder={"Your SurName"} className={"bg-primary font-medium placeholder:text-white text-white w-full"} />
                    </div>
                    <div className='flex md:flex-row flex-col justify-between gap-5 mt-4'>
                        <Input type={"text"} placeholder={"Your Country"} className={"bg-primary font-medium placeholder:text-white text-white w-full"} />
                        <Input type={"text"} placeholder={"Your Number"} className={"bg-primary font-medium placeholder:text-white text-white w-full"} />
                    </div>
                    <div className='flex md:flex-row flex-col justify-between gap-5 mt-4'>
                        <Input type={"email"} placeholder={"Your Country"} className={"bg-primary font-medium placeholder:text-white text-white w-full"} />
                        <Input type={"time"} placeholder={"Your Number"} className={"bg-primary font-medium placeholder:text-white text-white w-full"} />
                    </div>
                    <div className='mt-5 flex items-start'>
                        <input type='checkbox' id='checkbox' className='w-4 h-4' />
                        <label htmlFor="checkbox" className='pl-3 -mt-2 w-[94%] font-medium'>By using this form you agree with the storage and handling of your data policies of NextPro Marketing.</label>
                    </div>
                    <div className='mt-8 flex justify-end pb-8'>
                        <Button>Send request</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}