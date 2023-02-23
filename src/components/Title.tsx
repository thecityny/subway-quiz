import React from "react";

type TitleProps = {
    title: string;
    subtitle: string;
}

const Title: React.FC<TitleProps> = ({title, subtitle}) => {
    return(
    <>
        <h1 className="title">{title}</h1>
        <p className="subtitle mb-6">
            {subtitle}
        </p>    
    </>

 )
}

export default Title