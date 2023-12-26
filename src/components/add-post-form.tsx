import { revalidatePath } from 'next/cache'
import SubmitBtn from './submit-btn'

const AddPostForm = () => {
    const addPost = async (formData: FormData) => {
        "use server"
    // await prisma.post.create({
    //     data: {
    //         title: FormData.get('title') as string,
    //         body: FormData.get('body') as string,
    //     }
    // })
    console.log("Hello")
    revalidatePath("/posts")
    }

  return (
   <form
   action={addPost}
   className='flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2'>
    <input
      type='text'
      name='title'
      placeholder='Title'
      className='border rounded h-10 px-3'
      required
     />
    <textarea
      name="body"
      placeholder='Body'
      className='border rounded p-3'
      rows={5}
      required
    />
    <SubmitBtn />
   </form>
  )
}

export default AddPostForm