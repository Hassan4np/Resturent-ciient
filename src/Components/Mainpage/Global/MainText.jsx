

const MainText = ({time,text}) => {
    return (
        <div className="text-center w-6/12 lg:w-3/12 mx-auto py-5 ">
            <p className="text-orange-300 border-b-4 font-bold p-2 ">{time}</p>
            <h1 className="text-2xl border-b-4 font-bold p-2">{text}</h1>
        </div>
    );
};
//--From 10am to 11pm--
//ORDER ONLINE
export default MainText;