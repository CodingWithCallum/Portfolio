export const HeroStyles = {
    Container1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
    },
    Box1: {
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
    },
    Stack1: { 
        alignItems: 'center',
        width: { xs: '100%', sm: '70%' }
    },
    TypoHead: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        fontSize: 'clamp(3rem, 10vw, 3.5rem)',
    },
    TypoDesc:{
        textAlign: 'center',
        color: 'text.secondary',
        width: { sm: '100%', md: '80%' },
    },
    StackFlexGap: { pt: 2, width: {xs: '100%', sm: '350px'}
    },
    TextProps: {htmlInput: {autoComplete: 'off','aria-label': 'Enter your email address',},
    },
}