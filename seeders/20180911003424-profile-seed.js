const ssnUtils = require("../Utils/hash");

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "profiles",
      [
        {
          first_name: "John",
          last_name: "Doe",
          age: 21,
          interest: "coding",
          ssn: ssnUtils.hashSSN("ssn"),
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAMFBMVEXk5ueutLfp6uu1u72rsbTZ3N3Bxsi8wcTIzM7S1de4vcDW2dvd4OHg4+TLz9Gxt7ogL5EiAAACkUlEQVRoge2awZKDIAxAISAoAv7/365ax267ColN7OwM77LHt5FAIKlSjUaj0Wg0Go1GYwYA7lfGoXfee5fHdJ8dRqftjNbrH5Nvcg/T6nxite/E1TCaV+tDbZ20uD/QrupplAw6hRPvou7lvHE61S5mJxVzKmklzRWvlBkK67ubM78ZzvL51RzZxRHj1TpwhwwB5dV2YBZ3uIC1nni92IDZQ0au8EJgFaNSeguZNbGLZ+WbuGdMbMKXZv3WkClinfjEnuK1HZtYoTfTKuY7sJMhiflqVK0Qv+H5xKTcYhSTdhNnhfpaxN9bY8KJOcN48/rWPiaeXCOXF3nR28V8ZzX+4rNg+LyIu/yvgFlv9Y4gZixOpG/Ne80E9E62mVWsBnTIvF4FXwpYqREXsmV/LoJHvRZZU3oDkV+sd+qdru7lfb7s1JbZsh6WvynvKWsYq8MbY8nrxbRquYucBS3ZX1uYS/OR2uoo3UYF5f6o7TTc0TgGlcPTba31ov3TV9LgfDDGBN/z3bBQwGMgAffNJWZPiuOQ15GEd67PQ5eSktbHwYXJ2m0isa2xtVPwuVNCdojZ68O9tP0DOvT8tQmiex+BHMqXDOeLG1IuhPpH7pjOEug82rqpA8PGJmsfbvOhGuIV7UP90QxsXttL2lXtrpZniIgpRMmsr5UOYh/xOOgrXtR1tma+8JD6YHVf1MQciyzW1UxaaD4vzczppZiJba062KL12fY9YEIdJbTeEgprMB+b1FrCmhGvSOzTn2iuDqMEPvRK/WPLeKutAqmA6217KW9tlfHtLDLlEklqTBMpigW9xfSSODx2ceEQkcvphUIvijZ7oFJqCh39VouNwqwieSPIVNjJIMq5t9FoNP4FP3hIHLjEHp1bAAAAAElFTkSuQmCC"
        },
        {
          first_name: "John",
          last_name: "Doe",
          age: 21,
          interest: "coding",
          ssn: ssnUtils.hashSSN("ssn"),
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAMFBMVEXk5ueutLfp6uu1u72rsbTZ3N3Bxsi8wcTIzM7S1de4vcDW2dvd4OHg4+TLz9Gxt7ogL5EiAAACkUlEQVRoge2awZKDIAxAISAoAv7/365ax267ColN7OwM77LHt5FAIKlSjUaj0Wg0Go1GYwYA7lfGoXfee5fHdJ8dRqftjNbrH5Nvcg/T6nxite/E1TCaV+tDbZ20uD/QrupplAw6hRPvou7lvHE61S5mJxVzKmklzRWvlBkK67ubM78ZzvL51RzZxRHj1TpwhwwB5dV2YBZ3uIC1nni92IDZQ0au8EJgFaNSeguZNbGLZ+WbuGdMbMKXZv3WkClinfjEnuK1HZtYoTfTKuY7sJMhiflqVK0Qv+H5xKTcYhSTdhNnhfpaxN9bY8KJOcN48/rWPiaeXCOXF3nR28V8ZzX+4rNg+LyIu/yvgFlv9Y4gZixOpG/Ne80E9E62mVWsBnTIvF4FXwpYqREXsmV/LoJHvRZZU3oDkV+sd+qdru7lfb7s1JbZsh6WvynvKWsYq8MbY8nrxbRquYucBS3ZX1uYS/OR2uoo3UYF5f6o7TTc0TgGlcPTba31ov3TV9LgfDDGBN/z3bBQwGMgAffNJWZPiuOQ15GEd67PQ5eSktbHwYXJ2m0isa2xtVPwuVNCdojZ68O9tP0DOvT8tQmiex+BHMqXDOeLG1IuhPpH7pjOEug82rqpA8PGJmsfbvOhGuIV7UP90QxsXttL2lXtrpZniIgpRMmsr5UOYh/xOOgrXtR1tma+8JD6YHVf1MQciyzW1UxaaD4vzczppZiJba062KL12fY9YEIdJbTeEgprMB+b1FrCmhGvSOzTn2iuDqMEPvRK/WPLeKutAqmA6217KW9tlfHtLDLlEklqTBMpigW9xfSSODx2ceEQkcvphUIvijZ7oFJqCh39VouNwqwieSPIVNjJIMq5t9FoNP4FP3hIHLjEHp1bAAAAAElFTkSuQmCC"
        },
        {
          first_name: "John",
          last_name: "Doe",
          age: 21,
          interest: "coding",
          ssn: ssnUtils.hashSSN("ssn"),
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAMFBMVEXk5ueutLfp6uu1u72rsbTZ3N3Bxsi8wcTIzM7S1de4vcDW2dvd4OHg4+TLz9Gxt7ogL5EiAAACkUlEQVRoge2awZKDIAxAISAoAv7/365ax267ColN7OwM77LHt5FAIKlSjUaj0Wg0Go1GYwYA7lfGoXfee5fHdJ8dRqftjNbrH5Nvcg/T6nxite/E1TCaV+tDbZ20uD/QrupplAw6hRPvou7lvHE61S5mJxVzKmklzRWvlBkK67ubM78ZzvL51RzZxRHj1TpwhwwB5dV2YBZ3uIC1nni92IDZQ0au8EJgFaNSeguZNbGLZ+WbuGdMbMKXZv3WkClinfjEnuK1HZtYoTfTKuY7sJMhiflqVK0Qv+H5xKTcYhSTdhNnhfpaxN9bY8KJOcN48/rWPiaeXCOXF3nR28V8ZzX+4rNg+LyIu/yvgFlv9Y4gZixOpG/Ne80E9E62mVWsBnTIvF4FXwpYqREXsmV/LoJHvRZZU3oDkV+sd+qdru7lfb7s1JbZsh6WvynvKWsYq8MbY8nrxbRquYucBS3ZX1uYS/OR2uoo3UYF5f6o7TTc0TgGlcPTba31ov3TV9LgfDDGBN/z3bBQwGMgAffNJWZPiuOQ15GEd67PQ5eSktbHwYXJ2m0isa2xtVPwuVNCdojZ68O9tP0DOvT8tQmiex+BHMqXDOeLG1IuhPpH7pjOEug82rqpA8PGJmsfbvOhGuIV7UP90QxsXttL2lXtrpZniIgpRMmsr5UOYh/xOOgrXtR1tma+8JD6YHVf1MQciyzW1UxaaD4vzczppZiJba062KL12fY9YEIdJbTeEgprMB+b1FrCmhGvSOzTn2iuDqMEPvRK/WPLeKutAqmA6217KW9tlfHtLDLlEklqTBMpigW9xfSSODx2ceEQkcvphUIvijZ7oFJqCh39VouNwqwieSPIVNjJIMq5t9FoNP4FP3hIHLjEHp1bAAAAAElFTkSuQmCC"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
