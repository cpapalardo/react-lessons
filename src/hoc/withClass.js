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
    const WithClass = class extends React.Component{
        render(){
            return (        
                <div className={className} displayName="teste">                    
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
                </div>
            );
        }
    };

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref}/>
    }) ;
}

export default withClass;