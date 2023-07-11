const YoutubeForm = () => {
    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <form className="flex flex-col justify-center align-middle">
                <div>
                    <label htmlFor='username' className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type="text" id="username" name="username" className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>

                <div>
                    <label htmlFor='email' className="block text-gray text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>

                <div>
                    <label htmlFor='channel' className="text-gray text-sm font-bold mb-2">Channel</label>
                    <input type="text" id="channel" name="channel" className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm