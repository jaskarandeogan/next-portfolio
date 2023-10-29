import classNames from 'classnames'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import LinkButton from './shared/LinkButton'
import emailjs from '@emailjs/browser';
import { RiGhostSmileFill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

const Contact = ({
    isChatOpen,
    setIsChatOpen
}: {
    isChatOpen: boolean,
    setIsChatOpen: Dispatch<SetStateAction<boolean>>
}) => {

    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const service : string = process.env.NEXT_PUBLIC_ServiceId || '';
    const template : string = process.env.NEXT_PUBLIC_TemplateId || '';
    const user : string = process.env.NEXT_PUBLIC_UserId || '';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name: nameRef.current?.value,
            notes: messageRef.current?.value
        };

        console.log(templateParams)

        emailjs.send(service, template, templateParams, user)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setIsFormSubmitted(true)
    }

    useEffect(() => {
        if (isChatOpen) {
            setTimeout(() => {
                nameRef.current?.focus()
            }, 500);
        }
    }
        , [isChatOpen])

    useEffect(() => {
        if (isFormSubmitted) {
            setTimeout(() => {
                setIsChatOpen(false)
            }, 2500);
        }
    }, [isFormSubmitted, setIsChatOpen])




    const Form = () => {
        return <form className={classNames('flex-1 p-8 ', 'animate-show-chat-up')} onSubmit={handleSubmit}>
            <div className="mb-4" >
                <label htmlFor="name" className="block text-primary-0 text-sm font-bold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border bg-black border-grey-4 rounded-sm focus:outline-none focus:border-primary-0 p-1"
                    placeholder="Your Name"
                    ref={nameRef}
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-primary-0 text-sm font-bold mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full border bg-black border-grey-4 rounded-sm h-32 resize-none focus:outline-none focus:border-primary-0 p-1"
                    placeholder="Your Message"
                    ref={messageRef}
                    required
                ></textarea>
            </div>
            <LinkButton classnames='px-0'
                rightIcon={<FiArrowUpRight />}
                type='submit'
            >
                Send
            </LinkButton>
        </form>
    }

    const ThanksMessage = () => {
        return <div className='flex-1 flex flex-col gap-2 p-8 animate-show-chat-up'>
            <h1 className='font-bold text-xl text-primary-0'>I&apos;m so glad you had a chance to pass by! </h1>
            <div className='flex gap-2 items-center'>
                <p className='text-grey-8'>Your interest means a lot to me.</p>
                < RiGhostSmileFill className='text-primary-0 h-8 w-8' />
            </div>
        </div>
    }

    return (
        <section className={classNames(' overflow-hidden w-auto md:w-[400px] border border-grey-4 flex inset-0 bg-opacity-60 bg-grey-2 backdrop-blur-3xl rounded-md transition-all duration-500', isChatOpen && 'transition-all')}>
            < AiOutlineClose className='absolute top-2 right-2 text-grey-5 h-6 w-6 font-bold rounded-sm hover:text-grey-8 transition-all hover:bg-grey-5-32 p-1' onClick={
                () => {
                    setIsChatOpen(!isChatOpen)
                }
            } />
            {
                !isFormSubmitted && <Form />
            }
            {
                isFormSubmitted && <ThanksMessage />
            }
        </section>
    )
}

export default Contact