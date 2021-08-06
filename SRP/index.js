// Single Responsibility Principle (SRP)
// dalam satu class hanya memiliki satu tangung jawab
// satu class hanya boleh satu alasan untuk merubah sesuatu (tidak dapat digabungkan satu sama lain)

// bad
// class Employee{
//     calculatePay(){
//         // logic untuk memperhitungkan payment
//     }

//     save(){
//         // untuk menambahkan employee baru
//     }
// }


//good
class Employee{
    calculatePay(){

    }
}

class EmployeeRepo{
    save(){

    }

    update(){

    }
}