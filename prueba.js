
const whatDayIsMonday = (starDate1, endDate1) => {
    let starDate = new Date(starDate1);
    let endDate = new Date(endDate1);
    arrayDays = [];

    while (endDate.getTime() >= starDate.getTime()) {

        let day = starDate.getFullYear() + '-' + (starDate.getMonth() + 1) + '-' + starDate.getDate();
        let date = `${day} 23:37:22`;
        let days = [
            'domingo',
            'lunes',
            'martes',
            'miércoles',
            'jueves',
            'viernes',
            'sábado',
        ];
        const numberDay = new Date(date).getDay();
        const nameday = days[numberDay];
        if (nameday == 'lunes') {
            arrayDays.push(day);
        }
        starDate.setDate(starDate.getDate() + 1);
    }
    console.log(arrayDays);
}


whatDayIsMonday('2022-3-1', '2022-3-31');