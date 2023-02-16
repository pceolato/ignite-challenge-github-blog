import { useBlog } from "../../../hooks/useBlog"

export function Form() {
    const { totalPosts } = useBlog()

    return (
        <div className="flex flex-col gap-3 mt-[72px]">
            <div className="flex justify-between items-center">
                <h3 className="text-base-subtitle bold text-lg">Publicações</h3>
                <span className="text-base-span text-sm">{totalPosts} publicações</span>
            </div>
            <input 
                type="text"
                placeholder="Buscar conteúdo"
                className="bg-base-input py-3 px-4 border border-base-border rounded-md text-base-text placeholder:text-base-label outline-none focus:border-blue"
            />
        </div>
    )
}