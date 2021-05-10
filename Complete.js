import React from 'react'

function Complete({todo})
{
    return(
        <div>
            <ul>
                {
                    todo.filter(t => {
                        console.log(t);
                        if(t.completed === true)
                        {
                            return <li>{t.text}</li>
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Complete