const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        const oldestAge = getAge(oldest)
        const currentAge = getAge(current);

        return oldestAge > currentAge ? oldest : current;
    })

    function getAge(person){
        if(!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear();
        }

        return person.yearOfDeath - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
