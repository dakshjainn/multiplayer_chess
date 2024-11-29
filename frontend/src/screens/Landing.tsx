export const Landing = () => {
    return <div>
        <div className="mt-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={"/chessboard.jpg"} alt="no_img" 
                    className="max-w-96"/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Welcome to Chess</h1>
                    <p className="text-lg mt-2">Play chess online on the #3 Site!</p>
                    <div className="mt-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Play Online</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
} 