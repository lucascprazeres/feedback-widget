import { CloseButton } from '../../CloseButton'

import successImageUrl from '../../../assets/success.svg'

interface Props {
  onGoBack: () => void;
}

export function FeedbackSuccessStep({ onGoBack }: Props) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='flex flex-col items-center py-10 w-[304px]'>
        <img src={successImageUrl} alt="Imagem de uma checkbox" />

        <span className='text-xl mt-8'>Agradeçemos o feedback!</span>

        <button
          onClick={onGoBack}
          className='py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500'
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}