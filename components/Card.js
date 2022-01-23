export default function Card(){
    return (
        <div className='w-80 p-4 pb-10 rounded-2xl bg-white grid gap-y-6'>
            <aside className="w-72 h-72 bg-darkBlue rounded-xl"></aside>
            <article className='grid gap-y-4 text-center'>
                <h1 className='font-bold text-xl justify-self-center w-64'>
                    Improve your front-end skills by building projects
                </h1>
                <p className='text-lightGray justify-self-center w-64'>
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </article>
        </div>
    )
}