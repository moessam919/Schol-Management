"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TableSearch = () => {
    const router = useRouter();

    const handleSubmet = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const valeu = (e.currentTarget[0] as HTMLInputElement).value;
        const params = new URLSearchParams(window.location.search);
        params.set("search", valeu);
        router.push(`${window.location.pathname}?${params}`);
    };

    return (
        <form
            onSubmit={handleSubmet}
            className="w-full md:w-auto flex items-center gap-2 text-xs rounded-md ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14} />
            <input
                type="text"
                placeholder="Search..."
                className="w-[200px] p-2 bg-transparent outline-none"
            />
        </form>
    );
};

export default TableSearch;
