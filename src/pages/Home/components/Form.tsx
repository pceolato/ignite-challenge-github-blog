import { useBlog } from "../../../hooks/useBlog"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

const schema = z.object({
    contentPost: z.string()
  }).required();

type FormData = z.infer<typeof schema>;

export function Form() {
    const { totalPosts, searchPost } = useBlog()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    function handleSearchPost(data: FormData) {
        searchPost(data.contentPost)

        reset()
    }


    return (
        <form
            onSubmit={handleSubmit(handleSearchPost)} 
            className="flex flex-col gap-3 mt-[72px]"
        >
            <div className="flex justify-between items-center">
                <h3 className="text-base-subtitle bold text-lg">Publicações</h3>
                <span className="text-base-span text-sm">{totalPosts} publicações</span>
            </div>
            <input
                type="text"
                autoComplete="off"
                placeholder="Buscar conteúdo"
                className="bg-base-input py-3 px-4 border border-base-border rounded-md text-base-text placeholder:text-base-label outline-none focus:border-blue"
                {...register('contentPost')}
            />
            <p className="text-red-500 transition-all duration-500">{errors.contentPost?.message}</p>
        </form>
    )
}