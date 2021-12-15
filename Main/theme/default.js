import SWATCHES from "./SWATCHES";

const primary = SWATCHES.denim;
const secondary = SWATCHES.flushOrange;
const accent = SWATCHES.gold;
const dark = SWATCHES.cinder;
const light = SWATCHES.ecruWhite;

const theme = {
    default: {
        background: dark,
        text: light,
    },
    header: {
        text: light,
        background: primary,
    }
}

export default theme;