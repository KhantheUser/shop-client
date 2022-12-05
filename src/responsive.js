import {css} from 'styled-components'

export const Mobile = (props)=>{
return css`
@media screen and (max-width: 380px){
        ${props}
        
    }

`
}

// export const Mobile = (props)=>{
//     return css`
//     @media screen and (max-width: 380px){
//             ${props}
            
//         }
//     `
//     }