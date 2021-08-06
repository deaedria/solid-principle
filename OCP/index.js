// Open Close Principle (OCP)
//bad
// class PaymentGateway{
//     constructor(type){
//         this.type = type
//     }

//     pay(saldo){
//         if(this.type == 'cash'){
//             // pay with cash
//         }else{
//             // pay with credit card
//         }
//     }
// }

//good
class PaymentGateway{ //gambaran dari kelas-kelas di bawahnya
    pay(saldo){

    }
}

class PaymentCash extends PaymentGateway{
    pay(saldo){
        return saldo
        // untuk logic nya
    }
}

class PaymentCredit extends PaymentGateway{
    pay(){
        // untuk logic nya
    }
}

const payment = new PaymentCash()
payment.pay(15000)