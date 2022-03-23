const DarkModeReducer = (stase, action) => {
    switch (action.type) {
        case "LIGHT": {
            return {
                darkMode: false,
            }
        };
        case "DARK": {
            return {
                darkMode: true,
            }
        };
        case "TOGGLE": {
            return {
                darkMode: !stase.darkMode,
            }
        };
        default:
            return stase;
    }
};

export default DarkModeReducer;