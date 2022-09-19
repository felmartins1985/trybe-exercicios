/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/
class Employee {
  private static employeeCount = 0
  constructor(public name: string) {
    Employee.addEmployee(); // quando eu devo colocar a funcao dentro do constructor?
  // nesse caso, toda vez eu crio uma nova instancia, eu chamo a funcao addEmployee
  // e adiciono mais um numero atributo employeeCount
  }
  private static addEmployee() {
    this.employeeCount += 1;// eu nao estou acessando um atributo?
  }
  static get employees() {
    return this.employeeCount;
  }
}
console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
/*
Saída:
0
1
2
*/