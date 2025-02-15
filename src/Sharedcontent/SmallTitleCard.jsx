

const SmallTitleCard = ({title,subTitle}) => {
    return (
        <div className="text-center w-96  flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl tracking-[5px]">{title}</h1>
            <p className="text-slate-600 ">
                {subTitle}
            </p>
        </div>
    );
};

export default SmallTitleCard;