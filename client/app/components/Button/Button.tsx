
type buttonProps = {
    text: string;
}
export default function Button({text}: buttonProps) {
    return (
        <button 
            className="
            bg-[#2b59ff] text-white p-4 px-8 text-xl font-normal rounded-full my-3
            "
        >
            {text}
        </button>
    )
}