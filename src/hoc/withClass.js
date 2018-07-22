import React from 'react';

// returning stateless component
// const withClass = (WrappedComponent, className) => {
    
//     return (props) => (        
//         <div className={className} displayName="teste">                    
//             <WrappedComponent {...props}/>
//         </div>
//     );
// }

//returning statefull component
const withClass = (WrappedComponent, className) => {
    return class extends React.Component{
        render(){
            return (        
                <div className={className} displayName="teste">                    
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }
}

export default withClass;