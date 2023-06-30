const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
}

const If = (condition, cssTrue, cssFalse = "") => condition ? cssTrue : cssFalse

const stringClean = (string) => string.replace(/_/g, " ")

export {toHoursAndMinutes, If, stringClean}
