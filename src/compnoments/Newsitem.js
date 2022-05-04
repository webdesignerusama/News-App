import React from "react";

const Newsitem =(props)=> {
  
    let { title, description, imgUrl ,newsUrl, author,date,source } = props;
    return ( 
      <div className='my-3'>
       
        <div className="card" >
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'}}>
        <span className=" badge rounded-pill bg-danger" >
                   {source}
            </span>
            </div>
          <img src={!imgUrl?'https://cdn.mos.cms.futurecdn.net/R6B3mLDNuiAerSpArXjvKE-1200-80.jpg':imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} 
            </h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()} </small></p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark ">
              Read More
            </a>
          </div>
        </div>
      </div>
      
    );
  
}

export default Newsitem;
