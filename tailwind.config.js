/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    variants: {
        accessibility: ['responsive', 'group-hover', 'focus-within', 'focus'],
        alignContent: ['responsive', 'group-hover'],
        alignItems: ['responsive', 'group-hover'],
        alignSelf: ['responsive', 'group-hover'],
        animation: ['responsive', 'group-hover'],
        appearance: ['responsive', 'group-hover'],
        backdropBlur: ['responsive', 'group-hover'],
        backdropBrightness: ['responsive', 'group-hover'],
        backdropContrast: ['responsive', 'group-hover'],
        backdropFilter: ['responsive', 'group-hover'],
        backdropGrayscale: ['responsive', 'group-hover'],
        backdropHueRotate: ['responsive', 'group-hover'],
        backdropInvert: ['responsive', 'group-hover'],
        backdropOpacity: ['responsive', 'group-hover'],
        backdropSaturate: ['responsive', 'group-hover'],
        backdropSepia: ['responsive', 'group-hover'],
        backgroundAttachment: ['responsive', 'group-hover'],
        backgroundBlendMode: ['responsive', 'group-hover'],
        backgroundClip: ['responsive', 'group-hover'],
        backgroundColor: ['responsive', 'group-hover', 'dark', 'focus-within', 'hover', 'focus'],
        backgroundImage: ['responsive', 'group-hover'],
        backgroundOpacity: ['responsive', 'group-hover', 'dark', 'focus-within', 'hover', 'focus'],
        backgroundPosition: ['responsive', 'group-hover'],
        backgroundRepeat: ['responsive', 'group-hover'],
        backgroundSize: ['responsive', 'group-hover'],
        backgroundOrigin: ['responsive', 'group-hover'],
        blur: ['responsive', 'group-hover'],
        borderCollapse: ['responsive', 'group-hover'],
        borderColor: ['responsive', 'group-hover', 'dark', 'focus-within', 'hover', 'focus'],
        borderOpacity: ['responsive', 'group-hover', 'dark', 'focus-within', 'hover', 'focus'],
        borderRadius: ['responsive', 'group-hover'],
        borderStyle: ['responsive', 'group-hover'],
        borderWidth: ['responsive', 'group-hover'],
        boxDecorationBreak: ['responsive', 'group-hover'],
        boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        boxSizing: ['responsive', 'group-hover'],
        brightness: ['responsive', 'group-hover'],
        clear: ['responsive', 'group-hover'],
        container: ['responsive', 'group-hover'],
        contrast: ['responsive', 'group-hover'],
        cursor: ['responsive', 'group-hover'],
        display: ['responsive', 'group-hover'],
        divideColor: ['responsive', 'group-hover', 'dark'],
        divideOpacity: ['responsive', 'group-hover', 'dark'],
        divideStyle: ['responsive', 'group-hover'],
        divideWidth: ['responsive', 'group-hover'],
        dropShadow: ['responsive', 'group-hover'],
        fill: ['responsive', 'group-hover'],
        filter: ['responsive', 'group-hover'],
        flex: ['responsive', 'group-hover'],
        flexDirection: ['responsive', 'group-hover'],
        flexGrow: ['responsive', 'group-hover'],
        flexShrink: ['responsive', 'group-hover'],
        flexWrap: ['responsive', 'group-hover'],
        float: ['responsive', 'group-hover'],
        fontFamily: ['responsive', 'group-hover'],
        fontSize: ['responsive', 'group-hover'],
        fontSmoothing: ['responsive', 'group-hover'],
        fontStyle: ['responsive', 'group-hover'],
        fontVariantNumeric: ['responsive', 'group-hover'],
        fontWeight: ['responsive', 'group-hover'],
        gap: ['responsive', 'group-hover'],
        gradientColorStops: ['responsive', 'group-hover', 'dark', 'hover', 'focus'],
        grayscale: ['responsive', 'group-hover'],
        gridAutoColumns: ['responsive', 'group-hover'],
        gridAutoFlow: ['responsive', 'group-hover'],
        gridAutoRows: ['responsive', 'group-hover'],
        gridColumn: ['responsive', 'group-hover'],
        gridColumnEnd: ['responsive', 'group-hover'],
        gridColumnStart: ['responsive', 'group-hover'],
        gridRow: ['responsive', 'group-hover'],
        gridRowEnd: ['responsive', 'group-hover'],
        gridRowStart: ['responsive', 'group-hover'],
        gridTemplateColumns: ['responsive', 'group-hover'],
        gridTemplateRows: ['responsive', 'group-hover'],
        height: ['responsive', 'group-hover'],
        hueRotate: ['responsive', 'group-hover'],
        inset: ['responsive', 'group-hover'],
        invert: ['responsive', 'group-hover'],
        isolation: ['responsive', 'group-hover'],
        justifyContent: ['responsive', 'group-hover'],
        justifyItems: ['responsive', 'group-hover'],
        justifySelf: ['responsive', 'group-hover'],
        letterSpacing: ['responsive', 'group-hover'],
        lineHeight: ['responsive', 'group-hover'],
        listStylePosition: ['responsive', 'group-hover'],
        listStyleType: ['responsive', 'group-hover'],
        margin: ['responsive', 'group-hover'],
        maxHeight: ['responsive', 'group-hover'],
        maxWidth: ['responsive', 'group-hover'],
        minHeight: ['responsive', 'group-hover'],
        minWidth: ['responsive', 'group-hover'],
        mixBlendMode: ['responsive', 'group-hover'],
        objectFit: ['responsive', 'group-hover'],
        objectPosition: ['responsive', 'group-hover'],
        opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        order: ['responsive', 'group-hover'],
        outline: ['responsive', 'group-hover', 'focus-within', 'focus'],
        overflow: ['responsive', 'group-hover'],
        overscrollBehavior: ['responsive', 'group-hover'],
        padding: ['responsive', 'group-hover'],
        placeContent: ['responsive', 'group-hover'],
        placeItems: ['responsive', 'group-hover'],
        placeSelf: ['responsive', 'group-hover'],
        placeholderColor: ['responsive', 'group-hover', 'dark', 'focus'],
        placeholderOpacity: ['responsive', 'group-hover', 'dark', 'focus'],
        pointerEvents: ['responsive', 'group-hover'],
        position: ['responsive', 'group-hover'],
        resize: ['responsive', 'group-hover'],
        ringColor: ['responsive', 'group-hover', 'dark', 'focus-within', 'focus'],
        ringOffsetColor: ['responsive', 'group-hover', 'dark', 'focus-within', 'focus'],
        ringOffsetWidth: ['responsive', 'group-hover', 'focus-within', 'focus'],
        ringOpacity: ['responsive', 'group-hover', 'dark', 'focus-within', 'focus'],
        ringWidth: ['responsive', 'group-hover', 'focus-within', 'focus'],
        rotate: ['responsive', 'group-hover', 'hover', 'focus'],
        saturate: ['responsive', 'group-hover'],
        scale: ['responsive', 'group-hover', 'hover', 'focus'],
        sepia: ['responsive', 'group-hover'],
        skew: ['responsive', 'group-hover', 'hover', 'focus'],
        space: ['responsive', 'group-hover'],
        stroke: ['responsive', 'group-hover'],
        strokeWidth: ['responsive', 'group-hover'],
        tableLayout: ['responsive', 'group-hover'],
        textAlign: ['responsive', 'group-hover'],
        textColor: ['responsive', 'group-hover', 'dark', 'focus-within', 'hover', 'focus'],
        textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        textOpacity: ['responsive', 'group-hover', 'dark', 'focus-within', 'hover', 'focus'],
        textOverflow: ['responsive', 'group-hover'],
        textTransform: ['responsive', 'group-hover'],
        transform: ['responsive', 'group-hover'],
        transformOrigin: ['responsive', 'group-hover'],
        transitionDelay: ['responsive', 'group-hover'],
        transitionDuration: ['responsive', 'group-hover'],
        transitionProperty: ['responsive', 'group-hover'],
        transitionTimingFunction: ['responsive', 'group-hover'],
        translate: ['responsive', 'group-hover', 'hover', 'focus'],
        userSelect: ['responsive', 'group-hover'],
        verticalAlign: ['responsive', 'group-hover'],
        visibility: ['responsive', 'group-hover'],
        whitespace: ['responsive', 'group-hover'],
        width: ['responsive', 'group-hover'],
        wordBreak: ['responsive', 'group-hover'],
        zIndex: ['responsive', 'group-hover', 'focus-within', 'focus']
    },
}
