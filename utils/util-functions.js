const navigateTo = (props, screenName, paramsObj = {}) => {
    props.navigation.navigate(screenName, paramsObj);
};

export { navigateTo };
