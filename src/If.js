export const If = (props) => {
    if (props.condition) {
        // console.log('from if ')
        return props.children
    } else {
        return null;
    }
}   
   
export const Else = (props) => {
    if (props.condition || Object.keys(props.condition2).length===0) {
        // console.log('from else')
        return null;
    } else {
        // console.log('from else else')
        return props.children
    }
}   

// export const IfEmpty = (props) => {
//     if (Object.keys(props.condition).length==0){
//         console.log('from if empty' , props.condition)
//         return props.children
//     } else {
//         console.log(props.condition=={},'...................')
//         console.log('from else if empty' , props.condition)
//         return null;
//     }
// }   
