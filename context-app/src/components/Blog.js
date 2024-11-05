

export default function Blog({title , author , date , tags , content ,category ,id}){
    return(
        <div className="mt-[40px]">
            <h3 className="font-bold text-[20px] ">{title}</h3>
            <p className='text-[10px] mt-[4px]'>By <span className='italic'>{author}</span> on <span className='underline font-bold'>{category}</span></p>
            <p className='text-[10px] mt-[4px]'>Posted on {date} </p>
            <p className='text-[13px] mt-[14px]'>{content}</p>
            <div className='flex gap-x-3'>
                {
                    tags.map((tag) => {
                        return <span className="text-blue-700 underline font-bold text-xs mt-[5px]">#{tag}  </span>
                    })
                }
            </div>
        </div>
    )
}