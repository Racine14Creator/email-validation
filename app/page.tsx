import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col justify-center gap-10 items-center'>
      <div className='w-full pt-10 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl'>Email Next YouTube</h1>
        <p className='text-2xl'>Votre platforme pour emails</p>
        <Link
          href='/dashboard'
          className='bg-white text-stone-800 px-10 py-2 rounded-md'
        >
          Go to dashboard
        </Link>
      </div>

      <div className='bg-white p-10 flex flex-row gap-10  justify-between items-center'>
        <div className='w-1/2 font-light text-stone-900'>
          <h3 className='text-4xl font-bold'>Email Next YouTube</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            placeat sed, veniam illum aliquid eum itaque. Nulla laboriosam eum
            laudantium, quis minus voluptatibus ducimus dolorem, hic, autem
            reiciendis provident cum!
          </p>
        </div>
        <div className='w-1/2 '>
          <form
            action=''
            method='post'
            className='flex flex-row w-full items-center gap-4'
          >
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email'
              className='w-2/3 placeholder:text-stone-800 text-stone-900 outline-none px-10 py-5 rounded-2xl border border-stone-900'
            />
            <button className='w-1/3 text-white bg-stone-800 rounded-2xl px-10 py-5'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
