const excludedProps = ['as', 'forwardedAs', 'theme', 'ref']

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-theme-css-vars"
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-vite"
    },
    "features": {
        "storyStoreV7": true
    },
    typescript: {
        reactDocgenTypescriptOptions: {
            propFilter: (prop) =>
                (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true) && excludedProps.indexOf(prop.name) < 0,
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true
        }
    }
}