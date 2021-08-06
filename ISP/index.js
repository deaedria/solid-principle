// Interface Segregation Principle (ISP)
// extends ialah digunakan ketika class anak akan mewarisi semua method dari parent
// implements ialah sebuah class yang akan diimplementasikan harus memiliki semua method dari class rujukannya
class IEmployee{
    getJobDeskDetail(id)
    getDetailEmployee(id)
}

class ContractEmployee implements IEmployee{
    getJobDeskDetail(id){
        // do logic
    }
    getDetailEmployee(id){
        // tidak butuh method ini
    }
}

class IEmployee{
    getJobDeskDetail(id)
}

class IDetailEmployee{
    getDetailEmployee(id)
}

class ContractEmployee implements IEmployee{
    getJobDeskDetail(id)
}


