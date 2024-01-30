
export const useAIContentPageTheme = () => {

    return {
        Box: {
            minHeight: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            my: 4,
            gap: 3,
        },

        Typography: {
            mb: 2,
            fontWeight: 'bold',
            color: 'primary.secondary'
        },

        Paper: {
            p: 3,
            width: '100%',
            bgcolor: 'background.level2'
        }


    }

}