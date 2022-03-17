import React from 'react';
import cl from './MyModule.module.css'
const MyModule = ({children, visible, setVisible}) => {
    const basicClass = [cl.myModule]
    if(visible){
        basicClass.push(cl.active)
    }
    return (
        <div className={basicClass.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModuleContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModule;