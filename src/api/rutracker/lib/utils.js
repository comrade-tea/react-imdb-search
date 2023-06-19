import windows1251 from "windows-1251";

const decodeWindows1251 = (string) =>
    string === undefined
        ? undefined
        : windows1251.decode(string.toString("binary"), {mode: "html"})

const formatSize = (sizeInBytes) => {
    const sizeInMegabytes = sizeInBytes / (1000 * 1000 * 1000);
    return `${sizeInMegabytes.toFixed(2)} GB`;
}

export {decodeWindows1251, formatSize}
