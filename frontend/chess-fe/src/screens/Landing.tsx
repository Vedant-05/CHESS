import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="pt-16 max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center rounded">
            <img className="max-w-96 rounded" src={"/chessBoard.jpeg"} />
          </div>
          <div className="pt-20">
            <div className="flex justify-center">
              <h1 className="test-4xl font-bold text-white ">
                Play Chess Online on the #2 Site!
              </h1>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                onClick={() => {
                  navigate("/game");
                }}
                className="px-8 py-4 bg-green-500 hover:bg-green-700 text-white font-bold  rounded"
              >
                Play Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
