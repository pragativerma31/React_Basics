export default function Spinner(){
    return (
        <div class="w-full h-screen flex justify-center items-center">
            <div class="flex flex-col items-center">
                <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4 relative">
                    <div class="absolute inset-0 rounded-full border-4 border-t-blue-500 border-transparent animate-spin"></div>
                </div>
                <p class="text-xl text-gray-600">Loading...</p>
            </div>
        </div>

    )
}