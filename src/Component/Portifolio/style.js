import styled from 'styled-components'
export const PortSection = styled.div `
    padding: 70px 0 100px;
    overflow:hidden;
    background-color: #2C1342

`
export const PortTitle = styled.div `
    font-size: 60px;
    font-family: 'Great Vibes', cursive;
    margin-bottom: 30px;
    text-shadow:
    0 1px #808d93,
    -1px 0 #cdd2d5,
    -1px 2px #808d93,
    -2px 1px #cdd2d5,
    -2px 3px #808d93,
    -3px 2px #cdd2d5,
    -3px 4px #808d93,
    -4px 3px #cdd2d5,
    -4px 5px #808d93,
    -5px 4px #cdd2d5,
    -5px 6px #808d93,
    -6px 5px #cdd2d5,
    -6px 7px #808d93,
    -7px 6px #cdd2d5,
    -7px 8px #808d93,
    -8px 7px #cdd2d5;
`
export const Portli =styled.li `
    width: 100px;
    padding: 7px;
    background: ${props => props.active ? '#FA9E19': ''}
`
export const Images =styled.div `
    position: relative;
    z-index: 0;
   
    &:hover > div {
        opacity: 1;
    }
` 
export const Imag =styled.img `
    width: 100%;
    margin-bottom: 15px;
    border: 1px solid #333;
    
` 

export const Over =styled.div `
    position: absolute;
    background-color:rgba(38, 5, 47, 0.6);
    z-index : 8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity:0;
    transition-delay: .6s ease-in-out;
` 
export const Btn =styled.button `
    osition: absolute;
    background: rgba(38, 5, 47, 1);
    display: block;
    color:#fff;
    padding: 10px 20px;
    cursor: pointer;
    &:hover{
        color:#fff;
    }
    
   
    
` 

