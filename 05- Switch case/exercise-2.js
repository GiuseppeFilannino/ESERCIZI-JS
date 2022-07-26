// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  



  switch (role) {
    case 'ceo':
      console.log(`the ${role}  salary is 2200`);
      break;
    case 'manager':
      console.log(`the ${role}  salary is 1800`);
      break;
    case 'cto':
      console.log(`the ${role}  salary is 1800`);
      break;
    case 'developer':
      console.log(`the ${role}  salary is 1500`);
      break;
    default:
      console.log(`the ${role} salary is 1000`);
      break;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');