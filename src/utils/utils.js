function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
}

const If = (condition, cssTrue, cssFalse = "") => condition ? cssTrue : cssFalse

export {toHoursAndMinutes, If}
