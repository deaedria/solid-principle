// Liskov Substitution Principle (LSP)
// pergantian yang selaras
// sebuah objek anak mereferensikan ke objek parent, jika ada pergantian di class anak tidak boleh ada yang ambigu
class Employee{
    // do logic
    getJobDeskDetail(id){
        // do logic
    }
}

class FreelanceEmployee extends Employee{
    constructor(){
        super()
    }

    getJobDeskDetail(id){
        super.getJobDeskDetail(id)
        console.log("Success Mengambil Job Desk Detail")
    }
}

// bad
class ContractEmployee extends Employee{
    getJobDeskDetail(id){
        // broken base class
        console.log("Success Mengambil Job Desk Detail")
    }
}

//good
class ContractEmployee extends Employee{
    getJobDeskDetail(id){
        // selaraskan dengan yang sudah ada 
        super.getJobDeskDetail(id) 
        console.log("Success Mengambil Job Desk Detail")
    }
}