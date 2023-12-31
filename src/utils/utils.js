import notfoundSrc from "@/assets/notfound.png"

const toHoursAndMinutes = (totalMinutes) => {
   const hours = Math.floor(totalMinutes / 60);
   const minutes = totalMinutes % 60;

   return {hours, minutes};
}

const If = (condition, cssTrue, cssFalse = "") => condition ? cssTrue : cssFalse

const stringClean = (string) => string.replace(/_/g, " ")

const getUrlQueries = (searchParams) => {
   const params = [];
   for (const entry of searchParams.entries()) {
      params.push(entry)
   }

   return params
}

export {
   toHoursAndMinutes,
   If,
   stringClean,
   notfoundSrc,
   getUrlQueries
}
