export const navbarStyles = {
    drawer: {
       width: 320,
       flexShrink: 0,
       '& .MuiDrawer-paper':{
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: '#EFEFEF',
       },
       '& .Mui-selected': {
            color: 'red',
       },
    },
    
    icons: {
        color: '#EFEFEF!important',
        marginLeft: '20px',
    },

    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};