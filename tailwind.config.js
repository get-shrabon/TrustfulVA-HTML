module.exports = {
    content: ["./*.html", "./services/*.html"],
    theme: {
        extend: {
            colors: {
                'primary': '#2f80ed',
                'accent': '#27ae60',
                'dark': '#333333',
                'body': '#4f4f4f',
                'light': '#f8f9fb',
            }
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
        darkTheme: "dark",
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    },
};