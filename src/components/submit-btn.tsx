"use client"
import { useFormState } from 'react-dom'

const SubmitBtn = () => {
    //const {pending} = useFormState()
  return (
    <button
     type='submit'
     // disabled={pending}
     className='bg-zinc-900 disabled:bg-zinc-500
     transition text-white rounded py-2 px-3'
    >Add Post</button>
  )
}

export default SubmitBtn