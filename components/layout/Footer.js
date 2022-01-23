export default function Footer(){
    return (
        <footer className='flex justify-center items-center absolute bottom-4 z-10 w-full'>
            <p className='text-lightGray text-xs'>
                Challenge by <a href='https://www.frontendmentor.io/?ref=challenge' target='_blank' rel='noreferrer' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Frontend Mentor</a>.
                 Coded by <a href='https://martineauremi.github.io/portfolio/' target='_blank' rel='noreferrer' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Rémi Martineau</a>.
            </p>
        </footer>
    )
}