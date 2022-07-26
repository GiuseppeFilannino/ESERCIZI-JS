// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000



function calculateSalary(role) {

    if (role === 'ceo') {
        const ceoSalary = 2200;
        console.log(`il salario di un ${role} è di: ${ceoSalary}€`);
    }


    else if (role === 'manager') {
        const managerSalary = 1800;
        console.log(`il salario di un ${role} è di:${managerSalary}€`);
    }

    else if (role === 'cto') {
        const ctoSalary = 1800;
        console.log(`il salario di un ${role} è di:${ctoSalary}€`);
    }
    else if (role === 'developer') {
        const developerSalary = 1500;
        console.log(`il salario di un ${role} è di:${developerSalary}€`);
    }
    else if (role === 'default') {
        const defaultSalary = 1000;
        console.log(`il salario di ${role} è di:${defaultSalary}€`);
    }




}

calculateSalary('ceo');
calculateSalary('manager');
calculateSalary('cto');
calculateSalary('developer');
calculateSalary('default');








